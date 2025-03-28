import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFileDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6 order-2 lg:order-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-secondary font-mono"
            >
              Hi there! 👋 I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl font-bold"
            >
              <span className="text-textPrimary">Omkar</span>{" "}
              <span className="text-secondary">Desai</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl text-textSecondary font-semibold"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-textSecondary max-w-2xl"
            >
              Passionate about crafting beautiful and functional web
              experiences. Specializing in modern web technologies and creating
              elegant solutions to complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/Omkar Desai Resume Mar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 transition-colors duration-300 flex items-center gap-2"
              >
                <FaFileDownload />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex space-x-6 pt-4"
            >
              <a
                href="https://github.com/Omkar-Desai01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-desai-01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a
                href="https://omkardesai-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <FaExternalLinkAlt size={24} />
              </a> */}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-secondary/20 blur-2xl"></div>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-secondary transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/1696428385172.jpg"
                  alt="Omkar Desai"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-secondary rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
