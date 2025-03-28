import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Proficient in building end-to-end web applications using Node.js, React, and modern JavaScript frameworks with a focus on scalability and performance.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend & APIs",
      description:
        "Experienced in developing robust backend systems using Node.js, Express, and integrating with various APIs including WhatsApp Business API and third-party services.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Database & CMS",
      description:
        "Skilled in SQL databases, Strapi CMS implementation, and designing efficient data management systems for scalable applications.",
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "DevOps & Tools",
      description:
        "Proficient with Docker, Vite, and modern development tools, with experience in automating workflows and improving development processes.",
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
            A passionate Full Stack Developer with expertise in modern web
            technologies and a proven track record of delivering scalable
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              With a strong foundation in Information Technology from NMIMS
              University and extensive experience in the industry, I specialize
              in creating efficient, scalable, and user-friendly web
              applications.
            </p>
            <p>
              My expertise spans across the full stack, from developing robust
              backend systems with Node.js and Express to implementing modern
              frontend solutions with React. I have a proven track record of
              improving system performance, automating workflows, and delivering
              high-quality solutions.
            </p>
            <p>
              I'm particularly experienced in working with WhatsApp Business
              API, Strapi CMS, and various database systems. My approach
              combines technical expertise with strong problem-solving skills
              and a commitment to delivering excellent results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
