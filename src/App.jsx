import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SnakeCursor from "./components/SnakeCursor";
import TechScroll from "./components/TechScroll";
import TerminalEasterEgg from "./components/TerminalEasterEgg";
import SnakeGame from "./components/SnakeGame";
import MatrixRain from "./components/MatrixRain";

function App() {
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [isSnakeGameVisible, setIsSnakeGameVisible] = useState(false);
  const [konamiCode, setKonamiCode] = useState([]);

  // Konami code sequence
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      setKonamiCode((prev) => {
        const newCode = [...prev, e.key].slice(-10);
        if (newCode.join(",") === konamiSequence.join(",")) {
          setIsSnakeGameVisible(true);
          return [];
        }
        return newCode;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Hidden trigger for matrix effect
  const handleLogoClick = () => {
    setIsMatrixActive((prev) => !prev);
  };

  return (
    <Router>
      <div className="bg-primary min-h-screen text-textPrimary">
        <SnakeCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="fixed top-4 left-4 w-8 h-8 cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                    onClick={handleLogoClick}
                  >
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <Hero 
                    isMatrixActive={isMatrixActive}
                    setIsMatrixActive={setIsMatrixActive}
                  />
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Contact />
                  <TechScroll />
                  <Footer />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <TerminalEasterEgg 
          isMatrixActive={isMatrixActive}
          setIsMatrixActive={setIsMatrixActive}
          setIsSnakeGameVisible={setIsSnakeGameVisible}
        />
        <SnakeGame
          isVisible={isSnakeGameVisible}
          onClose={() => setIsSnakeGameVisible(false)}
        />
        <MatrixRain isActive={isMatrixActive} />
      </div>
    </Router>
  );
}

export default App;
