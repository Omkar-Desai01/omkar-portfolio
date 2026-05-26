import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { SkillsDecorations } from "./VintageDecorations";

/* ─── Skill Categories Data ─── */
const categories = [
  {
    title: "Languages",
    icon: FaCode,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: FaPalette,
    skills: ["React.js", "Redux", "Bootstrap", "Responsive Web Design"],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "LangChain"],
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Sequelize ORM"],
  },
  {
    title: "DevOps & Tools",
    icon: FaTools,
    skills: [
      "AWS",
      "Docker",
      "Git/GitHub",
      "Jenkins",
      "CI/CD",
      "Vite",
      "Strapi CMS",
      "JIRA",
    ],
  },
  {
    title: "Practices",
    icon: FaClipboardCheck,
    skills: [
      "Agile/Scrum",
      "Unit Testing",
      "Code Review",
      "Technical Documentation",
    ],
  },
];

/* ─── Framer Motion Variants ─── */
const pillContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

/* ─── Category Card ─── */
function CategoryCard({ category, delay }) {
  const Icon = category.icon;

  return (
    <ScrollReveal delay={delay}>
      <div className="card-vintage h-full group">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
            style={{ background: "rgba(153, 95, 47, 0.12)" }}
          >
            <Icon className="text-lg" style={{ color: "var(--cognac)" }} />
          </div>
          <h3
            className="text-lg font-bold"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: "var(--espresso)",
            }}
          >
            {category.title}
          </h3>
        </div>

        {/* Skill pills with stagger animation */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={pillContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {category.skills.map((skill) => (
            <motion.span
              key={skill}
              className="pill-vintage"
              variants={pillVariants}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Skills Section ─── */
export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--parchment)" }}
    >
      <SkillsDecorations />
      <div className="container-vintage">
        {/* Header */}
        <ScrollReveal>
          <h2 className="section-heading">Technical Skills</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">
            Technologies and tools in my toolkit
          </p>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              delay={0.15 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
