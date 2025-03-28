import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Experienced in building end-to-end applications using Node.js, React, and Express, with a focus on creating scalable and maintainable solutions.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend & APIs",
      description:
        "Proficient in developing microservices and integrating WhatsApp Business API, with experience in automating workflows and improving system efficiency.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Database & CMS",
      description:
        "Skilled in SQL databases and Strapi CMS, with experience in designing and implementing efficient data management systems and content workflows.",
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Tools & Technologies",
      description:
        "Proficient with Docker, REST APIs, and modern development tools. Experienced in system integration and performance optimization.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-tertiary relative overflow-hidden">
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
            A dedicated Full Stack Developer specializing in building robust and
            scalable web applications
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
              Currently working as a Node.js Trainee at OpenSpace Services,
              where I develop comprehensive backend modules and integrate
              various systems using modern technologies.
            </p>
            <p>
              My experience includes developing WhatsApp chatbots, automating
              workflows, and creating efficient backend systems. I've worked on
              projects ranging from custom CMS implementations to large-scale
              API integrations.
            </p>
            <p>
              I'm passionate about creating clean, efficient code and
              continuously learning new technologies to deliver better
              solutions. My technical expertise is complemented by strong
              problem-solving abilities and a collaborative approach to
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
