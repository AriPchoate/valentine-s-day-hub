import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 12 + Math.random() * 20,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-primary"
          style={{
            left: `${h.x}%`,
            bottom: "-40px",
            fontSize: h.size,
            opacity: h.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(h.id) * 60],
            rotate: [0, 360],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
