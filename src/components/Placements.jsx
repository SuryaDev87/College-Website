import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(value), {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Placements() {
  const companies = ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Cognizant", "Adobe", "Meta"];

  return (
    <section className="py-20 bg-white dark:bg-[#020617] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase mb-4">Our Top Recruiters</p>
        <h2 className="text-4xl font-black text-[#0b2a4a] dark:text-white mb-12">
          Dream Companies. <span className="text-blue-500">Global Careers.</span>
        </h2>

        {/* Improved Marquee Effect */}
        <div className="relative flex overflow-x-hidden py-4">
          <motion.div 
            className="flex whitespace-nowrap gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {/* We duplicate the array to ensure the loop is seamless */}
            {[...companies, ...companies].map((company, index) => (
              <span 
                key={index} 
                className="text-2xl font-bold tracking-tight text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default px-4"
              >
                {company}
              </span>
            ))}
          </motion.div>

          {/* Gradient Overlays for better visibility/blending on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#020617] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#020617] to-transparent"></div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
            <h4 className="text-4xl font-black text-blue-600">
              <Counter value="45" suffix=" LPA" />
            </h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wide">Highest Package</p>
          </div>

          <div className="p-8 rounded-3xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800">
            <h4 className="text-4xl font-black text-yellow-600">
              <Counter value="90" suffix="%" />
            </h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wide">Placement Record</p>
          </div>

          <div className="p-8 rounded-3xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800">
            <h4 className="text-4xl font-black text-green-600">
              <Counter value="500" suffix="+" />
            </h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase tracking-wide">Hiring Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}