import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { HeroDecorations } from "./VintageDecorations";

/* ── Typewriter subtitle text ── */
const TYPEWRITER_TEXT = "Full Stack Engineer · Node.js · React.js · MySQL";

/* ── Stat counter data ── */
const STATS = [
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 40, suffix: "+", label: "Backend Modules" },
  { target: 20, suffix: "K+", label: "Monthly Interactions" },
  { target: 6, suffix: "+", label: "Chatbots Deployed" },
];

/* ── Decorative SVG corner flourish ── */
function CornerFlourish({ className = "" }) {
  return (
    <svg
      className={className}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 170 C10 170, 10 80, 40 50 C70 20, 120 10, 170 10"
        stroke="#995F2F"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 170 C10 170, 20 110, 60 75 C100 40, 140 25, 170 10"
        stroke="#995F2F"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 170 C30 150, 30 120, 50 100 C70 80, 90 70, 100 60"
        stroke="#995F2F"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      {/* Small decorative leaf curl */}
      <path
        d="M35 135 C40 120, 55 115, 60 130 C50 125, 42 128, 35 135Z"
        fill="#995F2F"
      />
      <circle cx="25" cy="155" r="2.5" fill="#995F2F" />
      <circle cx="155" cy="25" r="2.5" fill="#995F2F" />
    </svg>
  );
}

/* ── Animated counter hook ── */
function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    let raf;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return count;
}

/* ── Individual stat counter component ── */
function StatCounter({ target, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(target, 2000, inView);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-3 py-4 min-w-[120px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <span className="font-serif text-3xl md:text-4xl font-bold text-espresso leading-none">
        {count}
        <span className="text-cognac">{suffix}</span>
      </span>
      <span className="font-body text-sm text-sage mt-1.5 tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Smooth scroll helper ── */
function scrollTo(selector) {
  return (e) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
}

/* ════════════════════════════════════════════════════
   Hero Section
   ════════════════════════════════════════════════════ */
export default function Hero() {
  /* ── Typewriter state ── */
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < TYPEWRITER_TEXT.length) {
        setDisplayText(TYPEWRITER_TEXT.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Keep cursor blinking after typing completes
      }
    }, 55);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(170deg, var(--ivory) 0%, var(--parchment) 100%)",
      }}
    >
      {/* ── Decorative corner flourishes ── */}
      <CornerFlourish className="absolute top-6 left-6 md:top-10 md:left-10 opacity-[0.15] rotate-0" />
      <CornerFlourish className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-[0.15] rotate-180" />

      {/* ── Floating vintage decorative shapes ── */}
      <HeroDecorations />

      {/* ── Main content ── */}
      <div className="container-vintage relative z-10 flex flex-col items-center text-center pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Greeting pill */}
        <ScrollReveal delay={0.2}>
          <span className="pill-vintage mb-6 text-sm">
            ✦ Welcome to my portfolio
          </span>
        </ScrollReveal>

        {/* Name heading */}
        <ScrollReveal delay={0.35}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-espresso mb-4 leading-tight">
            Omkar Desai
          </h1>
        </ScrollReveal>

        {/* Typewriter subtitle */}
        <ScrollReveal delay={0.5}>
          <p className="font-code text-base md:text-lg text-cognac tracking-wide mb-6 h-8 md:h-9">
            {displayText}
            <span className="typewriter-cursor" aria-hidden="true" />
          </p>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal delay={0.65}>
          <p className="font-body text-base md:text-lg text-ink/70 max-w-xl mx-auto mb-10 leading-relaxed">
            3+ years building enterprise-grade web applications across
            healthcare, logistics, and industrial sectors.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.8} className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="#projects"
            onClick={scrollTo("#projects")}
            className="btn-vintage btn-primary"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={scrollTo("#contact")}
            className="btn-vintage btn-outline"
          >
            Get In Touch
          </a>
        </ScrollReveal>

        {/* ── Stat Counters ── */}
        <div className="w-full max-w-2xl mx-auto">
          {/* Subtle divider line above stats */}
          <motion.div
            className="w-24 h-px bg-cognac/30 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
            {STATS.map((stat, i) => (
              <StatCounter
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                delay={1.0 + i * 0.12}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll-down indicator ── */}
      <motion.a
        href="#about"
        onClick={scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-sage/70 hover:text-cognac transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <span className="font-body text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
