import React from 'react';

const departments = [
  {
    name: "School of Engineering",
    icon: "⚙️",
    desc: "Nurturing innovators with cutting-edge labs and industry-led curriculum.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    name: "School of Management",
    icon: "📊",
    desc: "Developing global business leaders through case-study based learning.",
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "School of Law",
    icon: "⚖️",
    desc: "Promoting justice and excellence in legal education and research.",
    color: "from-purple-600 to-indigo-600"
  },
  {
    name: "Agriculture Science",
    icon: "🌱",
    desc: "Advancing sustainable farming and modern agricultural technologies.",
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Computer Applications",
    icon: "💻",
    desc: "Mastering the world of code, AI, and cybersecurity.",
    color: "from-red-500 to-rose-600"
  },
  {
    name: "Art & Design",
    icon: "🎨",
    desc: "Unleashing creativity in fashion, interior, and visual arts.",
    color: "from-pink-500 to-purple-500"
  }
];

export default function Departments() {
  return (
    <section id="departments" className="py-24 bg-gray-50 dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0b2a4a] dark:text-white mb-4 tracking-tighter">
            Explore our <span className="text-blue-600">Specializations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            World-class education across diverse disciplines designed to make you industry-ready from day one.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white dark:bg-gray-900/50 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2"
            >
              {/* Decorative Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-[0.03] rounded-[2.5rem] transition-opacity`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  {dept.icon}
                </div>
                
                <h3 className="text-xl font-black text-[#0b2a4a] dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {dept.desc}
                </p>

                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:gap-4 transition-all">
                  View Program <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}