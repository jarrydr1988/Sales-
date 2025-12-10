import { ArrowRight, Check, Dumbbell, Heart, Timer, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build lean muscle mass and increase your overall strength with customized weight training programs.",
      features: ["Personalized workout plans", "Progressive overload", "Form correction", "Recovery protocols"],
      price: "$120",
      period: "per session",
      popular: false,
    },
    {
      icon: Timer,
      title: "HIIT Programs",
      description: "High-intensity interval training designed to maximize fat burn and improve cardiovascular fitness.",
      features: ["30-45 minute sessions", "Metabolic conditioning", "Heart rate monitoring", "Endurance building"],
      price: "$150",
      period: "per session",
      popular: true,
    },
    {
      icon: Utensils,
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition plans tailored to your goals, lifestyle, and dietary preferences.",
      features: ["Meal planning", "Macro tracking", "Supplement guidance", "Weekly check-ins"],
      price: "$200",
      period: "per month",
      popular: false,
    },
    {
      icon: Heart,
      title: "Lifestyle Coaching",
      description: "Holistic approach to wellness including stress management, sleep optimization, and habit building.",
      features: ["Stress management", "Sleep optimization", "Habit building", "Accountability"],
      price: "$250",
      period: "per month",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="font-body text-sm uppercase tracking-wider text-primary">
              Services
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            CHOOSE YOUR
            <br />
            <span className="text-gradient">PATH TO SUCCESS</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Whether you're just starting out or looking to take your fitness to the 
            next level, I have a program designed specifically for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                service.popular
                  ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary/50 shadow-lg shadow-primary/20"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary">
                  <span className="font-body text-xs uppercase tracking-wider text-primary-foreground font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl mb-6 ${
                service.popular ? "bg-primary/20" : "bg-secondary"
              }`}>
                <service.icon className={`w-8 h-8 ${
                  service.popular ? "text-primary" : "text-primary"
                }`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-4xl text-foreground">{service.price}</span>
                <span className="font-body text-sm text-muted-foreground ml-2">
                  {service.period}
                </span>
              </div>

              {/* CTA */}
              <Button
                variant={service.popular ? "hero" : "outline"}
                className="w-full"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground mb-6">
            Not sure which program is right for you?
          </p>
          <Button variant="heroOutline" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
