import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Node.js Trainee",
      company: "OpenSpace Services",
      location: "Mumbai, India",
      period: "December 2024 – Present",
      description: [
        "Developed comprehensive backend modules using Node.js, Express, and SQL to improve system functionality and data management.",
        "Integrated Strapi CMS to manage and customize content, improving data consistency across platforms.",
        "Designed and implemented 20+ project modules such as Project Master, Flowcell Master, and User Authentication systems.",
        "Built robust API endpoints for seamless integration with third-party services.",
        "Enhanced security protocols, including password management systems and profile customization tools.",
        "Conducted rigorous testing and debugging to ensure optimal performance and system stability.",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Freelance Developer",
      company: "Self-Learning Projects",
      location: "Remote",
      period: "November 2023 – December 2024",
      description: [
        "Developed three large-scale freelance projects using Node.js, React, and SQL to build web-based systems with integrated REST APIs.",
        "Created a Material Rates module that dynamically calculated cost structures based on input data, improving budget accuracy.",
        "Built features like Currency Definitions, Reason Definitions, and Port Management to enhance system usability and data tracking.",
        "Participated in continuous learning by completing advanced certification courses in Node.js, SQL, and Strapi.",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Associate Software Engineer",
      company: "Gupshup Technologies",
      location: "Mumbai, India",
      period: "September 2022 – November 2023",
      description: [
        "Developed WhatsApp chatbots using WhatsApp Business API, improving customer engagement and reducing response times by 50%.",
        "Designed and implemented microservices to automate manual support tasks, boosting productivity by 30%.",
        "Managed and enhanced internal operational systems using REST APIs, SQL, and Python.",
        "Collaborated with Meta (Facebook) teams to resolve API-related issues for improved performance.",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Technical Content Engineer Intern",
      company: "Kalvi Educations",
      location: "Remote",
      period: "August 2022 – September 2022",
      description: [
        "Developed comprehensive web development courses for Angular, React, and JavaScript.",
        "Created projects and assignments to enhance student learning outcomes.",
      ],
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  const education = {
    degree: "Bachelor of Engineering in Information Technology",
    school: "NMIMS University, Mumbai",
    period: "Graduated January 2022",
    gpa: "CGPA: 8.22/10",
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
            full-stack developer with expertise in modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
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
