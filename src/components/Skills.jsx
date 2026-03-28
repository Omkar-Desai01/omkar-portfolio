import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJenkins,
} from "react-icons/fa";
import {
  SiExpress,
  SiRedux,
  SiSequelize,
  SiStrapi,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVite,
  SiJira,
  SiBootstrap,
  SiLangchain,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Languages",
      color: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "JavaScript (ES6+)", icon: <FaCode /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      icon: <FaReact className="w-8 h-8" />,
      title: "Frontend",
      color: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Responsive Design", icon: <FaCode /> },
      ],
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Backend",
      color: "from-green-500/20 to-emerald-500/20",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "RESTful APIs", icon: <FaServer /> },
        { name: "Microservices", icon: <FaServer /> },
        { name: "LangChain", icon: <FaCode /> },
      ],
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Databases",
      color: "from-yellow-500/20 to-amber-500/20",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Sequelize ORM", icon: <SiSequelize /> },
      ],
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "DevOps & Tools",
      color: "from-orange-500/20 to-red-500/20",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git/GitHub", icon: <FaGitAlt /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "CI/CD", icon: <FaTools /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Strapi CMS", icon: <SiStrapi /> },
        { name: "JIRA", icon: <SiJira /> },
      ],
    },
  ];

  const practices = [
    "Agile/Scrum",
    "Unit Testing",
    "Code Review",
    "Technical Documentation",
  ];

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(100,255,218,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            work with across the full stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-6 h-full border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
                <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-textPrimary group-hover:text-secondary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + skillIndex * 0.1,
                      }}
                      className="flex items-center space-x-2 text-textSecondary group-hover:text-textPrimary transition-colors duration-300"
                    >
                      <span className="text-secondary text-lg">
                        {skill.icon}
                      </span>
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
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
          <h3 className="text-2xl font-semibold mb-8">Practices & Methodologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {practices.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
