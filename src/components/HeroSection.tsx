import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trainer.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Personal trainer in gym"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-sm uppercase tracking-wider text-primary font-semibold">
              Transform Your Body
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-slide-up uppercase">
            <span className="text-foreground">Unlock</span>
            <br />
            <span className="text-gradient">Your Potential</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Join thousands who have transformed their lives. Get exclusive training 
            tips, workout plans, and nutrition advice delivered to your inbox.
          </p>

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 animate-fade-in max-w-lg" style={{ animationDelay: "0.5s" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body text-lg"
            />
            <Button variant="hero" size="xl" type="submit">
              Join Free
              <ArrowRight className="ml-2" />
            </Button>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-center">
              <p className="font-display text-5xl text-primary">500+</p>
              <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-1 font-medium">
                Clients Transformed
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl text-primary">10+</p>
              <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-1 font-medium">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl text-primary">98%</p>
              <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-1 font-medium">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
