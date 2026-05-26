import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const footerSocials = [
  {
    icon: FaGithub,
    href: "https://github.com/Omkar-Desai01",
    ariaLabel: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/omkar-desai",
    ariaLabel: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:omkar.desai916@gmail.com",
    ariaLabel: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--espresso)",
        color: "var(--ivory)",
      }}
    >
      <div className="container-vintage py-12">
        <ScrollReveal>
          {/* ── Social Links ── */}
          <div className="flex justify-center gap-5 mb-8">
            {footerSocials.map(({ icon: Icon, href, ariaLabel }) => (
              <a
                key={ariaLabel}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="inline-flex items-center justify-center transition-colors duration-300"
                style={{
                  color: "var(--ivory)",
                  fontSize: 22,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--cognac)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--ivory)";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* ── Divider ── */}
          <div
            className="mx-auto mb-8"
            style={{
              height: 1,
              maxWidth: 400,
              background: "rgba(153, 95, 47, 0.3)",
            }}
          />

          {/* ── Copyright + Back-to-Top ── */}
          <div className="flex flex-col items-center gap-4">
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: "0.85rem",
                color: "var(--sage)",
                textAlign: "center",
              }}
            >
              © 2026 Omkar Desai — Crafted with care
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="pill-vintage flex items-center gap-2 transition-all duration-300"
              style={{
                cursor: "pointer",
                background: "rgba(153, 95, 47, 0.12)",
                borderColor: "rgba(153, 95, 47, 0.3)",
                color: "var(--ivory)",
                fontSize: "0.78rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(153, 95, 47, 0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(153, 95, 47, 0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaArrowUp size={12} />
              Back to Top
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
