import Countdown from "./Countdown";
import Departments from "./Departments";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Intro from "./Intro";
import Timeline from "./Timeline";

function App() {
  return (
    <main className="bg-slate-100 relative">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 pb-20 space-y-20">
        <Intro />
        <Departments />
        <Timeline />
        <Gallery />
        <Countdown />
      </div>
      <Footer />

      {/* Floating button */}
      <a
        href="https://forms.gle/DSYf6KJC5sy5wd827"
        target="_blank"
        className="peer"
      >
        <button className="w-16 h-16 rounded-full bg-red-600 flex justify-center items-center fixed bottom-48 right-8 md:right-16 text-white shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </a>
      <a
        href="https://forms.gle/DSYf6KJC5sy5wd827"
        target="_blank"
        className="fixed bottom-48 right-28 lg:right-36 invisible peer-hover:visible origin-bottom bg-red-600 text-white rounded-lg px-4 py-2"
      >
        Đăng ký
      </a>
    </main>
  );
}

export default App;
