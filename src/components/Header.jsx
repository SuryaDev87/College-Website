import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]" : "bg-transparent"}`}>
      
      {/* 1. NEON UTILITY BAR */}
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
            
            {/* HIGHLIGHTED PORTALS */}
            <a href="https://lms.itmgoi.in/" target="_blank" className="relative px-4 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              LMS Portal
            </a>
            <a href="http://mis.itmgoi.in/" target="_blank" className="relative px-4 py-1 bg-amber-500/20 border border-amber-400/50 rounded-full text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              MIS Login
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-5 group cursor-pointer">
           <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
             <img src={logo} alt="ITM" className="relative h-14 w-14 object-contain bg-white rounded-full p-1.5 shadow-xl"/>
           </div>
           <div className={`flex flex-col leading-none ${isScrolled || darkMode ? "text-current" : "text-[#0b2a4a]"}`}>
             <span className="font-black text-4xl tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-[#0b2a4a] to-blue-600 dark:from-white dark:to-blue-400">
               ITM GOI
             </span>
             <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] mt-1 uppercase">Gwalior • Excellence</span>
           </div>
        </div>

        <nav className="hidden xl:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[14px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200">
            {['Home', 'Admission', 'Departments', 'TAP', 'Research'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="relative group overflow-hidden py-2">
                <span className="group-hover:text-blue-600 transition-colors">{link}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* STYLISH MORE DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-600 cursor-pointer py-2">
                MORE <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
              </button>

              <div className="absolute top-full right-0 mt-2 w-72 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2rem] p-8 border border-white/20 dark:border-gray-800 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500">
                <div className="grid gap-5 text-[12px] font-black tracking-widest">
                  {['Clubs/Cell', 'Alumni', 'Gallery', 'IEEE'].map(item => (
                    <a key={item} href="#" className="flex justify-between items-center group/item hover:text-blue-600">
                      {item} <span className="opacity-0 group-hover/item:opacity-100 translate-x-[-10px] group-hover/item:translate-x-0 transition-all">→</span>
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

          <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl hover:scale-125 transition-transform">
            {darkMode ? "✨" : "🌙"}
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