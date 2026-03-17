import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // Added for the glass effect

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]" : "bg-transparent"}`}>
      
      {/* 1. NEON UTILITY BAR (STAYS EXACTLY THE SAME) */}
      <div className="hidden md:block bg-gradient-to-r from-[#0b2a4a] via-[#1e40af] to-[#0b2a4a] dark:from-black dark:via-[#111827] dark:to-black text-[12px] text-white/90 py-2 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center font-bold tracking-tight">
          <div className="flex gap-8 opacity-80">
            <a href="#" className="hover:text-cyan-400 transition-colors">Anti-Ragging & Grievance</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">NIRF</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">IQAC</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase">NAAC</a>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-cyan-400 transition-colors">Online Payment</a>
            <div className="h-3 w-[1px] bg-white/20"></div>
            
            <a href="https://lms.itmgoi.in/" target="_blank" className="relative px-4 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              LMS Portal
            </a>
            <a href="http://mis.itmgoi.in/" target="_blank" className="relative px-4 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              MIS Login
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (ONLY THE HOVER LOGIC UPDATED) */}
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group cursor-pointer">
          <img 
            src={logo} 
            alt="ITM Logo" 
            className="h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105 dark:invert dark:brightness-200"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-10">
          <div 
            className="flex items-center gap-2 text-[14px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200 relative"
            onMouseLeave={() => setHoveredItem(null)} // Reset when mouse leaves nav
          >
            {['Home', 'Admission', 'Departments', 'TAP', 'Research'].map((item) => (
              <Link
                key={item}
                to={item === 'Departments' ? '/cs' : '/'}
                onMouseEnter={() => setHoveredItem(item)}
                className="relative px-5 py-2 transition-colors duration-300 z-10 hover:text-blue-600"
              >
                {/* THE IPHONE-STYLE GLASS PILL */}
                {hoveredItem === item && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 bg-gray-200/50 dark:bg-white/10 backdrop-blur-lg rounded-full border border-gray-300/50 dark:border-white/10 shadow-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </Link>
            ))}
            
            {/* MORE DROPDOWN WITH GLASS HOVER */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setHoveredItem('more')}
                className="relative flex items-center gap-2 px-5 py-2 hover:text-blue-600 cursor-pointer uppercase z-10"
              >
                {hoveredItem === 'more' && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 bg-gray-200/50 dark:bg-white/10 backdrop-blur-lg rounded-full border border-gray-300/50 dark:border-white/10"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                    MORE <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
                </span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2rem] p-8 border border-white/20 dark:border-gray-800 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500">
                <div className="grid gap-5 text-[12px] font-black tracking-widest uppercase">
                  {['Clubs/Cell', 'Alumni', 'Gallery', 'IEEE'].map(subItem => (
                    <a key={subItem} href="#" className="flex justify-between items-center group/item hover:text-blue-600">
                      {subItem} <span className="opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all">→</span>
                    </a>
                  ))}
                  <div className="h-[1px] bg-gray-100 dark:bg-gray-800 my-2"></div>
                  <a href="#" className="text-red-500 hover:scale-105 transition-transform origin-left">Grievance Form</a>
                  <a href="#" className="text-blue-500 hover:scale-105 transition-transform origin-left">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-800/50 mx-2"></div>

          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="relative w-14 h-7 flex items-center bg-gray-200 dark:bg-blue-900/40 rounded-full p-1 cursor-pointer transition-colors duration-300 border border-gray-300 dark:border-blue-700/50"
          >
            <div className={`absolute w-5 h-5 bg-white dark:bg-blue-400 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}>
              {darkMode ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </div>
          </button>
          
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#0b2a4a] dark:bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xs tracking-widest hover:bg-transparent transition-colors">
              APPLY NOW
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}