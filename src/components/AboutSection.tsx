import { Award, Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Customized programs tailored to your specific fitness goals",
    },
    {
      icon: Zap,
      title: "High Intensity",
      description: "Maximize results with scientifically-backed training methods",
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "One-on-one attention and guidance throughout your journey",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of helping clients achieve lasting transformations",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="font-body text-sm uppercase tracking-wider text-primary">
                About Me
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              YOUR JOURNEY
              <br />
              <span className="text-gradient">STARTS HERE</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience in personal training, I've dedicated 
              my life to helping individuals transform not just their bodies, but 
              their entire approach to health and wellness.
            </p>

            <p className="font-body text-lg text-muted-foreground mb-12 leading-relaxed">
              I believe that fitness is not a destination but a lifestyle. My 
              approach combines cutting-edge training techniques with personalized 
              nutrition guidance to ensure you achieve sustainable, long-lasting results.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-full" />
              
              {/* Stats Card */}
              <div className="absolute bottom-8 right-8 p-6 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-xl">
                <p className="font-display text-4xl text-primary mb-1">15K+</p>
                <p className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                  Training Sessions
                </p>
              </div>

              {/* Certification Badge */}
              <div className="absolute top-8 left-8 p-4 rounded-lg bg-primary/90 backdrop-blur-sm">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Main Visual Content */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-8xl text-primary/10">FIT</p>
                  <p className="font-display text-4xl text-foreground -mt-4">CERTIFIED</p>
                  <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-2">
                    NASM • ACE • ISSA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
