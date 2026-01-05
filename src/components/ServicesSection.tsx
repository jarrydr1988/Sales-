import { Check, User, Users, Monitor, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "1:1 Personal Training",
      description: "High-touch coaching for clients who want hands-on guidance, precision programming, and accountability.",
      bestFor: "Those who want elite results with zero guesswork.",
      features: ["Personalized workout plans", "Full attention & form correction", "Progress tracking", "Flexible scheduling"],
      price: "£150",
      period: "per session",
    },
    {
      icon: Users,
      title: "Hybrid Coaching",
      subtitle: "In-Person + Remote",
      description: "Structured training and nutrition with flexibility around your schedule.",
      bestFor: "Busy professionals who travel or train independently some days.",
      features: ["In-person sessions", "Remote support", "Nutrition guidance", "Flexible scheduling"],
      price: "£210",
      period: "per session",
      featured: true,
    },
    {
      icon: Monitor,
      title: "Online Coaching",
      description: "Data-driven programming, macro targets, and weekly check-ins — wherever you are.",
      bestFor: "Self-motivated clients who still want expert oversight.",
      features: ["Custom training programs", "Macro targets", "Weekly check-ins", "Data-driven approach"],
      price: "£250",
      period: "per month",
    },
    {
      icon: Sparkles,
      title: "Online Training Community",
      description: "Join our community with multiple programs to choose from to suit your goals, plus community forums and groups.",
      bestFor: "Those looking for affordable guided training with community support.",
      features: ["Multiple program options", "Community forums", "Support groups", "Goal-based training"],
      price: "£25",
      period: "per month",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="font-body text-sm uppercase tracking-wider text-primary font-semibold">
              Training Options
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 uppercase">
            How I Help You
            <br />
            <span className="text-gradient">Get Results</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                service.featured
                  ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary/50 shadow-lg shadow-primary/20"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary">
                  <span className="font-body text-xs uppercase tracking-wider text-primary-foreground font-bold">
                    Best Value
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl mb-6 ${
                service.featured ? "bg-primary/20" : "bg-secondary"
              }`}>
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-foreground mb-1 uppercase">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="font-body text-sm text-primary mb-3">{service.subtitle}</p>
              )}

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Best For */}
              <div className="mb-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <span className="font-body text-xs uppercase tracking-wider text-primary font-semibold">Best for:</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{service.bestFor}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                <span className="font-display text-5xl text-primary">{service.price}</span>
                <span className="font-body text-sm text-muted-foreground ml-2">
                  {service.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
