import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Logic to separate numbers from symbols (e.g., "₹5Cr+" -> prefix: "₹", number: 5, suffix: "Cr+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const suffix = value.replace(prefix, "").replace(/\d+/, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const data = [
    { label: "Placement Rate", val: "90%+" },
    { label: "Global Tie-ups", val: "150+" },
    { label: "Scholarships", val: "₹5Cr+" },
    { label: "Research Papers", val: "2000+" }
  ];

  return (
    <div className="relative z-20 -mt-10 max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-gray-800 shadow-xl text-center"
          >
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
              <Counter value={item.val} />
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-500 mt-1">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}