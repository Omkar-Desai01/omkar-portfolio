import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarV2 from "./components-v2/Navbar-v2";
import HeroV2 from "./components-v2/Hero-v2";
import AboutV2 from "./components-v2/About-v2";
import ExperienceV2 from "./components-v2/Experience-v2";
import ProjectsV2 from "./components-v2/Projects-v2";
import SkillsV2 from "./components-v2/Skills-v2";
import LeadershipV2 from "./components-v2/Leadership-v2";
import ContactV2 from "./components-v2/Contact-v2";
import FooterV2 from "./components-v2/Footer-v2";
import SectionDivider from "./components-v2/SectionDivider";
import TerminalEasterEgg from "./components/TerminalEasterEgg";
import SnakeGame from "./components/SnakeGame";

function AppV2() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSnakeGameVisible, setIsSnakeGameVisible] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const [konamiCode, setKonamiCode] = useState([]);

  // Konami code sequence
  const konamiSequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ];

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Konami code listener
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

  return (
    <div className="relative">
      {/* Paper grain texture overlay */}
      <div className="grain-overlay" />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <NavbarV2 />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroV2 />
        <SectionDivider />
        <AboutV2 />
        <SectionDivider />
        <ExperienceV2 />
        <SectionDivider />
        <ProjectsV2 />
        <SectionDivider />
        <SkillsV2 />
        <SectionDivider />
        <LeadershipV2 />
        <SectionDivider />
        <ContactV2 />
        <FooterV2 />
      </motion.main>

      {/* Easter eggs (kept from original, restyled via CSS) */}
      <TerminalEasterEgg
        isMatrixActive={isMatrixActive}
        setIsMatrixActive={setIsMatrixActive}
        setIsSnakeGameVisible={setIsSnakeGameVisible}
      />
      <SnakeGame
        isVisible={isSnakeGameVisible}
        onClose={() => setIsSnakeGameVisible(false)}
      />
    </div>
  );
}

export default AppV2;
