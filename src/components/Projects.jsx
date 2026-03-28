import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRobot, FaCubes, FaNpm } from "react-icons/fa";
import { SiLangchain } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Chatbot NPM Package",
      description:
        "Engineered and maintained a widely adopted internal NPM package (React + TypeScript) delivering plug-and-play AI chatbot integration in under 10 lines of code. Standardised AI adoption across all internal development teams and became the company default for new projects.",
      technologies: ["React", "TypeScript", "NPM", "AI/LLM", "SDK"],
      icon: <FaNpm className="w-12 h-12" />,
      github: "https://github.com/Omkar-Desai01",
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      title: "AI-Powered Autonomous Web Development",
      description:
        "Architected an end-to-end agentic web development system using Node.js and LangChain with specialised AI agents (Project Manager, Developer, QA). Implemented an interactive feedback loop enabling the PM agent to dynamically clarify ambiguous requirements before code generation.",
      technologies: ["Node.js", "LangChain", "AI Agents", "LLM", "Automation"],
      icon: <FaRobot className="w-12 h-12" />,
      github: "https://github.com/Omkar-Desai01",
      color: "from-cyan-500/20 to-green-500/20",
    },
    {
      title: "Flowcell Enterprise Platform",
      description:
        "Developed key modules (Project Master, Unit Master, Password & Profile Management) with third-party API integrations, improving data consistency and reducing manual configuration overhead.",
      technologies: ["Node.js", "Express", "MySQL", "React", "REST APIs"],
      icon: <FaCubes className="w-12 h-12" />,
      github: "https://github.com/Omkar-Desai01",
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-tertiary relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-tertiary/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Key <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Here are some of my key projects that showcase my expertise in
            enterprise development and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.color} blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-6 h-full border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
                <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-textPrimary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-textSecondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors duration-300 flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
