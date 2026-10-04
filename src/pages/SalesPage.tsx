import { PlayCircle, ShieldCheck, CheckCircle2, Loader2, Compass, Dumbbell, Utensils, Activity, HelpCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    setIsLoading(true);
    try {
      const message = `Chosen Plan: ${selectedPlan || "None selected"}\n\nGoals / Notes:\n${notes || "No notes provided"}`;
      
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name,
          email,
          inquiryType: "online",
          message,
        },
      });

      if (error) throw error;

      toast.success("Info request submitted successfully! Check your inbox.");
      // Reset form
      setName("");
      setEmail("");
      setNotes("");
      setSelectedPlan("");
    } catch (error: any) {
      console.error("Error sending contact email:", error);
      const functionError = error.context?.error || "An unknown error occurred.";
      toast.error(`Failed to submit: ${functionError}`);
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      title: "Private In-Person Training",
      price: "£150",
      suffix: "/ session",
      deliverables: [
        "Private session execution at state-of-the-art Marylebone training facilities",
        "Comprehensive movement screen, strength testing, and body composition tracking",
        "Periodized lifting protocol tailored to your biomechanics",
        "Precision nutrition targets (calories, macronutrients, meal timing)",
        "Daily coaching access and programmatic adjustments via private app"
      ]
    },
    {
      title: "2-on-1 Coaching",
      price: "£105",
      suffix: "/ person / session",
      deliverables: [
        "Partner training dynamics with full individual exercise calibration",
        "Full assessment and progress tracking for both individuals",
        "Structured progressive strength and fat loss programming",
        "Personalized nutrition and lifestyle recovery blueprints",
        "Ongoing direct coach support"
      ]
    },
    {
      title: "The 120-Day Remote Protocol",
      price: "£250",
      suffix: "/ month",
      deliverables: [
        "Complete custom workout programming delivered via private coaching software",
        "Video movement analysis and technical lifting feedback within 24 hours",
        "Dynamic macronutrient and nutritional accountability coaching",
        "Weekly deep-dive progress audits and programmatic adjustments",
        "Direct 1-on-1 messaging support for real-time schedule adaptations"
      ]
    },
    {
      title: "Group Programming",
      price: "£25",
      suffix: "/ month",
      deliverables: [
        "Progressive 4-day compound strength and conditioning splits updated monthly",
        "Video exercise demonstration library with execution cues",
        "Baseline macronutrient calculation guide",
        "Community training forum for accountability and lifting benchmarks"
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: "01",
      title: "Structural Assessment & Biomechanics",
      description: "We evaluate posture, joint mobility, and movement mechanics to select compound lifts that match your frame, eliminating injury risk while maximizing mechanical tension.",
      icon: Compass
    },
    {
      step: "02",
      title: "Progressive Strength Architecture",
      description: "Forget random workouts. Every session is tracked and progressively overloaded using compound movements, belt squats, deadlifts, and functional accessory work to stimulate dense athletic muscle.",
      icon: Dumbbell
    },
    {
      step: "03",
      title: "Frictionless Nutrition Design",
      description: "No arbitrary meal plans or extreme deprivations. We set energy targets that fit business dinners, travel schedules, and family commitments while keeping fat loss on a predictable mathematical pace.",
      icon: Utensils
    },
    {
      step: "04",
      title: "Relentless Metric Tracking",
      description: "Weekly data points across body composition, training volume, sleep, and recovery ensure we adjust variables before plateaus occur.",
      icon: Activity
    }
  ];

  const faqs = [
    {
      question: "Where do private coaching sessions take place?",
      answer: "In-person personal training is conducted at premium, fully equipped private facilities in Marylebone, Central London. Sessions are appointment-only, ensuring private access to top-tier barbells, specialized machines, and open turf without commercial gym crowds."
    },
    {
      question: "What does the 120-day timeline require from me?",
      answer: "We ask for 3 to 4 dedicated lifting sessions per week (45 to 60 minutes) and honest tracking of your daily nutritional targets. Every workout is laid out clearly with zero wasted time."
    },
    {
      question: "Can complete beginners or those returning from injury join?",
      answer: "Yes. Every program begins with a complete assessment. Exercises are regressed or progressed based on your joint health, training history, and current mobility."
    }
  ];

  const [reviewApi, setReviewApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!reviewApi) return;
    const interval = setInterval(() => {
      reviewApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [reviewApi]);

  const reviews = [
    {
      name: "Marcus Vance",
      role: "Private Equity Director | Marylebone Client",
      result: "Dropped 9.5kg fat, +4kg lean muscle in 120 Days",
      comment: "The precision in Marylebone is unmatched. No fluff, no wasted effort. The movement screens resolved my chronic back tightness, and the nutrition framework fit around client dinners seamlessly.",
      rating: 5,
    },
    {
      name: "Dr. Elena Rostova",
      role: "Surgeon | 120-Day Remote Protocol",
      result: "Rebuilt posture & gained 12% compound strength",
      comment: "Working 60-hour hospital shifts made traditional training impossible. The 24-hour video form feedback and schedule-adapted macros kept me accountable even during night rotations.",
      rating: 5,
    },
    {
      name: "David H. Sterling",
      role: "Tech Founder | Marylebone 1-on-1",
      result: "Lost 11kg stubborn waist fat in 16 weeks",
      comment: "Having a completely private facility in Central London with high-grade equipment meant zero downtime waiting for weights. Best physical investment I've made in my 30s.",
      rating: 5,
    },
    {
      name: "James & Sarah Chen",
      role: "Partners | 2-on-1 Coaching",
      result: "Combined 16kg fat loss & PRs on compound lifts",
      comment: "Training as a couple with individualized exercise calibration was a game changer. We both got tailored targets while sharing the session energy in Marylebone.",
      rating: 5,
    },
    {
      name: "Oliver W.",
      role: "Management Consultant | Remote Protocol",
      result: "Dropped 8kg fat while traveling weekly",
      comment: "I travel across Europe three days a week. The remote app adaptively adjusted my training targets based on hotel gym equipment. Unbelievable level of detail.",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      {/* A. Top Bar */}
      <header className="fixed top-0 w-full glass z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="font-black text-lg text-slate-950">A</span>
            </div>
          </Link>
          <div className="text-xs md:text-sm font-semibold tracking-wider text-slate-300 uppercase">
            Atlas Strength & Performance | Marylebone, London
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* B. Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Private Personal Training & Online Athletic Transformation | Marylebone, London
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build a Lean, High-Performance Physique Built to Last.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An intelligent, data-driven strength and body composition protocol designed for busy professionals. Combine elite private coaching in Central London with comprehensive nutritional architecture to drop stubborn fat, build functional muscle, and sustain peak performance.
          </p>

          {/* VSL Placeholder */}
          <div className="mt-12 mb-8 relative group cursor-pointer max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-2xl flex items-center justify-center transition-all duration-300 hover:border-emerald-500/50">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300 group-hover:scale-105"
            />
            <div className="relative z-20 flex flex-col items-center gap-4">
              <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform duration-300 group-hover:text-emerald-400" />
              <p className="font-medium text-sm tracking-widest uppercase text-white/80">Play Video Message</p>
            </div>
          </div>

          <Button
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="h-16 px-12 text-lg font-bold bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Apply for Coaching
          </Button>
        </section>

        {/* C. Trust Builder (Guarantee & Coaching Standard Section) */}
        <section className="max-w-3xl mx-auto mt-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl opacity-50" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-xl space-y-6">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto border border-slate-700 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Engineered for Measurable, Objective Results.</h2>
            <div className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
              <p>
                Most training programs fail because they rely on guesswork, generic templates, and unsustainable restriction. The Atlas 120-Day Protocol is built on progressive overload, individual biomechanical assessment, and adaptive nutrition tailored to your schedule.
              </p>
              <p>
                We operate with absolute clarity: complete the training blocks, execute the nutrition targets, and track your metrics. If you do not see a radical transformation in your body composition and physical performance after 120 days of full compliance, you receive a complete refund. No runaround.
              </p>
            </div>
          </div>
        </section>

        {/* D. The Atlas Framework (Methodology / How It Works - SEO Section) */}
        <section className="max-w-6xl mx-auto mt-28 px-6">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              The Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              How We Build Sustainable Strength and Lean Muscle
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              A systematic, four-pillar architecture engineered for peak athletic output and long-term retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frameworkSteps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 p-12 bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-emerald-400 font-mono tracking-tighter">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* E. Pricing & Services Grid */}
        <section id="pricing" className="max-w-6xl mx-auto mt-28 px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              Coaching Tiers
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Choose Your Transformation Plan</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transparent investment structure calibrated to your location, goals, and level of support.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-5xl mx-auto relative group"
          >
            <CarouselContent className="-ml-4">
              {plans.map((plan, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col hover:border-emerald-500/50 transition-colors">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                        {plan.suffix && <span className="text-sm text-slate-400 font-medium">{plan.suffix}</span>}
                      </div>
                    </div>
                    <ul className="space-y-4 flex-1 mb-8">
                      {plan.deliverables.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleSelectPlan(plan.title)}
                      className="w-full h-12 text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95 mt-auto"
                    >
                      Select Plan
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" />
            </div>
          </Carousel>
        </section>

        {/* F. Client Results & Reviews Section (Infinite Loop Carousel) */}
        <section className="max-w-6xl mx-auto mt-28 px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              Verified Client Outcomes
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proven Results in Marylebone & Remote</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real transformations from executives, founders, and busy professionals who demanded objective results.
            </p>
          </div>

          <Carousel
            setApi={setReviewApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto relative group"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-emerald-500/20" />
                      </div>

                      <div className="inline-block px-3 py-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20 mb-4">
                        {review.result}
                      </div>

                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 italic">
                        "{review.comment}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{review.name}</h4>
                        <p className="text-xs text-slate-400">{review.role}</p>
                      </div>
                      <span className="text-[10px] uppercase font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white" />
            </div>
          </Carousel>
        </section>

        {/* G. Frequently Asked Questions */}
        <section className="max-w-4xl mx-auto mt-28 px-6">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              Clear Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Everything you need to know about coaching locations, schedule requirements, and suitability.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-slate-800 rounded-2xl bg-slate-900/60 px-6 py-2">
                <AccordionTrigger className="hover:no-underline text-left text-lg font-bold text-white py-4">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 leading-relaxed text-base pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* G. Information Sign Up */}
        <section id="signup" className="max-w-2xl mx-auto mt-28 px-6">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-[100px] opacity-60 rounded-full" />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-white text-center mb-2">Apply For Coaching</h3>
              <p className="text-slate-400 text-center text-sm mb-6">
                Submit your details to request private coaching in Marylebone or reserve your remote transformation spot.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    disabled={isLoading}
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Chosen Plan</label>
                  <input
                    type="text"
                    placeholder="Select a plan above"
                    value={selectedPlan}
                    readOnly
                    className="w-full h-12 bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 text-slate-400 focus:outline-none transition-all font-medium cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Notes / Goals</label>
                  <textarea
                    placeholder="Tell us about your fitness goals, injuries, or schedule preferences..."
                    value={notes}
                    disabled={isLoading}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium resize-none disabled:opacity-50"
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full h-14 text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application →
                    </>
                  )}
                </Button>
              </form>
              <p className="text-center text-xs text-slate-500 font-medium">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </section>

        {/* H. Personalized Calorie & Macro Calculator Accordion */}
        <section className="max-w-4xl mx-auto mt-16 mb-8 px-6">
          <Accordion type="single" collapsible className="w-full border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-sm overflow-hidden">
            <AccordionItem value="calculator" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-800/50 transition-colors">
                <span className="font-semibold text-white">Free Bonus: Personalized Calorie & Macro Calculator</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800">
                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <h4 className="text-lg font-bold text-white">Not sure how much you should be eating?</h4>
                    <p className="text-sm text-slate-400">
                      Take the guesswork out of your diet. Use our free advanced macro calculator to get your exact calorie, protein, carb, and fat targets based on your unique body composition and goals.
                    </p>
                  </div>
                  <Link to="/macro-calculator" className="w-full md:w-auto">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-8">
                      Go to Calculator
                    </Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      {/* I. Footer */}
      <footer className="border-t border-slate-800/50 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Atlas Strength and Performance. Marylebone, London.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesPage;

