export default function Testimonials() {
  const t = [
    { name: "Rahul Sharma", role: "SDE @ Google", text: "ITM provided the perfect launchpad for my career. The faculty and labs are top-notch." },
    { name: "Priya Verma", role: "Architect", text: "The studio culture at ITM is amazing. It really helped me find my design language." }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#020617] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-16 dark:text-white">What Our <span className="text-blue-600">Alumni</span> Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 relative">
              <span className="absolute top-8 right-10 text-6xl text-blue-200 dark:text-blue-900 font-serif">“</span>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">{item.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold dark:text-white">{item.name}</h4>
                  <p className="text-xs text-blue-600 font-bold uppercase">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}