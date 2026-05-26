import { FaRobot, FaBrain, FaCogs } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { ProjectsDecorations } from "./VintageDecorations";

/* ─── Project Data ─── */
const projects = [
  {
    title: "Enterprise AI Chatbot NPM Package",
    tags: ["React", "TypeScript", "NPM", "AI"],
    description:
      "Engineered and maintained a widely adopted internal NPM package delivering plug-and-play AI chatbot integration in under 10 lines of code. Standardised AI adoption across all internal development teams and became the company default for new projects.",
    icon: FaRobot,
    featured: true,
    highlight: "Company-wide adoption",
  },
  {
    title: "AI-Powered Autonomous Web Dev Workflow",
    tags: ["Node.js", "LangChain", "AI Agents"],
    description:
      "Architected an end-to-end agentic web development system with specialised AI agents (Project Manager, Developer, QA). Implemented an interactive feedback loop enabling the PM agent to dynamically clarify ambiguous requirements before code generation.",
    icon: FaBrain,
    featured: false,
  },
  {
    title: "Flowcell Enterprise Platform",
    tags: ["React", "Node.js", "REST APIs"],
    description:
      "Developed key modules (Project Master, Unit Master, Password & Profile Management) with third-party API integrations, improving data consistency and reducing manual configuration overhead.",
    icon: FaCogs,
    featured: false,
  },
];

/* ─── Featured Project Card ─── */
function FeaturedCard({ project, delay }) {
  const Icon = project.icon;

  return (
    <ScrollReveal delay={delay} className="md:col-span-2">
      <article
        className="card-vintage group relative overflow-hidden"
        style={{
          borderLeft: "4px solid var(--cognac)",
          background: "var(--parchment)",
        }}
      >
        {/* Featured badge */}
        <span
          className="absolute top-4 right-4 pill-vintage text-xs font-semibold tracking-wide uppercase"
          style={{
            background: "rgba(153, 95, 47, 0.15)",
            color: "var(--espresso)",
          }}
        >
          Featured
        </span>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Icon circle */}
          <div
            className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full"
            style={{ background: "var(--cognac)" }}
          >
            <Icon className="text-2xl" style={{ color: "var(--ivory)" }} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-xl md:text-2xl font-bold mb-3"
              style={{
                fontFamily: '"Playfair Display", serif',
                color: "var(--espresso)",
              }}
            >
              {project.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="pill-vintage">
                  {tag}
                </span>
              ))}
            </div>

            <p
              className="leading-relaxed mb-4"
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                color: "var(--ink)",
              }}
            >
              {project.description}
            </p>

            {/* Highlight stat */}
            {project.highlight && (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "rgba(153, 95, 47, 0.10)",
                  color: "var(--cognac)",
                  border: "1px solid rgba(153, 95, 47, 0.2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--cognac)" }}
                />
                {project.highlight}
              </div>
            )}
          </div>
        </div>

        {/* Hover warm-glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(153,95,47,0.04), transparent 70%)",
          }}
        />
      </article>
    </ScrollReveal>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project, delay }) {
  const Icon = project.icon;

  return (
    <ScrollReveal delay={delay}>
      <article
        className="card-vintage group relative overflow-hidden h-full transition-transform duration-300 hover:scale-[1.01]"
        style={{ background: "var(--parchment)" }}
      >
        {/* Icon circle */}
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full mb-5"
          style={{ background: "var(--cognac)" }}
        >
          <Icon className="text-lg" style={{ color: "var(--ivory)" }} />
        </div>

        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold mb-3"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "var(--espresso)",
          }}
        >
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="pill-vintage">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p
          className="leading-relaxed"
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            color: "var(--ink)",
          }}
        >
          {project.description}
        </p>

        {/* Hover warm-glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(153,95,47,0.05), transparent 70%)",
          }}
        />
      </article>
    </ScrollReveal>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <ProjectsDecorations />
      <div className="container-vintage">
        {/* Header */}
        <ScrollReveal>
          <h2 className="section-heading">Key Projects</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="section-subtitle">
            Crafting solutions that make a difference
          </p>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
            project.featured ? (
              <FeaturedCard
                key={project.title}
                project={project}
                delay={0.2}
              />
            ) : (
              <ProjectCard
                key={project.title}
                project={project}
                delay={0.2 + (index - 1) * 0.15}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
