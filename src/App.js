import React, { lazy, Suspense } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

const ThankYou = lazy(() => import("./components/ThankYou"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BackToTop = lazy(() => import("./components/BackToTop"));

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div
      className={`min-h-screen flex md:flex-row flex-col bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300`}
    >
      {location.pathname !== "/thankyou" && <Navbar />}

      <Routes>
        {location.pathname === "/thankyou" ? (
          <Route path="/thankyou" element={<ThankYou />} />
        ) : (
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading content...</div>}>
                <main className="w-full md:ml-96 md:mr-0 md:ml-1/4">
                  <Hero />
                  <About />
                  <Projects />
                  <Skills />
                  <Contact />
                  <Footer />
                  <BackToTop />
                </main>
              </Suspense>
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
