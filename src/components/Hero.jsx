import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../assets/slider1.jpg"; 
import slider2 from "../assets/slider2.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slider1, slider2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#020617] transition-colors duration-500 pt-20">
      
      {/* --- FULL SCREEN IMAGE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 bg-black"> {/* Black background prevents the white flash */}
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentIndex}
            src={images[currentIndex]} 
            alt="Main Campus" 
            // The image starts slightly larger and blurry
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            // It zooms into place and clears up
            animate={{ opacity: 0.95, scale: 1, filter: "blur(0px)" }}
            // It fades out while scaling up more
            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </AnimatePresence>
        
        {/* Subtle Gradient Overlay - Increased Z-index to stay on top of images */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent dark:from-[#020617]/90 dark:via-[#020617]/40 dark:to-transparent z-[1]"></div>
      </div>

      {/* Dynamic Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl animate-pulse z-[2]"></div>
      
      {/* Content Container - Lifted Upwards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full -mt-24"> 
        <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-xl">
            NAAC A+ Accredited University
          </span>
          
          <h1 className="text-5xl md:text-[80px] font-black text-[#0b2a4a] dark:text-white leading-[0.9] mb-8 tracking-tighter drop-shadow-sm">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
              Legacy.
            </span>
          </h1>
          
          <p className="text-lg text-gray-900 dark:text-gray-100 mb-10 max-w-lg leading-relaxed font-bold drop-shadow-md">
            Join a community of innovators at ITM Gwalior. India's premier destination 
            for industry-led education and global research.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-[#0b2a4a] dark:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Apply Now 2026
            </button>
            
            <button className="group flex items-center gap-4 px-8 py-5 rounded-2xl font-bold border-2 border-[#0b2a4a] dark:border-white text-[#0b2a4a] dark:text-white backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer shadow-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                <span className="ml-0.5 text-xs">▶</span>
              </div>
              Watch Tour
            </button>
          </div>
        </div>
      </div>

      {/* Campus Label - Compact at the Bottom */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:block">
         <div className="p-3 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl border border-white dark:border-gray-800 text-[#0b2a4a] dark:text-white shadow-2xl">
            <p className="text-[9px] uppercase font-bold tracking-widest opacity-70">Main Campus</p>
            <p className="text-xs font-bold tracking-tight">ITM GOI, Sitholi, Gwalior</p>
         </div>
      </div>
    </section>
  );
}