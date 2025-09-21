import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const skills = [
    { name: "React & TypeScript", level: 95, color: "neon-blue" },
    { name: "3D Design", level: 88, color: "neon-purple" },
    { name: "Pixel Art", level: 92, color: "neon-pink" },
    { name: "Animation", level: 90, color: "neon-teal" },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pixel text-2xl md:text-3xl text-center mb-16 glitch-text neon-glow" data-text="< ABOUT_ME />">
          &lt; ABOUT_ME /&gt;
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="gradient-border">
              <div className="space-y-4">
                <p className="font-cyber text-foreground/90 leading-relaxed">
                  Hello! I'm a creative developer passionate about blending retro pixel aesthetics with modern cyberpunk vibes. 
                  I specialize in creating unique digital experiences that tell stories through interactive design.
                </p>
                <p className="font-cyber text-foreground/80 leading-relaxed">
                  My work focuses on pushing the boundaries of web development, combining cutting-edge animations, 
                  3D elements, and pixel-perfect designs to create memorable user experiences.
                </p>
                <p className="font-cyber text-foreground/70 leading-relaxed">
                  When I'm not coding, you'll find me exploring new animation techniques, creating pixel art, 
                  or diving into the latest cyberpunk aesthetic trends.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="font-pixel text-lg text-neon-pink mb-6">SKILL_LEVELS.exe</h3>
            
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-cyber text-sm font-bold">{skill.name}</span>
                  <span className="font-pixel text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-card rounded-full overflow-hidden border border-border">
                  <div 
                    className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse`}></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                </div>
              </div>
            ))}

            {/* Fun fact card */}
            <Card className="mt-8 bg-card/50 border-neon-purple/30 hover:border-neon-purple transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple animate-ping"></div>
                  <p className="font-cyber text-sm">
                    <span className="text-neon-purple font-bold">FUN_FACT:</span> I've created over 500+ pixel art sprites and 50+ unique animations!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-8 h-8 border-2 border-neon-teal rotate-45 animate-float opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 border-2 border-neon-pink animate-float opacity-20" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};