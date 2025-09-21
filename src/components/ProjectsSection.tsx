import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Neon Dreams Game",
      description: "A retro-style platformer game with pixel art characters and cyberpunk storyline. Features dynamic lighting and particle effects.",
      tech: ["React", "Canvas API", "Pixel Art", "Web Audio API"],
      status: "COMPLETED",
      color: "neon-pink"
    },
    {
      title: "3D Cyber Interface",
      description: "Interactive 3D dashboard with holographic elements and smooth animations. Built with Three.js and modern web technologies.",
      tech: ["Three.js", "WebGL", "TypeScript", "GSAP"],
      status: "IN_PROGRESS",
      color: "neon-blue"
    },
    {
      title: "Pixel Art Studio",
      description: "Web-based pixel art editor with advanced features like layers, animation timeline, and export options.",
      tech: ["Canvas API", "React", "File System API", "PWA"],
      status: "BETA",
      color: "neon-purple"
    },
    {
      title: "Cyberpunk Portfolio",
      description: "This very portfolio you're viewing! A showcase of creative web development with unique animations and effects.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      status: "LIVE",
      color: "neon-teal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "IN_PROGRESS": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "BETA": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "LIVE": return "bg-neon-teal/20 text-neon-teal border-neon-teal/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pixel text-2xl md:text-3xl text-center mb-16 glitch-text neon-glow" data-text="< PROJECTS />">
          &lt; PROJECTS /&gt;
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-card/50 border-${project.color}/30 hover:border-${project.color} hover:shadow-glow-pink transition-all duration-500 transform hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-cyber text-lg group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge className={`font-pixel text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <div className={`h-1 w-0 group-hover:w-full bg-${project.color} transition-all duration-500`}></div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="font-cyber text-sm text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="font-cyber text-xs border-border/50 hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className={`font-cyber bg-${project.color}/20 text-${project.color} border border-${project.color}/30 hover:bg-${project.color} hover:text-cyber-dark transition-all duration-300`}
                  >
                    VIEW DEMO
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="font-cyber border-muted hover:border-primary transition-colors duration-300"
                  >
                    CODE
                  </Button>
                </div>
              </CardContent>

              {/* Decorative corner */}
              <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="neon" className="font-cyber">
            VIEW ALL PROJECTS_
          </Button>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-teal/20"></div>
      </div>
    </section>
  );
};