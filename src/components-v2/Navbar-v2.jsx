import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Active section via Intersection Observer ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  /* ── Close mobile menu on resize above md ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 18, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_2px_20px_rgba(42,26,14,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-vintage flex items-center justify-between h-16 md:h-20">
        {/* ── Logo / Monogram ── */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="relative group"
          aria-label="Home"
        >
          <span className="font-serif text-2xl md:text-3xl font-bold text-espresso tracking-tight select-none">
            O
            <span className="text-cognac">D</span>
          </span>
          {/* Subtle underline on hover */}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cognac transition-all duration-300 group-hover:w-full" />
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link, i) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-cognac"
                      : "text-ink/70 hover:text-espresso"
                  }`}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <motion.span
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-cognac rounded-full"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ originX: 0.5 }}
                  />
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* ── Mobile Hamburger Toggle ── */}
        <motion.button
          className="md:hidden relative z-50 p-2 text-espresso"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-ivory/95 backdrop-blur-lg border-t border-cognac/10"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((link, i) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block py-3 px-4 rounded-lg text-base font-body font-medium transition-all duration-300 ${
                        isActive
                          ? "text-cognac bg-cognac/8 border-l-2 border-cognac"
                          : "text-ink/70 hover:text-espresso hover:bg-parchment/50"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
