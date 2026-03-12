export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 pt-20">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 border border-blue-100 dark:border-blue-800">
            NAAC A+ Accredited University
          </span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#0b2a4a] dark:text-white leading-[0.95] mb-8 tracking-tighter">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
              Legacy.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            Join a community of innovators at ITM Gwalior. India's premier destination 
            for industry-led education and global research.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button className="bg-[#0b2a4a] dark:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Apply Now 2026
            </button>
            
            <button className="group flex items-center gap-4 px-8 py-5 rounded-2xl font-bold border-2 border-gray-100 dark:border-gray-800 text-[#0b2a4a] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer shadow-sm">
              <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full shadow-lg group-hover:bg-red-600 transition-colors">
                <span className="ml-0.5 text-xs">▶</span>
              </div>
              Watch Tour
            </button>
          </div>
        </div>

        {/* Right Content - THE ITM GWALIOR IMAGE */}
        <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
          {/* Decorative Ring */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border-8 border-white dark:border-gray-900 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            {/* ITM Gwalior Building Image */}
            <img 
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Main Campus" 
              className="w-full h-full object-cover"
            />
            
            {/* Image Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Main Campus</p>
              <p className="text-sm font-semibold tracking-tight">ITM University, Turari, Gwalior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}