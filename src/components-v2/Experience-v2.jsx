import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { FaBriefcase } from "react-icons/fa";
import { ExperienceDecorations } from "./VintageDecorations";

/* ── Experience data ── */
const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "OpenSpace Services",
    location: "Mumbai",
    period: "Dec 2024 – Present",
    bullets: [
      "Led end-to-end development for enterprise client Yazaki, architecting scalable solutions with MySQL, React.js, and Node.js",
      "Architected 40+ backend modules using Node.js and Express.js, integrating RESTful APIs across 5+ client projects",
      "Optimised SQL data models and queries via Sequelize ORM, improving application performance by 30%",
      "Spearheaded legacy PHP-to-Node.js microservices migration, reducing response times by 40%",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Consulting",
    location: "Mumbai",
    period: "Dec 2023 – Nov 2024",
    bullets: [
      "Built responsive React.js / Redux / Bootstrap front-end for Dolphin Furnishing India, improving user task completion by 25%",
      "Designed and launched Trim Vault customer portal using HTML5, CSS3, and JavaScript with RESTful API integration",
      "Prototyped back-end CRUD services using Node.js, Express, MySQL, and MongoDB",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Gupshup Technologies",
    location: "Mumbai",
    period: "Sep 2022 – Nov 2023",
    bullets: [
      "Developed 6+ WhatsApp chatbots via WhatsApp Business API for Netflix Turkey and Coca-Cola India, handling 20,000+ monthly interactions",
      "Designed RESTful APIs, authored complex SQL queries, and automated data pipelines in Python — improving data processing throughput by 40%",
      "Collaborated with Meta engineering teams to troubleshoot WhatsApp API integrations, cutting message-delivery error rates by 50%",
    ],
  },
];

/* ── Animation variants ── */
const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const cardLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-parchment relative overflow-hidden">
      <ExperienceDecorations />
      <div className="container-vintage">
        {/* ── Section header ── */}
        <ScrollReveal>
          <h2 className="section-heading">Experience</h2>
          <p className="section-subtitle">
            A journey through building enterprise solutions
          </p>
        </ScrollReveal>

        {/* ── Timeline wrapper ── */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="timeline-line" aria-hidden="true" />

          {/* Experience entries */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0; // desktop: alternate sides

            return (
              <div
                key={index}
                className={`
                  relative flex items-start mb-12 last:mb-0
                  ${/* Mobile: always right-aligned */""}
                  pl-12 md:pl-0
                  ${/* Desktop: alternate direction */""}
                  ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* ── Timeline node (circle) ── */}
                <motion.div
                  className={`
                    absolute z-10
                    left-[14px] md:left-1/2
                    top-6
                  `}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "var(--cognac)",
                    border: "3px solid var(--ivory)",
                    boxShadow: "0 0 0 2px var(--cognac)",
                    transform: "translateX(-50%)",
                  }}
                  variants={nodeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                />

                {/* ── Spacer for the other half (desktop only) ── */}
                <div className="hidden md:block md:w-1/2" />

                {/* ── Card ── */}
                <motion.div
                  className={`
                    w-full md:w-1/2
                    ${isLeft ? "md:pr-10" : "md:pl-10"}
                  `}
                  variants={
                    /* Mobile always slides from right; desktop alternates */
                    isLeft ? cardLeftVariants : cardRightVariants
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="card-vintage relative group">
                    {/* Briefcase icon badge */}
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full mb-4"
                      style={{
                        background: "rgba(153,95,47,0.1)",
                        color: "var(--cognac)",
                      }}
                    >
                      <FaBriefcase size={16} />
                    </span>

                    {/* Role */}
                    <h3 className="font-serif text-xl font-bold text-espresso leading-tight mb-1">
                      {exp.role}
                    </h3>

                    {/* Company & location */}
                    <p className="font-body text-cognac font-semibold text-sm mb-0.5">
                      {exp.company}{" "}
                      <span className="text-ink/40">— {exp.location}</span>
                    </p>

                    {/* Date */}
                    <p className="font-body text-sage text-sm mb-4 tracking-wide">
                      {exp.period}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-ink/85 font-body text-[0.9rem] leading-relaxed"
                        >
                          {/* Decorative bullet */}
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--cognac)" }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
