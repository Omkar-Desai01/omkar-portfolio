import { FaAward, FaGraduationCap } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { LeadershipDecorations } from "./VintageDecorations";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <LeadershipDecorations />
      <div className="container-vintage">
        {/* Section Header */}
        <ScrollReveal>
          <h2 className="section-heading">Leadership & Education</h2>
          <p className="section-subtitle">
            Driving innovation and continuous learning
          </p>
        </ScrollReveal>

        {/* ── Leadership & Initiatives ── */}
        <ScrollReveal delay={0.15}>
          <div
            className="mx-auto"
            style={{
              maxWidth: 820,
              border: "2px solid var(--cognac)",
              borderRadius: 16,
              padding: 6,
            }}
          >
            {/* Inner content area with extra padding for certificate feel */}
            <div
              style={{
                border: "1px solid rgba(153, 95, 47, 0.35)",
                borderRadius: 12,
                padding: "2.5rem 2rem",
                background:
                  "linear-gradient(135deg, rgba(228,214,169,0.35) 0%, rgba(245,240,225,0.6) 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative corner flourishes */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 12,
                  left: 14,
                  fontSize: 22,
                  color: "var(--cognac)",
                  opacity: 0.3,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                }}
              >
                ❦
              </span>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  fontSize: 22,
                  color: "var(--cognac)",
                  opacity: 0.3,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                }}
              >
                ❦
              </span>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <span
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(153, 95, 47, 0.1)",
                    border: "1.5px solid rgba(153, 95, 47, 0.25)",
                  }}
                >
                  <FaAward size={26} color="var(--cognac)" />
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-center mb-1"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.55rem",
                  fontWeight: 700,
                  color: "var(--espresso)",
                }}
              >
                AI Centre of Excellence
              </h3>

              {/* Subtle sub-label */}
              <p
                className="text-center mb-5"
                style={{
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--cognac)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Leadership & Initiatives
              </p>

              {/* Description */}
              <p
                className="text-center mx-auto"
                style={{
                  maxWidth: 640,
                  fontFamily: '"Source Sans 3", sans-serif',
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--ink)",
                }}
              >
                Selected to represent the engineering team in the company's
                internal AI Centre of Excellence (CoE) — evaluated and onboarded
                LLM tooling and AI-assisted workflows that measurably reduced
                developer task time across 5+ active projects, and set the
                standard for AI adoption across all internal teams.
              </p>

              {/* Bottom corner flourishes */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 14,
                  fontSize: 22,
                  color: "var(--cognac)",
                  opacity: 0.3,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  transform: "rotate(180deg)",
                }}
              >
                ❦
              </span>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 14,
                  fontSize: 22,
                  color: "var(--cognac)",
                  opacity: 0.3,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  transform: "rotate(180deg)",
                }}
              >
                ❦
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Ornamental Divider ── */}
        <SectionDivider />

        {/* ── Education ── */}
        <ScrollReveal delay={0.2}>
          <div className="card-vintage mx-auto" style={{ maxWidth: 580 }}>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Graduation Cap Icon */}
              <span
                className="shrink-0 inline-flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(153, 95, 47, 0.1)",
                  border: "1.5px solid rgba(153, 95, 47, 0.2)",
                }}
              >
                <FaGraduationCap size={28} color="var(--cognac)" />
              </span>

              {/* Text Content */}
              <div className="text-center sm:text-left">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--espresso)",
                    marginBottom: 4,
                  }}
                >
                  B.Sc in Information Technology
                </h3>

                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--cognac)",
                    marginBottom: 2,
                  }}
                >
                  NMF College, Mumbai
                </p>

                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: "0.9rem",
                    color: "var(--sage)",
                  }}
                >
                  Graduated June 2022 · CGPA: 8.22 / 10
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
