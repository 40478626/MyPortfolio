import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent to the cyber void! 🚀", {
      description: "I'll get back to you in quantum time!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "GitHub", handle: "@cyberdreams", color: "neon-purple" },
    { name: "Twitter", handle: "@pixel_dreams", color: "neon-blue" },
    { name: "Discord", handle: "CyberDreams#1337", color: "neon-teal" },
    { name: "Email", handle: "hello@cyberdreams.dev", color: "neon-pink" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-2xl md:text-3xl text-center mb-16 glitch-text neon-glow" data-text="< CONTACT />">
          &lt; CONTACT /&gt;
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-cyber text-xl flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-pink animate-ping"></div>
                SEND_MESSAGE.exe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-cyber text-sm text-foreground/80">NAME_INPUT:</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name..."
                    className="font-cyber bg-cyber-dark/50 border-border/50 focus:border-neon-pink transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-cyber text-sm text-foreground/80">EMAIL_ADDRESS:</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your.email@domain.com"
                    className="font-cyber bg-cyber-dark/50 border-border/50 focus:border-neon-pink transition-colors duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-cyber text-sm text-foreground/80">MESSAGE_CONTENT:</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Share your thoughts, project ideas, or just say hello..."
                    rows={5}
                    className="font-cyber bg-cyber-dark/50 border-border/50 focus:border-neon-pink transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cyber"
                  className="w-full font-cyber"
                >
                  TRANSMIT_MESSAGE &gt;&gt;
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-card/30 border-neon-teal/30">
              <CardHeader>
                <CardTitle className="font-cyber text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-teal animate-pulse"></div>
                  SOCIAL_NETWORKS.json
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div 
                    key={link.name}
                    className={`group flex items-center justify-between p-3 rounded border border-${link.color}/20 hover:border-${link.color} hover:bg-${link.color}/10 transition-all duration-300 cursor-pointer animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 bg-${link.color} rounded-full animate-pulse`}></div>
                      <span className="font-cyber text-sm font-bold">{link.name}</span>
                    </div>
                    <span className="font-cyber text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {link.handle}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/30 border-neon-blue/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="font-pixel text-sm text-neon-blue">STATUS.log</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="font-cyber text-xs">ONLINE & AVAILABLE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                      <span className="font-cyber text-xs">OPEN FOR COLLABORATIONS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-neon-teal rounded-full animate-pulse"></div>
                      <span className="font-cyber text-xs">RESPONSE TIME: ~24 HOURS</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-6 h-6 border-2 border-neon-pink animate-float opacity-20"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-neon-teal animate-float opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-neon-blue rotate-45 animate-float opacity-15" style={{animationDelay: '1s'}}></div>
    </section>
  );
};