import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-[#0a192f] text-white flex md:flex-row flex-col min-h-screen">
      <Navbar />
      <MainContent />
      {/* <Hero />
      <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
