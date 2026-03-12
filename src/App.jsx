import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Placements from "./components/Placements";
import CampusLife from "./components/CampusLife";
import Schools from "./components/Schools";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
      <Header />
      <section id="home"><Hero /></section>
      <Stats />
      <section id="schools"><Schools /></section>           
      <Placements />
      <CampusLife />
      <Schools />
      <Testimonials />
      {/* Add your other components here */}
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;