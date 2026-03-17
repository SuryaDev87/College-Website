import React from 'react';
import logo from "../assets/logo.png"; // Ensure path is correct

export default function Footer() {
  const footerSections = [
    {
      title: "About University",
      links: ["About ITM", "Leadership", "Governance", "Awards & Ranking", "Infrastructure", "NIRF"]
    },
    {
      title: "Programmes",
      links: ["Graduate", "Postgraduate", "Ph.D. Programmes", "School of Engineering", "School of Management", "School of Nursing"]
    },
    {
      title: "Student Resources",
      links: ["Notices", "Academic Calendar", "MIS Login", "LMS Login", "Anti Ragging", "Virtual Tour"]
    }
  ];

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & DESCRIPTION */}
          <div className="space-y-6">
            <img src={logo} alt="ITM Logo" className="h-16 w-auto dark:invert brightness-200" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              ITM University Gwalior is the premier destination for industry-led education 
              in Madhya Pradesh, committed to nurturing innovators and global leaders.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <div key={social} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-white/10 text-[10px] uppercase font-bold">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>

          {/* 2. DYNAMIC LINKS SECTIONS */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold flex items-center group">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 text-blue-500">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. BOTTOM CONTACT STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/5 text-sm">
          <div>
            <p className="text-blue-500 font-bold uppercase text-[10px] mb-1">General Helpline</p>
            <p className="font-black text-lg">+91-7987004308</p>
          </div>
          <div>
            <p className="text-blue-500 font-bold uppercase text-[10px] mb-1">Official Email</p>
            <p className="font-black">info@itmuniversity.ac.in</p>
          </div>
          <div>
            <p className="text-blue-500 font-bold uppercase text-[10px] mb-1">Location</p>
            <p className="text-gray-400">NH-44, Bypass Turari, Jhansi Road, Gwalior</p>
          </div>
        </div>

        {/* 4. FINAL DISCLAIMER */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] max-w-2xl leading-relaxed uppercase tracking-tight">
            Disclaimer: ITM University Gwalior is an independent institution with no affiliation to any other university of a similar name in India. All rights reserved © 2026.
          </p>
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}