import { PlayCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useState } from "react";

const SalesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      {/* A. Top Bar */}
      <header className="fixed top-0 w-full glass z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="font-black text-lg text-slate-950">A</span>
            </div>
            Atlas Strength Output
          </div>
          <div className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
            Atlas Strength & Performance
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* B. Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Accepting 10 New Online Clients
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            How to Drop 8kg of Stubborn Fat and Build an Athletic Physique in 120 Days.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The proven 120-day <span className="text-emerald-400 font-semibold">Atlas Strength and Performance</span> program designed exclusively for the dedicated. Reclaim your energy and confidence now.
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
            Start Your Transformation Today
          </Button>
        </section>

        {/* C. Trust Builder (Guarantee) */}
        <section className="max-w-3xl mx-auto mt-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 blur-3xl opacity-50" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">100% Money-Back Guarantee</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              I don't want your money if I don't change your life. Look, I know you're skeptical. You've tried programs before. That's why I take 100% of the risk. Complete the 120-day Atlas Strength and Performance program. Follow the steps. If you aren't thrilled with the person staring back at you in the mirror, I'll refund your entire investment. No questions asked.
            </p>
          </div>
        </section>

        {/* D. Pricing Section */}
        <section id="pricing" className="max-w-6xl mx-auto mt-24 px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Transformation Plan</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Select the coaching tier that best fits your goals and lifestyle.</p>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl mx-auto relative group"
          >
            <CarouselContent>
              {[
                { title: "1 on 1 Personal Training", price: "£150" },
                { title: "2 on 1 Personal Training", price: "£105" },
                { title: "Online Personal Training", price: "£250", suffix: "/pm" },
                { title: "Community Training", price: "£25", suffix: "/pm" }
              ].map((plan, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col hover:border-emerald-500/50 transition-colors">
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-2">{plan.title}</h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                        {plan.suffix && <span className="text-lg text-slate-500 font-medium">{plan.suffix}</span>}
                      </div>
                    </div>
                    <ul className="space-y-4 flex-1 mb-8">
                      {[
                        "Tailored Workout Plan",
                        "Nutrition Framework",
                        "Direct Access Coaching"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-base leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() => handleSelectPlan(plan.title)}
                      className="w-full h-12 text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95 mt-auto"
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

        {/* E. Information Sign Up */}
        <section id="signup" className="max-w-2xl mx-auto mt-24 px-6">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-[100px] opacity-60 rounded-full" />
            <div className="relative space-y-6">
              <h4 className="text-2xl font-semibold text-white text-center mb-4">Sign Up For More Information</h4>
              <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Chosen Plan</label>
                  <input
                    type="text"
                    placeholder="Select a plan above"
                    value={selectedPlan}
                    readOnly
                    className="w-full h-12 bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 text-slate-400 focus:outline-none transition-all font-medium cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Notes / Goals</label>
                  <textarea
                    placeholder="Tell us about your fitness goals, injuries, or questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-14 text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95">
                  Get More Info →
                </Button>
              </form>
              <p className="text-center text-xs text-slate-500 font-medium">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </section>

        {/* F. Hidden Calorie Calculator Tab */}
        <section className="max-w-4xl mx-auto mt-16 mb-8 px-6">
          <Accordion type="single" collapsible className="w-full border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-sm overflow-hidden">
            <AccordionItem value="calculator" className="border-b-0">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-800/50 transition-colors">
                <span className="font-semibold text-white">Free Bonus: Personalized Calorie & Macro Calculator</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-950 p-6 rounded-xl border border-slate-800">
                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <h5 className="text-lg font-bold text-white">Not sure how much you should be eating?</h5>
                    <p className="text-sm text-slate-400">
                      Take the guesswork out of your diet. Use our free advanced macro calculator to get your exact calorie, protein, carb, and fat targets based on your unique body composition and goals.
                    </p>
                  </div>
                  <Link to="/macro-calculator" className="w-full md:w-auto">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 px-8">
                      Go to Calculator
                    </Button>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      {/* F. Footer */}
      <footer className="border-t border-slate-800/50 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Atlas Strength and Performance. All rights reserved.</p>
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
