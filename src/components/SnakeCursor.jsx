import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SnakeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const trailLength = 20; // Number of dots in the trail
  const dotSize = 4; // Size of each dot in pixels

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    setTrail((prevTrail) => {
      const newTrail = [mousePosition, ...prevTrail.slice(0, trailLength - 1)];
      return newTrail;
    });
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className="absolute bg-secondary rounded-full"
          style={{
            width: `${Math.max(
              dotSize - (index * dotSize) / trailLength,
              2
            )}px`,
            height: `${Math.max(
              dotSize - (index * dotSize) / trailLength,
              2
            )}px`,
            x: position.x - dotSize / 2,
            y: position.y - dotSize / 2,
            opacity: 1 - index / trailLength,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default SnakeCursor;
