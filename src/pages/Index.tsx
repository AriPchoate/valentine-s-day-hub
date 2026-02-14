import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-background to-primary/10">
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
