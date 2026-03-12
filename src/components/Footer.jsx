export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b2a4a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 italic">ITM UNIVERSITY</h3>
          <p className="text-blue-200 text-sm">Gwalior's pride in education, research, and innovation. Empowering students since 1997.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-yellow-500">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About ITM</a></li>
            <li><a href="#schools" className="hover:text-yellow-400">Our Schools</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-yellow-500">Contact</h4>
          <p className="text-sm">NH-44, Turari, Gwalior, MP</p>
          <p className="text-lg font-bold mt-2">1800-270-0031</p>
        </div>
      </div>
    </footer>
  );
}