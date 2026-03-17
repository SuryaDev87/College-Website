import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const companies = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", 
  "Wipro", "Accenture", "Adobe", "IBM", "Oracle"
];

export default function Placements() {
  return (
    <section className="py-16 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - More Compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Reveal>
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">
                Career Outcomes
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-black text-[#0b2a4a] dark:text-white mt-2 tracking-tighter">
                Our <span className="text-blue-600">Alumni</span> Network
              </h2>
            </Reveal>
          </div>
          
          {/* Static Mini-Label for Marquee */}
          <Reveal delay={0.3}>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest pb-2">
              Top Recruiters —
            </p>
          </Reveal>
        </div>

        {/* --- COMPACT MARQUEE --- */}
        <div className="relative flex overflow-hidden py-6 border-y border-gray-100 dark:border-white/5 mb-16">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
            className="flex whitespace-nowrap gap-12 items-center"
          >
            {[...companies, ...companies].map((company, i) => (
              <span 
                key={i} 
                className="text-xl md:text-2xl font-black tracking-tight uppercase
                           text-[#0b2a4a] dark:text-white opacity-60 hover:opacity-100
                           transition-opacity cursor-default"
              >
                {company}
              </span>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10"></div>
        </div>

        {/* --- SIDE-BY-SIDE STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-70 mb-2">Highest Package</p>
                <div className="text-5xl font-black">45.0 <span className="text-xl">LPA</span></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
            >
              <p className="text-[10px] uppercase font-black tracking-widest text-blue-600 mb-2">Placement Rate</p>
              <div className="text-5xl font-black text-[#0b2a4a] dark:text-white">92%</div>
              <div className="mt-4 h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-blue-600"
                />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}