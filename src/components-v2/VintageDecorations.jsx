import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   Vintage Decorative SVG Shapes
   Mid-century modern / boho abstract motifs
   Higher opacity + larger sizes for clear visibility
   ═══════════════════════════════════════════════════════ */

/* ── Concentric Arch / Rainbow ── */
export function Arch({ size = 120, color = "var(--cognac)", opacity = 0.18, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 120 78"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <path d="M10 78 C10 38, 30 10, 60 10 C90 10, 110 38, 110 78" stroke={color} strokeWidth="3" fill="none" />
      <path d="M22 78 C22 46, 38 22, 60 22 C82 22, 98 46, 98 78" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M34 78 C34 54, 44 34, 60 34 C76 34, 86 54, 86 78" stroke={color} strokeWidth="2" fill="none" />
      <path d="M44 78 C44 60, 50 44, 60 44 C70 44, 76 60, 76 78" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ── Half Circle (solid fill) ── */
export function HalfCircle({ size = 100, color = "var(--cognac)", opacity = 0.14, flip = false, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 100 50"
      fill="none"
      className={className}
      style={{ ...style, opacity, transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <path d="M0 50 A50 50 0 0 1 100 50" fill={color} />
    </svg>
  );
}

/* ── Botanical Leaf ── */
export function Leaf({ size = 80, color = "var(--sage)", opacity = 0.2, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 60 84"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <line x1="30" y1="84" x2="30" y2="20" stroke={color} strokeWidth="2" />
      <path d="M30 8 C15 20, 8 40, 30 52 C52 40, 45 20, 30 8Z" fill={color} />
      <line x1="30" y1="14" x2="20" y2="30" stroke="var(--ivory)" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="14" x2="40" y2="30" stroke="var(--ivory)" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="24" x2="22" y2="38" stroke="var(--ivory)" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="24" x2="38" y2="38" stroke="var(--ivory)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

/* ── Branch with small leaves ── */
export function Branch({ size = 140, color = "var(--espresso)", opacity = 0.15, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 140 70"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <path d="M0 60 C30 55, 70 40, 140 15" stroke={color} strokeWidth="2" fill="none" />
      <path d="M25 56 C22 48, 30 44, 35 50 C30 52, 26 54, 25 56Z" fill={color} />
      <path d="M50 48 C48 40, 56 36, 60 42 C55 44, 51 46, 50 48Z" fill={color} />
      <path d="M75 38 C72 30, 80 26, 84 32 C80 34, 76 36, 75 38Z" fill={color} />
      <path d="M100 28 C98 20, 106 16, 110 22 C105 24, 101 26, 100 28Z" fill={color} />
      <path d="M120 20 C118 12, 126 8, 130 14 C125 16, 121 18, 120 20Z" fill={color} />
    </svg>
  );
}

/* ── Geometric Circle Composition ── */
export function CircleComposition({ size = 100, color1 = "var(--cognac)", color2 = "var(--sage)", opacity = 0.14, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <circle cx="40" cy="60" r="35" fill={color1} />
      <circle cx="65" cy="40" r="25" fill={color2} />
      <line x1="10" y1="28" x2="55" y2="28" stroke={color1} strokeWidth="2.5" />
      <line x1="10" y1="34" x2="45" y2="34" stroke={color1} strokeWidth="2.5" />
    </svg>
  );
}

/* ── U-Shape / Vase ── */
export function UShape({ size = 80, color = "var(--cognac)", opacity = 0.16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <path d="M15 10 L15 50 C15 67, 30 78, 40 78 C50 78, 65 67, 65 50 L65 10" stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M25 10 L25 48 C25 60, 33 68, 40 68 C47 68, 55 60, 55 48 L55 10" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ── Dotted Circle ── */
export function DottedCircle({ size = 90, color = "var(--cognac)", opacity = 0.16, className = "", style = {} }) {
  const dots = 12;
  const radius = 38;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      {Array.from({ length: dots }).map((_, i) => {
        const angle = (i / dots) * Math.PI * 2 - Math.PI / 2;
        const cx = 45 + radius * Math.cos(angle);
        const cy = 45 + radius * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="3.5" fill={color} />;
      })}
    </svg>
  );
}

/* ── Horizontal Lines ── */
export function HLines({ width = 100, color = "var(--cognac)", opacity = 0.15, className = "", style = {} }) {
  return (
    <svg
      width={width}
      height="24"
      viewBox="0 0 100 24"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <line x1="0" y1="4" x2="100" y2="4" stroke={color} strokeWidth="2.5" />
      <line x1="0" y1="12" x2="80" y2="12" stroke={color} strokeWidth="2.5" />
      <line x1="0" y1="20" x2="60" y2="20" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

/* ── Small Flower / Dandelion ── */
export function Flower({ size = 60, color = "var(--espresso)", opacity = 0.18, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <line x1="20" y1="60" x2="20" y2="22" stroke={color} strokeWidth="2" />
      <circle cx="20" cy="16" r="6" fill={color} />
      <circle cx="12" cy="11" r="4.5" fill={color} />
      <circle cx="28" cy="11" r="4.5" fill={color} />
      <circle cx="13" cy="21" r="4.5" fill={color} />
      <circle cx="27" cy="21" r="4.5" fill={color} />
      <circle cx="20" cy="16" r="3" fill="var(--ivory)" />
      <path d="M20 38 C14 33, 10 36, 13 41 C15 39, 17 39, 20 38Z" fill={color} />
      <path d="M20 48 C26 43, 30 46, 27 51 C25 49, 23 49, 20 48Z" fill={color} />
    </svg>
  );
}

/* ── Wavy / Serpentine Line ── */
export function WavyLine({ height = 120, color = "var(--cognac)", opacity = 0.15, className = "", style = {} }) {
  return (
    <svg
      width="30"
      height={height}
      viewBox="0 0 30 120"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <path
        d="M15 0 C25 15, 5 25, 15 40 C25 55, 5 65, 15 80 C25 95, 5 105, 15 120"
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Diamond / Rhombus ── */
export function Diamond({ size = 50, color = "var(--cognac)", opacity = 0.16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <rect x="25" y="2" width="30" height="30" rx="2" transform="rotate(45 25 2)" fill={color} />
    </svg>
  );
}

/* ── Filled Arch (solid) ── */
export function FilledArch({ size = 100, color = "var(--cognac)", opacity = 0.12, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 100 55"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <path d="M0 55 L0 35 C0 15, 22 0, 50 0 C78 0, 100 15, 100 35 L100 55 Z" fill={color} />
    </svg>
  );
}

/* ── Cross / Plus ── */
export function Cross({ size = 50, color = "var(--cognac)", opacity = 0.14, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <line x1="25" y1="5" x2="25" y2="45" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="5" y1="25" x2="45" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ── Concentric Circles ── */
export function ConcentricCircles({ size = 80, color = "var(--cognac)", opacity = 0.14, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      style={{ ...style, opacity }}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="40" cy="40" r="26" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="40" cy="40" r="16" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="40" r="5" fill={color} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   Animated Floating Wrapper
   ═══════════════════════════════════════════════════════ */
export function FloatingShape({ children, duration = 6, delay = 0, yRange = 10, className = "" }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -yRange, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   Pre-composed Section Decoration Sets
   Visible, decorative backgrounds for each section
   ═══════════════════════════════════════════════════════ */

export function HeroDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[6%] left-[2%]" duration={8} delay={0} yRange={12}>
        <Arch size={180} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[10%] right-[4%]" duration={7} delay={1} yRange={8}>
        <Leaf size={90} color="var(--sage)" opacity={0.18} />
      </FloatingShape>
      <FloatingShape className="bottom-[30%] left-[5%]" duration={9} delay={0.5} yRange={10}>
        <HalfCircle size={120} color="var(--cognac)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="bottom-[35%] right-[3%]" duration={7} delay={2} yRange={14}>
        <UShape size={100} color="var(--sage)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="top-[40%] right-[8%]" duration={10} delay={1.5} yRange={8}>
        <DottedCircle size={100} color="var(--cognac)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="bottom-[18%] left-[10%]" duration={6} delay={3} yRange={6}>
        <Diamond size={55} color="var(--cognac)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="bottom-[12%] right-[12%]" duration={8} delay={1} yRange={10}>
        <ConcentricCircles size={90} color="var(--sage)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[20%] left-[80%]" duration={9} delay={2.5} yRange={6}>
        <Cross size={40} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}

export function AboutDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[3%] right-[2%]" duration={8} delay={0} yRange={10}>
        <Branch size={200} color="var(--espresso)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="bottom-[5%] left-[1%]" duration={9} delay={1} yRange={12}>
        <CircleComposition size={140} color1="var(--cognac)" color2="var(--sage)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[35%] left-[1%]" duration={7} delay={2} yRange={8}>
        <Flower size={70} color="var(--sage)" opacity={0.16} />
      </FloatingShape>
      <FloatingShape className="bottom-[8%] right-[5%]" duration={10} delay={0.5} yRange={6}>
        <HLines width={150} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[8%] left-[4%]" duration={8} delay={1.5} yRange={10}>
        <FilledArch size={110} color="var(--sage)" opacity={0.08} />
      </FloatingShape>
      <FloatingShape className="top-[25%] right-[1%]" duration={7} delay={0.8} yRange={8}>
        <WavyLine height={160} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}

export function ExperienceDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[4%] left-[1%]" duration={9} delay={0} yRange={10}>
        <Arch size={150} color="var(--cognac)" opacity={0.10} style={{ transform: "rotate(-15deg)" }} />
      </FloatingShape>
      <FloatingShape className="top-[3%] right-[2%]" duration={7} delay={1.5} yRange={8}>
        <Leaf size={100} color="var(--espresso)" opacity={0.14} style={{ transform: "rotate(20deg)" }} />
      </FloatingShape>
      <FloatingShape className="top-[30%] left-[2%]" duration={8} delay={1} yRange={12}>
        <WavyLine height={180} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="bottom-[5%] right-[3%]" duration={10} delay={2} yRange={8}>
        <HalfCircle size={110} color="var(--sage)" opacity={0.10} flip />
      </FloatingShape>
      <FloatingShape className="top-[50%] right-[1%]" duration={6} delay={0.5} yRange={6}>
        <Diamond size={50} color="var(--cognac)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="bottom-[10%] left-[3%]" duration={8} delay={2.5} yRange={10}>
        <ConcentricCircles size={80} color="var(--cognac)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[65%] right-[5%]" duration={7} delay={1} yRange={6}>
        <Cross size={35} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}

export function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[2%] right-[3%]" duration={8} delay={0} yRange={10}>
        <UShape size={120} color="var(--cognac)" opacity={0.12} style={{ transform: "rotate(-10deg)" }} />
      </FloatingShape>
      <FloatingShape className="bottom-[3%] left-[1%]" duration={9} delay={1} yRange={8}>
        <Branch size={180} color="var(--sage)" opacity={0.14} style={{ transform: "rotate(10deg)" }} />
      </FloatingShape>
      <FloatingShape className="top-[35%] left-[0%]" duration={7} delay={2} yRange={12}>
        <DottedCircle size={100} color="var(--cognac)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="bottom-[10%] right-[2%]" duration={10} delay={0.5} yRange={6}>
        <Flower size={65} color="var(--espresso)" opacity={0.15} />
      </FloatingShape>
      <FloatingShape className="top-[5%] left-[2%]" duration={8} delay={1.5} yRange={8}>
        <FilledArch size={100} color="var(--cognac)" opacity={0.08} />
      </FloatingShape>
      <FloatingShape className="top-[55%] right-[1%]" duration={6} delay={2} yRange={6}>
        <HLines width={130} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}

export function SkillsDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[3%] left-[1%]" duration={8} delay={0} yRange={10}>
        <CircleComposition size={130} color1="var(--cognac)" color2="var(--sage)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="bottom-[5%] right-[2%]" duration={9} delay={1} yRange={8}>
        <Arch size={160} color="var(--cognac)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[40%] right-[0%]" duration={7} delay={2} yRange={12}>
        <Leaf size={85} color="var(--espresso)" opacity={0.15} style={{ transform: "rotate(-30deg)" }} />
      </FloatingShape>
      <FloatingShape className="bottom-[8%] left-[3%]" duration={6} delay={0.5} yRange={6}>
        <HLines width={120} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[6%] right-[5%]" duration={8} delay={1.5} yRange={8}>
        <Cross size={45} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[25%] left-[0%]" duration={9} delay={2.5} yRange={10}>
        <WavyLine height={150} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}

export function LeadershipDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[6%] right-[2%]" duration={8} delay={0} yRange={8}>
        <Flower size={75} color="var(--cognac)" opacity={0.15} />
      </FloatingShape>
      <FloatingShape className="bottom-[8%] left-[2%]" duration={9} delay={1} yRange={10}>
        <UShape size={90} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[35%] left-[0%]" duration={7} delay={1.5} yRange={6}>
        <Diamond size={50} color="var(--cognac)" opacity={0.14} />
      </FloatingShape>
      <FloatingShape className="bottom-[5%] right-[3%]" duration={8} delay={2} yRange={10}>
        <Branch size={150} color="var(--espresso)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[5%] left-[3%]" duration={10} delay={0.5} yRange={8}>
        <ConcentricCircles size={70} color="var(--sage)" opacity={0.10} />
      </FloatingShape>
    </div>
  );
}

export function ContactDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingShape className="top-[3%] left-[1%]" duration={8} delay={0} yRange={10}>
        <Arch size={150} color="var(--cognac)" opacity={0.10} style={{ transform: "rotate(10deg)" }} />
      </FloatingShape>
      <FloatingShape className="bottom-[4%] right-[2%]" duration={9} delay={1} yRange={8}>
        <Branch size={170} color="var(--espresso)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="top-[25%] right-[1%]" duration={7} delay={2} yRange={12}>
        <WavyLine height={140} color="var(--sage)" opacity={0.12} />
      </FloatingShape>
      <FloatingShape className="bottom-[10%] left-[3%]" duration={10} delay={0.5} yRange={6}>
        <HalfCircle size={100} color="var(--cognac)" opacity={0.10} />
      </FloatingShape>
      <FloatingShape className="top-[5%] right-[5%]" duration={8} delay={1.5} yRange={8}>
        <Leaf size={80} color="var(--sage)" opacity={0.15} />
      </FloatingShape>
      <FloatingShape className="top-[45%] left-[0%]" duration={6} delay={2.5} yRange={6}>
        <DottedCircle size={80} color="var(--cognac)" opacity={0.12} />
      </FloatingShape>
    </div>
  );
}
