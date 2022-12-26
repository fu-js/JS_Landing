import Countdown from "./Countdown";
import Departments from "./Departments";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Timeline from "./Timeline";

function App() {
  return (
    <main className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20">
        <Hero />
        <Departments />
        <Timeline />
        <Gallery />
        <Countdown />
      </div>
      <Footer />
    </main>
  );
}

export default App;
