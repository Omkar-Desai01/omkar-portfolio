import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="ornamental-divider">
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="none"
          stroke="#995F2F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
}
