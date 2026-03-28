import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCogs, FaRobot, FaBrain } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Experienced in building end-to-end enterprise applications using Node.js, React.js, and Express.js, with a focus on scalable and maintainable solutions across healthcare, logistics, and industrial sectors.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Microservices & APIs",
      description:
        "Architected 40+ backend modules integrating RESTful APIs across 5+ client projects. Led a critical PHP-to-Node.js migration that cut API response times by 40%.",
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "AI & LLM Integration",
      description:
        "Engineered an internal AI chatbot NPM package adopted across all company projects. Built agentic AI workflows using LangChain with specialised agents for autonomous development.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Database & Optimisation",
      description:
        "Skilled in MySQL, PostgreSQL, and MongoDB with Sequelize ORM. Optimised SQL data models and queries, improving application performance by 30% and enhancing data retrieval speeds.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-tertiary relative overflow-hidden main-content"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,255,218,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-secondary">Me</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Full Stack Engineer with 3+ years building enterprise-grade web
            applications and integrating AI-powered workflows into production
            pipelines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-6 h-full border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
                <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-textPrimary group-hover:text-secondary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-textSecondary">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6 text-textSecondary">
            <p>
              Currently working as a Full Stack Software Engineer at OpenSpace
              Services, where I lead end-to-end development for enterprise
              client Yazaki, architecting scalable solutions with MySQL,
              React.js, and Node.js.
            </p>
            <p>
              My experience spans developing WhatsApp chatbots for clients like
              Netflix Turkey and Coca-Cola India (handling 20,000+ monthly
              interactions), automating data pipelines, and spearheading
              legacy system modernisations that significantly improve
              performance and scalability.
            </p>
            <p>
              Selected to represent the engineering team in the company's
              internal AI Centre of Excellence (CoE) — I evaluate and onboard
              LLM tooling and AI-assisted workflows that measurably reduce
              developer task time across active projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
