import { motion } from "framer-motion";

const LoveLetter = () => {
  return (
    <motion.section
      className="relative z-10 flex justify-center px-4 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-lg w-full bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-xl">
        <p className="text-muted-foreground text-lg italic mb-4">A love letter...</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-['Playfair_Display']">
          To the One Who Makes My Heart Skip
        </h3>
        <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
          <p>
            Every moment with you feels like the first bloom of spring — 
            unexpected, breathtaking, and impossibly beautiful.
          </p>
          <p>
            You are the warmth in my winter, the calm in my storm, 
            and the reason my heart learned what it means to truly beat.
          </p>
          <p>
            Today and every day, you are my Valentine.
          </p>
        </div>
        <p className="mt-8 text-right text-accent font-semibold text-xl font-['Playfair_Display'] italic">
          Forever yours ♥
        </p>
      </div>
    </motion.section>
  );
};

export default LoveLetter;
