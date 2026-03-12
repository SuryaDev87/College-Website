export default function CampusLife() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-[#0b2a4a] dark:text-white">Campus <span className="text-blue-600">Culture</span></h2>
            <p className="text-gray-500 mt-2 italic">Beyond the classrooms.</p>
          </div>
          <button className="text-sm font-bold text-blue-600 border-b-2 border-blue-600">View Gallery</button>
        </div>

        <div className="grid md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-gray-200 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Fest"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end"><h3 className="text-white font-bold text-xl">KRONOS - Annual Fest</h3></div>
          </div>
          <div className="md:col-span-2 bg-gray-200 rounded-[2rem] overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Sports"/>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex items-end"><h3 className="text-white font-bold text-xl">Sports Complex</h3></div>
          </div>
          <div className="bg-gray-200 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Lab"/>
          </div>
          <div className="bg-yellow-400 rounded-[2rem] flex items-center justify-center p-6 text-center">
            <p className="font-black text-[#0b2a4a] leading-tight">165+ ACRES OF LUSH GREEN CAMPUS</p>
          </div>
        </div>
      </div>
    </section>
  );
}