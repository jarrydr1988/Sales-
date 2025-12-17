import { Check, User, Users, Monitor } from "lucide-react";

import { Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "1-on-1 Personal Training",
      description: "Dedicated one-on-one sessions tailored to your individual goals, fitness level, and schedule.",
      features: ["Personalized workout plans", "Full attention & form correction", "Progress tracking", "Flexible scheduling"],
      price: "£150",
      period: "per session",
    },
    {
      icon: Users,
      title: "2-on-1 Personal Training",
      description: "Train with a partner or friend and share the motivation while receiving expert guidance.",
      features: ["Partner accountability", "Shared session cost", "Competitive motivation", "Social fitness experience"],
      price: "£210",
      period: "per session",
      featured: true,
    },
    {
      icon: Monitor,
      title: "Online Personal Training",
      description: "Get professional coaching from anywhere with customized programs and ongoing support.",
      features: ["Custom training programs", "Video form reviews", "Weekly check-ins", "Nutrition guidance"],
      price: "£250",
      period: "per month",
    },
    {
      icon: Sparkles,
      title: "Online Training Community",
      description: "Join our community with multiple programs to choose from to suit your goals, plus community forums and groups.",
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
            Choose Your
            <br />
            <span className="text-gradient">Training Style</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Whether you prefer in-person coaching or remote guidance, 
            I have a training option that fits your lifestyle.
          </p>
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
              <h3 className="font-display text-2xl text-foreground mb-3 uppercase">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

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
