import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "< CYBER_DREAMS.EXE >";
  
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 150);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-4 h-4 bg-neon-pink animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-neon-teal animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-neon-blue animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-neon-purple animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8 relative">
          <img 
            src={heroAvatar} 
            alt="Cyber Dreams Avatar"
            className="w-64 h-36 mx-auto rounded-lg neon-glow object-cover animate-pulse-neon"
          />
          <div className="absolute -top-2 -left-2 w-full h-full border-2 border-neon-teal rounded-lg animate-float opacity-50"></div>
        </div>

        <h1 className="font-pixel text-2xl md:text-4xl mb-4 glitch-text neon-glow" data-text={text}>
          {text}
          <span className="animate-ping">|</span>
        </h1>
        
        <p className="font-cyber text-lg md:text-xl mb-2 text-foreground/80 animate-slide-up">
          Creative Developer & Digital Artist
        </p>
        
        <p className="font-cyber text-sm md:text-base mb-8 text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
          Crafting unique digital experiences through pixel art, cyberpunk aesthetics, and cutting-edge animations
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <Button variant="hero" className="font-cyber">
            View Projects
          </Button>
          <Button variant="neon-outline" className="font-cyber">
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-neon-pink rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-pink rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};