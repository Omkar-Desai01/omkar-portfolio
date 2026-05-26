import ScrollReveal from "./ScrollReveal";
import { FaRocket, FaRobot, FaServer } from "react-icons/fa";
import { AboutDecorations } from "./VintageDecorations";

/* ── Highlight data ── */
const highlights = [
  {
    icon: FaRocket,
    text: "Led critical migration at Yazaki — 40% faster API response times",
  },
  {
    icon: FaRobot,
    text: "Architected AI chatbot SDK adopted across all company projects",
  },
  {
    icon: FaServer,
    text: "Specialist in legacy system modernisation & scalable microservices",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <AboutDecorations />
      <div className="container-vintage">
        {/* ── Section header ── */}
        <ScrollReveal>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subtitle">
            Getting to know the developer behind the code
          </p>
        </ScrollReveal>

        {/* ── Split layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* ── Left column (60%) ── */}
          <ScrollReveal direction="left" className="w-full lg:w-[60%]">
            {/* Professional summary */}
            <p className="text-ink/90 text-lg leading-relaxed font-body mb-8">
              Full Stack Engineer with 3+ years building enterprise-grade web
              applications across healthcare, logistics, and industrial sectors.
              Led a critical migration at Yazaki that cut API response times by
              40% and architected an internal AI chatbot SDK adopted across all
              company projects. Specialist in legacy system modernisation,
              scalable microservices, and integrating LLM-powered workflows into
              production pipelines.
            </p>

            {/* Highlight cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <ScrollReveal key={i} delay={0.15 * (i + 1)} direction="left">
                  <div
                    className="flex items-start gap-4 bg-parchment rounded-lg p-5
                               border-l-4 border-cognac shadow-sm
                               hover:shadow-md transition-shadow duration-300"
                  >
                    <item.icon
                      className="text-cognac mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-ink/85 font-body text-[0.95rem] leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Right column (40%) — decorative frame ── */}
          <ScrollReveal
            direction="right"
            className="w-full lg:w-[40%] flex justify-center"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80">
              {/* Outer ornamental frame */}
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  border: "3px double var(--cognac)",
                  boxShadow:
                    "inset 0 0 0 6px var(--ivory), inset 0 0 0 8px rgba(153,95,47,0.25)",
                }}
              >
                {/* Corner ornaments — top-left */}
                <span
                  className="absolute -top-1.5 -left-1.5 w-5 h-5"
                  style={{
                    borderTop: "3px solid var(--cognac)",
                    borderLeft: "3px solid var(--cognac)",
                    borderTopLeftRadius: "4px",
                  }}
                />
                {/* top-right */}
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5"
                  style={{
                    borderTop: "3px solid var(--cognac)",
                    borderRight: "3px solid var(--cognac)",
                    borderTopRightRadius: "4px",
                  }}
                />
                {/* bottom-left */}
                <span
                  className="absolute -bottom-1.5 -left-1.5 w-5 h-5"
                  style={{
                    borderBottom: "3px solid var(--cognac)",
                    borderLeft: "3px solid var(--cognac)",
                    borderBottomLeftRadius: "4px",
                  }}
                />
                {/* bottom-right */}
                <span
                  className="absolute -bottom-1.5 -right-1.5 w-5 h-5"
                  style={{
                    borderBottom: "3px solid var(--cognac)",
                    borderRight: "3px solid var(--cognac)",
                    borderBottomRightRadius: "4px",
                  }}
                />
              </div>

              {/* Inner gradient card with image */}
              <div
                className="absolute inset-3 rounded-md flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: "var(--espresso)",
                }}
              >
                <img
                  src="/1696428385172.jpg"
                  alt="Omkar Desai"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{
                    filter: "sepia(0.4) contrast(1.1) brightness(0.9) saturate(0.8)",
                  }}
                />
                
                {/* Subtle inner shadow overlay to blend the image edges */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(42, 26, 14, 0.5)",
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
