import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ThankYou from "./components/ThankYou";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get current route

  return (
    <div className="bg-[#0a192f] text-white flex md:flex-row flex-col min-h-screen">
      {location.pathname !== "/thankyou" && <Navbar />}
      <Routes>
        {location.pathname === "/thankyou" ? (
          <Route path="/thankyou" element={<ThankYou />} />
        ) : (
          <>
            <Route path="/" element={<MainContent />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
