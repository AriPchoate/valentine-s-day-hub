import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LoveLetter = () => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
  };

  return (
    <motion.section
      className="relative z-10 flex justify-center px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-lg w-full bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-xl text-center">
        {!accepted ? (
          <>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Will you be my Valentine?
            </h3>
            <p className="text-muted-foreground text-lg mb-10">
              Choose wisely... 💕
            </p>
            <div className="flex items-center justify-center gap-8 min-h-[100px] relative">
              <Button
                size="lg"
                className="text-lg px-10 py-6 z-10"
                onClick={() => setAccepted(true)}
              >
                Yes! 💖
              </Button>
              <motion.div
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onHoverStart={moveNoButton}
                className="z-10"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6"
                  onMouseEnter={moveNoButton}
                  onTouchStart={moveNoButton}
                >
                  No
                </Button>
              </motion.div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <p className="text-6xl mb-4">🥰</p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-['Playfair_Display']">
              Yay! I knew you'd say yes!
            </h3>
            <p className="text-accent text-xl italic font-['Playfair_Display']">
              Happy Valentine's Day, my love ♥
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default LoveLetter;
