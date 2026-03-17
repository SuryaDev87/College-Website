import React from "react";
import { motion } from "framer-motion";

const campusHighlights = [
  { 
    title: "Techno-Cultural Fest", 
    subtitle: "KRONOS",
    size: "md:col-span-2 md:row-span-2", 
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Central Library", 
    subtitle: "Knowledge Hub",
    size: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Sports Arena", 
    subtitle: "Champions",
    size: "md:col-span-1 md:row-span-2", 
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1948&auto=format&fit=crop",
  },
  { 
    title: "Innovation Lab", 
    subtitle: "R&D",
    size: "md:col-span-1 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  { 
    title: "Student Cafeteria", 
    subtitle: "Eat & Chill",
    size: "md:col-span-2 md:row-span-1", 
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function CampusLife() {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Lifestyle
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-[#0b2a4a] dark:text-white mt-4 tracking-tighter"
          >
            Experience Life at <br />
            <span className="text-blue-600">ITM Gwalior.</span>
          </motion.h2>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[700px]">
          {campusHighlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`${item.size} relative group rounded-[2.5rem] overflow-hidden shadow-2xl h-80 md:h-full border border-gray-100 dark:border-white/10`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.subtitle}</p>
                <h3 className="text-white text-2xl font-black">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}