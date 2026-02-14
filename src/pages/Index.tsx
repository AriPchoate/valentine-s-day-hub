import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";
import heroImage from "@/assets/hero-valentine.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Full-page background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background/70 to-accent/20 backdrop-blur-[2px]" />
      </div>

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
