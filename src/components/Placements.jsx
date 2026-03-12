export default function Placements() {
  const companies = ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Cognizant"];
  
  return (
    <section className="py-20 bg-white dark:bg-[#020617] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-blue-600 font-bold text-xs tracking-[0.3em] uppercase mb-4">Our Top Recruiters</p>
        <h2 className="text-4xl font-black text-[#0b2a4a] dark:text-white mb-12">Dream Companies. <span className="text-blue-500">Global Careers.</span></h2>
        
        {/* Infinite Scroll Effect */}
        <div className="flex gap-12 items-center justify-center flex-wrap grayscale opacity-50 dark:invert transition-all">
          {companies.map((company) => (
            <span key={company} className="text-2xl font-black tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              {company}
            </span>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
            <h4 className="text-4xl font-black text-blue-600">45 LPA</h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase">Highest Package</p>
          </div>
          <div className="p-8 rounded-3xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800">
            <h4 className="text-4xl font-black text-yellow-600">90%</h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase">Placement Record</p>
          </div>
          <div className="p-8 rounded-3xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800">
            <h4 className="text-4xl font-black text-green-600">500+</h4>
            <p className="text-sm font-bold text-gray-500 mt-2 uppercase">Hiring Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}