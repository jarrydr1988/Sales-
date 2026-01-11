import { Check } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const ServicesSection = () => {
  const personalTraining = [{
    title: "1:1 Personal Training",
    description: "High-touch coaching for clients who want hands-on guidance, precision programming, and accountability.",
    bestFor: "Those who want elite results with zero guesswork.",
    features: ["Personalized workout plans", "Full attention & form correction", "Progress tracking", "Flexible scheduling"],
    price: "£150",
    period: "per session"
  }, {
    title: "2-on-1 Personal Training",
    description: "Train with a partner or friend and share the motivation while receiving expert guidance.",
    bestFor: "Those who want accountability with a training partner.",
    features: ["Partner accountability", "Shared session cost", "Competitive motivation", "Social fitness experience"],
    price: "£210",
    period: "per session",
    featured: true
  }];
  const onlineOptions = [{
    title: "Online Coaching",
    description: "Data-driven programming, macro targets, and weekly check-ins — wherever you are.",
    bestFor: "Self-motivated clients who still want expert oversight.",
    features: ["Custom training programs", "Macro targets", "Weekly check-ins", "Data-driven approach"],
    price: "£250",
    period: "per month"
  }, {
    title: "Online Training Community",
    description: "Join our community with multiple programs to choose from to suit your goals, plus community forums and groups.",
    bestFor: "Those looking for affordable guided training with community support.",
    features: ["Multiple program options", "Community forums", "Support groups", "Goal-based training"],
    price: "£25",
    period: "per month",
    featured: true
  }];
  const ServiceCard = ({
    service
  }: {
    service: typeof personalTraining[0];
  }) => <div className={`group relative p-6 rounded-2xl border transition-all duration-500 flex flex-col h-full ${service.featured ? "bg-gradient-to-b from-primary/20 to-primary/5 border-primary/50 shadow-lg shadow-primary/20" : "bg-card border-border hover:border-primary/30"}`}>
      {/* Featured Badge */}
      {service.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary my-[10px]">
          <span className="font-body text-xs uppercase tracking-wider text-primary-foreground font-bold whitespace-nowrap">
            Best Value
          </span>
        </div>}

      {/* Title */}
      <h3 className="font-display text-xl text-foreground mb-2 uppercase mt-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed min-h-[48px]">
        {service.description}
      </p>

      {/* Best For */}
      <div className="mb-4 p-2 rounded-lg bg-primary/5 border border-primary/10 min-h-[70px]">
        <span className="font-body text-xs uppercase tracking-wider text-primary font-semibold">Best for:</span>
        <p className="font-body text-xs text-muted-foreground mt-1">{service.bestFor}</p>
      </div>

      {/* Price */}
      <div className="mb-4 pb-4 border-b border-border">
        <span className="font-display text-4xl text-primary">{service.price}</span>
        <span className="font-body text-sm text-muted-foreground ml-2">
          {service.period}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mt-auto">
        {service.features.map(feature => <li key={feature} className="flex items-center gap-2">
            <Check className="w-3 h-3 text-primary flex-shrink-0" />
            <span className="font-body text-xs text-muted-foreground">
              {feature}
            </span>
          </li>)}
      </ul>
    </div>;
  return <section id="services" className="py-24 md:py-32 bg-background">
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

        {/* Two Carousel Boxes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Training Carousel */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-foreground uppercase text-center">
              Personal Training
            </h3>
            <Carousel className="w-full" opts={{
            loop: true
          }}>
              <CarouselContent>
                {personalTraining.map(service => <CarouselItem key={service.title}>
                    <ServiceCard service={service} />
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Online Options Carousel */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-foreground uppercase text-center">
              Online Options
            </h3>
            <Carousel className="w-full" opts={{
            loop: true
          }}>
              <CarouselContent>
                {onlineOptions.map(service => <CarouselItem key={service.title}>
                    <ServiceCard service={service} />
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;