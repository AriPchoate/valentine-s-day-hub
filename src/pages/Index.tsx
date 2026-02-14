import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";
import heroImage from "@/assets/hero-valentine.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Rose petals"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-accent text-lg md:text-xl tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            February 14th
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Happy{" "}
            <span className="text-primary italic">Valentine's</span>
            <br />
            Day
          </motion.h1>

          <motion.div
            className="text-primary text-6xl md:text-7xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            ♥
          </motion.div>

          <motion.p
            className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Love is not about how many days, months, or years you've been together.
            It's about how much you love each other every single day.
          </motion.p>
        </motion.div>
      </section>

      {/* Love Letter */}
      <LoveLetter />

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 text-muted-foreground text-sm">
        <p>Made with <span className="text-primary">♥</span> for you</p>
      </footer>
    </div>
  );
};

export default Index;
