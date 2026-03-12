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
          <div key={i} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-white/20 dark:border-gray-800 shadow-xl text-center">
            <div className="text-2xl font-black text-itm-blue dark:text-blue-400">{item.val}</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-500 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}