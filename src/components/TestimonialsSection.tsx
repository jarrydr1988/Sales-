import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      story: "I was stuck in a rut for years, trying every diet and workout plan out there. Within 3 months, I lost 25 pounds and gained confidence I didn't know I had. This wasn't just about fitness—it changed how I see myself.",
      result: "Lost 25 lbs",
    },
    {
      name: "Marcus D.",
      story: "As a busy executive, I thought I'd never find time for fitness. The personalized approach fit perfectly into my schedule. I'm stronger at 45 than I was at 25, and my energy levels are through the roof.",
      result: "Gained 15 lbs muscle",
    },
    {
      name: "Jennifer K.",
      story: "After having two kids, I felt like my body would never be the same. But the support and guidance I received helped me not only get back in shape but become the strongest version of myself. My kids now look up to me as their fitness inspiration.",
      result: "Complete transformation",
    },
    {
      name: "David R.",
      story: "I was skeptical about personal training, thinking I could figure it out on my own. Boy, was I wrong. The expertise and accountability made all the difference. I've run three marathons since starting, something I never dreamed possible.",
      result: "3 marathons completed",
    },
  ];

  const firstHalf = testimonials.slice(0, 2);
  const secondHalf = testimonials.slice(2, 4);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="group relative p-8 md:p-10 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-500 h-full">
      <Quote className="w-12 h-12 text-primary/30 mb-6" />
      <p className="font-body text-lg text-foreground/90 leading-relaxed mb-8">
        "{testimonial.story}"
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-xl text-foreground uppercase">
            {testimonial.name}
          </p>
        </div>
        <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
            {testimonial.result}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="font-body text-sm uppercase tracking-wider text-primary font-semibold">
              Success Stories
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 uppercase">
            Real People,
            <br />
            <span className="text-gradient">Real Results</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Don't just take my word for it. Here are the stories of people who 
            transformed their lives through dedicated training.
          </p>
        </div>

        {/* Two Carousel Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {firstHalf.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>

          {/* Second Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {secondHalf.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
