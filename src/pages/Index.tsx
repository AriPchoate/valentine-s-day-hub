import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";
import heroImage from "@/assets/hero-valentine.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />

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
