export default function Schools() {
  // Keeping your working links
  const schools = [
    { title: "Engineering", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", tag: "B.Tech/M.Tech" },
    { title: "Management", img: "https://images.unsplash.com/photo-1552664730-d307ca884978", tag: "MBA/BBA" },
    { title: "Sciences", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d", tag: "M.Sc/B.Sc" },
    { title: "Architecture", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e", tag: "B.Arch" }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-itm-blue dark:text-white uppercase">Explore Departments</h2>
          <div className="w-16 h-1 bg-yellow-500 mt-2"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {schools.map((school, i) => (
            <div key={i} className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-blue-500/20 transition-all">
              <img src={school.img} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-itm-blue via-itm-blue/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 p-8">
                <span className="text-yellow-400 text-xs font-bold">{school.tag}</span>
                <h3 className="text-white text-2xl font-bold mt-1">{school.title}</h3>
                <p className="text-gray-300 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn from industry experts and gain hands-on experience...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}