import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { ContactDecorations } from "./VintageDecorations";

/* ── Contact detail items ── */
const contactDetails = [
  {
    icon: FaEnvelope,
    label: "omkar.desai916@gmail.com",
    href: "mailto:omkar.desai916@gmail.com",
    sublabel: "Drop me an email",
  },
  {
    icon: FaPhone,
    label: "+91 93269 13582",
    href: "tel:+919326913582",
    sublabel: "Give me a call",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Mumbai, India",
    href: null,
    sublabel: "Based in",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Omkar-Desai01",
    ariaLabel: "GitHub",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/omkar-desai",
    ariaLabel: "LinkedIn",
    label: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--parchment)" }}
    >
      <ContactDecorations />
      <div className="container-vintage">
        {/* Header */}
        <ScrollReveal>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subtitle">
            Let's build something great together
          </p>
        </ScrollReveal>

        {/* Intro text */}
        <ScrollReveal delay={0.1}>
          <p
            className="text-center mx-auto mb-12"
            style={{
              maxWidth: 560,
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "var(--ink)",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {contactDetails.map(({ icon: Icon, label, href, sublabel }, i) => (
            <ScrollReveal key={label} delay={0.15 + i * 0.1}>
              {href ? (
                <a
                  href={href}
                  className="card-vintage group block text-center transition-all duration-300 hover:scale-[1.03]"
                  style={{ textDecoration: "none", padding: "2rem 1.5rem" }}
                >
                  <span
                    className="inline-flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(153, 95, 47, 0.1)",
                      border: "1.5px solid rgba(153, 95, 47, 0.2)",
                    }}
                  >
                    <Icon size={22} color="var(--cognac)" />
                  </span>
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--sage)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                    }}
                  >
                    {sublabel}
                  </p>
                  <p
                    className="font-body font-semibold"
                    style={{
                      color: "var(--espresso)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {label}
                  </p>
                </a>
              ) : (
                <div
                  className="card-vintage text-center"
                  style={{ padding: "2rem 1.5rem" }}
                >
                  <span
                    className="inline-flex items-center justify-center mx-auto mb-4"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(153, 95, 47, 0.1)",
                      border: "1.5px solid rgba(153, 95, 47, 0.2)",
                    }}
                  >
                    <Icon size={22} color="var(--cognac)" />
                  </span>
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--sage)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 6,
                    }}
                  >
                    {sublabel}
                  </p>
                  <p
                    className="font-body font-semibold"
                    style={{
                      color: "var(--espresso)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {label}
                  </p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Social Links */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center">
            <p
              className="mb-5"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--espresso)",
              }}
            >
              Connect with me
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, href, ariaLabel, label }) => (
                <a
                  key={ariaLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300"
                  style={{
                    border: "1.5px solid var(--cognac)",
                    background: "transparent",
                    color: "var(--cognac)",
                    textDecoration: "none",
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--cognac)";
                    e.currentTarget.style.color = "var(--ivory)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(153, 95, 47, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--cognac)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Direct email CTA */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-10">
            <a
              href="mailto:omkar.desai916@gmail.com"
              className="btn-vintage btn-primary inline-flex"
            >
              <FaEnvelope size={16} />
              Send Me an Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
