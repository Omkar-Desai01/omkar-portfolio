import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Software Engineer",
      company: "OpenSpace Services",
      location: "Mumbai, India",
      period: "December 2024 – Present",
      description: [
        "Led end-to-end development for enterprise client Yazaki, architecting scalable solutions with MySQL, React.js, and Node.js, accelerating project delivery against aggressive deadlines.",
        "Architected 40+ backend modules using Node.js and Express.js, integrating RESTful APIs across 5+ client projects spanning healthcare, logistics, and industrial equipment.",
        "Optimised SQL data models and queries via Sequelize ORM, improving application performance by 30% and enhancing data retrieval speeds.",
        "Spearheaded legacy PHP-to-Node.js microservices migration, reducing response times by 40% and improving system scalability across monolithic and microservice architectures.",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Consulting",
      location: "Mumbai, India",
      period: "December 2023 – November 2024",
      description: [
        "Built a responsive React.js / Redux / Bootstrap front-end for Dolphin Furnishing India, improving user task completion rate by 25%.",
        "Designed and launched the Trim Vault customer portal using HTML5, CSS3, and JavaScript with RESTful API integration.",
        "Prototyped back-end CRUD services using Node.js, Express, MySQL, and MongoDB; enforced code quality via ESLint and Prettier; deployed on Netlify with Git version control.",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Associate Software Engineer",
      company: "Gupshup Technologies",
      location: "Mumbai, India",
      period: "September 2022 – November 2023",
      description: [
        "Developed and deployed 6+ WhatsApp chatbots via the WhatsApp Business API for clients including Netflix Turkey and Coca-Cola India, handling 20,000+ monthly interactions with 90%+ first-contact resolution.",
        "Designed RESTful APIs, authored complex SQL queries, and automated data pipelines in Python — improving data processing throughput by 40%.",
        "Collaborated directly with Meta engineering teams to troubleshoot WhatsApp API integrations, cutting message-delivery error rates by 50%.",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const education = {
    degree: "B.Sc in Information Technology",
    school: "NMF College, Mumbai",
    period: "Graduated June 2022",
    gpa: "CGPA: 8.22 / 10",
    color: "from-yellow-500/20 to-amber-500/20",
  };

  return (
    <section
      id="experience"
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(100,255,218,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-secondary">Experience</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            My journey through various roles has shaped me into a versatile
            full-stack engineer with expertise in enterprise applications,
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${exp.color} blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-8 border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-secondary mt-1">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-textPrimary group-hover:text-secondary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-secondary">{exp.company}</p>
                      <p className="text-textSecondary">
                        {exp.location} | {exp.period}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-textSecondary space-y-2 ml-10">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="group-hover:text-textPrimary transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: experiences.length * 0.2 }}
            className="group relative"
          >
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${education.color} blur-xl group-hover:blur-2xl transition-all duration-500`}
            ></div>
            <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-8 border border-secondary/10 hover:border-secondary/30 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-secondary mt-1">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-secondary transition-colors duration-300">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-secondary">{education.school}</p>
                  <p className="text-textSecondary">
                    {education.period} | {education.gpa}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
