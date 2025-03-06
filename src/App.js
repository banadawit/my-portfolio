import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div className="bg-[#0a192f] text-white flex md:flex-row flex-col min-h-screen">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
