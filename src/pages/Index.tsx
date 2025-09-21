import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/30">
        <div className="container mx-auto text-center">
          <p className="font-cyber text-xs text-muted-foreground">
            &copy; 2024 CYBER_DREAMS.EXE - Crafted with 💖 and lots of ☕
          </p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-neon-pink animate-ping"></div>
            <span className="font-pixel text-xs text-neon-pink">PORTFOLIO_ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
