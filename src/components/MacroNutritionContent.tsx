import { ArrowRight, Target, TrendingUp, Clock, Settings, Dumbbell, Apple, Moon, Heart, Zap, Scale, Brain, Flame, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import proteinFoods from "@/assets/protein-foods.jpg";
import carbFoods from "@/assets/carb-foods.jpg";
import fatFoods from "@/assets/fat-foods.jpg";
import performanceWheel from "@/assets/performance-wheel.jpg";
interface MacroNutritionContentProps {
  onScrollToCalculator: () => void;
}
const MacroNutritionContent = ({
  onScrollToCalculator
}: MacroNutritionContentProps) => {
  return <div className="mt-20 space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white mb-4">
          Precision Nutrition. <span className="text-emerald-400">Predictable Results.</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-slate-400 font-sans text-lg">
            Most people don't fail because they lack discipline.<br />
            <strong className="text-white">They fail because they're guessing.</strong>
          </p>
          <p className="text-slate-400 font-sans">
            Macronutrients remove guesswork and replace it with control, clarity, and measurable outcomes. When your intake is aligned with your body and your goal, results stop being random.
          </p>
        </div>
      </section>

      {/* What Are Macros */}
      <section>
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-6 text-center">
          What Are <span className="text-emerald-400">Macros?</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-400 font-sans mb-6">Macros, short for macronutrients, are the three primary nutrients that determine how your body looks, performs, and recovers:</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <a href="#protein-section" className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500/50 transition-colors cursor-pointer">
              <span className="font-sans font-bold text-emerald-400 text-lg">Protein</span>
            </a>
            <a href="#carbohydrates-section" className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500/50 transition-colors cursor-pointer">
              <span className="font-sans font-bold text-emerald-400 text-lg">Carbohydrates</span>
            </a>
            <a href="#fats-section" className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center hover:border-emerald-500/50 transition-colors cursor-pointer">
              <span className="font-sans font-bold text-emerald-400 text-lg">Fats</span>
            </a>
          </div>
          <div className="bg-slate-900 border border-emerald-500/20 rounded-2xl p-6">
            <p className="text-slate-200 font-sans text-center">
              <strong>Calories</strong> determine whether your weight changes.<br />
              <strong>Macros</strong> determine <em>what that weight is made of.</em>
            </p>
          </div>
          <p className="text-slate-400 font-sans mt-6 text-center">When set correctly, macros allow you to lose fat, maintain or build muscle, and perform at a high level, without unnecessary restriction.</p>
        </div>
      </section>

      {/* Protein Section */}
      <section id="protein-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-2">
              Protein: <span className="text-emerald-400">The Foundation of Body Composition</span>
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Preserves and builds lean muscle</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Protein supplies the amino acids required to maintain and develop muscle tissue, particularly under training stress.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Flame className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Accelerates fat loss</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Higher protein intake increases satiety, stabilises blood sugar, and protects lean mass while dieting.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Enhances recovery and resilience</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Adequate protein improves recovery between sessions, allowing consistent training and long-term progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={proteinFoods} alt="High-quality protein sources including chicken, salmon, eggs and beef" className="rounded-2xl shadow-xl w-full border border-slate-800" />
          </div>
        </div>
      </section>

      {/* Carbohydrates Section */}
      <section id="carbohydrates-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img src={carbFoods} alt="Healthy carbohydrate sources including sweet potatoes, oats and whole grains" className="rounded-2xl shadow-xl w-full border border-slate-800" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-2">
              Carbohydrates: <span className="text-emerald-400">Performance and Output</span>
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Primary training fuel</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Carbohydrates power workouts, daily movement, and cognitive performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Support strength and intensity</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Stored glycogen allows you to train harder, lift heavier, and sustain output across sessions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Hormonal and metabolic support</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Carbs play a key role in stress regulation, thyroid health, and long-term metabolic efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fats Section */}
      <section id="fats-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-2">
              Fats: <span className="text-emerald-400">Hormones, Health, and Sustainability</span>
            </h3>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Essential for hormone production</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Dietary fats support testosterone, oestrogen, and overall endocrine function.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Apple className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Enable nutrient absorption</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Vitamins A, D, E, and K require fat to be absorbed and utilised effectively.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-200 mb-1">Promote satiety and energy stability</h4>
                  <p className="text-slate-400 font-sans text-sm">
                    Fats provide long-lasting energy and help regulate appetite throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={fatFoods} alt="Healthy fat sources including avocados, olive oil, nuts and salmon" className="rounded-2xl shadow-xl w-full border border-slate-800" />
          </div>
        </div>
      </section>

      {/* Why Calories & Macros Matter */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-8 text-center">
          Why Calories & Macros <span className="text-emerald-400">Matter</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-200 mb-1">They eliminate guesswork</h4>
              <p className="text-slate-400 font-sans text-sm">
                No more "eating clean" without results. Precision replaces assumptions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-200 mb-1">They create predictability</h4>
              <p className="text-slate-400 font-sans text-sm">
                When intake matches your goal, outcomes become repeatable and measurable.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-200 mb-1">They support long-term consistency</h4>
              <p className="text-slate-400 font-sans text-sm">
                Clear targets simplify decision-making and reduce mental fatigue.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-slate-200 mb-1">They allow intelligent adjustment</h4>
              <p className="text-slate-400 font-sans text-sm">
                Progress stalls? You know exactly what to change — and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Your Macro Targets */}
      <section>
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-8 text-center">
          How to Use Your <span className="text-emerald-400">Macro Targets</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">1</span>
              <h4 className="font-sans font-bold text-white">Track with Precision</h4>
            </div>
            <p className="text-slate-400 font-sans text-sm">
              Log food using MyFitnessPal, Cronometer, or FoodNoms to ensure accuracy.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">2</span>
              <h4 className="font-sans font-bold text-white">Build Around Protein</h4>
            </div>
            <p className="text-slate-400 font-sans text-sm">
              Anchor every meal with protein, then allocate carbohydrates and fats to complete your targets.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">3</span>
              <h4 className="font-sans font-bold text-white">Assess and Refine</h4>
            </div>
            <p className="text-slate-400 font-sans text-sm">
              Review progress over 2–3 weeks and adjust based on results, performance, and energy.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-sans font-bold text-sm">4</span>
              <h4 className="font-sans font-bold text-white">Stay Consistent</h4>
            </div>
            <p className="text-slate-400 font-sans text-sm">
              Aim to land within 5–10g per macro daily. Perfection isn't required — discipline over time is.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-4 text-center">
          Our Macro Calculator <span className="text-emerald-400">Methodology</span>
        </h2>
        <p className="text-slate-400 font-sans text-center mb-8 max-w-xl mx-auto">
          We use scientifically validated formulas combined for greater accuracy and reliability.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-sans font-bold text-lg text-slate-200 mb-3">Basal Metabolic Rate (BMR)</h4>
            <p className="text-slate-400 font-sans text-sm mb-4">
              Your BMR is calculated using an average of two gold-standard equations:
            </p>
            <ul className="space-y-2 text-slate-400 font-sans text-sm">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                Harris-Benedict
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                Mifflin-St Jeor
              </li>
            </ul>
            <p className="text-slate-400 font-sans text-sm mt-4">
              This dual-formula approach reduces bias and improves accuracy across different body types.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg text-slate-200 mb-3">Total Daily Energy Expenditure (TDEE)</h4>
            <p className="text-slate-400 font-sans text-sm mb-4">
              Your BMR is adjusted for:
            </p>
            <ul className="space-y-2 text-slate-400 font-sans text-sm">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                Training frequency
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                Daily movement
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                Lifestyle demands
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg text-slate-200 mb-3">Goal-Based Calorie Adjustment</h4>
            <ul className="space-y-2 text-slate-400 font-sans text-sm">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Fat Loss:</span>
                15–25% deficit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Maintenance:</span>
                TDEE
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">Muscle Gain:</span>
                5–15% surplus
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-lg text-slate-200 mb-3">Macro Allocation</h4>
            <p className="text-slate-400 font-sans text-sm">
              Protein is set based on body weight and objective. Remaining calories are intelligently split between carbohydrates and fats based on performance demands and preference.
            </p>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section>
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-4 text-center">
          The Bigger Picture: <span className="text-emerald-400">Total Performance</span>
        </h2>
        <p className="text-slate-400 font-sans text-center mb-8 max-w-xl mx-auto">
          Your body operates as a system. When one area is neglected, results stall.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Flame className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Total Calories</h4>
              <p className="text-slate-500 font-sans text-xs">Precise fuel, not restriction</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Gut Health</h4>
              <p className="text-slate-500 font-sans text-xs">Absorption dictates outcomes</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Apple className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Food Quality</h4>
              <p className="text-slate-500 font-sans text-xs">High-performance inputs only</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Lifestyle</h4>
              <p className="text-slate-500 font-sans text-xs">Stress, routine, recovery</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Training</h4>
              <p className="text-slate-500 font-sans text-xs">Structured, progressive, intentional</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Scale className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Macronutrients</h4>
              <p className="text-slate-500 font-sans text-xs">Measured, not guessed</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4 col-span-2 md:col-span-1 mx-auto w-full max-w-[218px]">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Moon className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-white text-sm mb-1">Sleep</h4>
              <p className="text-slate-500 font-sans text-xs">The non-negotiable foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Macros Alone Are Not Enough */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-6 text-center">
          Why Macros Alone <span className="text-emerald-400">Are Not Enough</span>
        </h2>
        <p className="text-slate-400 font-sans text-center mb-8 max-w-xl mx-auto">Macros are a powerful starting point, not the full solution. Most people discover that:</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <p className="text-slate-400 font-sans text-sm">
              Nutrition alone produces limited transformation
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <p className="text-slate-400 font-sans text-sm">
              Weight loss without training often sacrifices muscle
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <p className="text-slate-400 font-sans text-sm">
              Sustainable change requires structured habits
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <p className="text-slate-400 font-sans text-sm">
              True results come from alignment, not isolated effort
            </p>
          </div>
        </div>
      </section>

      {/* Why Combine Macros with Personal Training */}
      <section>
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-8 text-center">
          Why Combine Macros with <span className="text-emerald-400">Personal Training</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-sans font-bold text-white mb-2">Maximise Nutrient Utilisation</h4>
            <p className="text-slate-400 font-sans text-sm">
              Training directs nutrients where they belong — into muscle, performance, and recovery.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <Dumbbell className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-sans font-bold text-white mb-2">Body Recomposition, Not Just Weight Loss</h4>
            <p className="text-slate-400 font-sans text-sm">
              The right training allows fat loss without sacrificing muscle, creating a lean, athletic physique.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-sans font-bold text-white mb-2">Lifestyle Integration</h4>
            <p className="text-slate-400 font-sans text-sm">
              This is not about perfection. It's about systems that work in real life.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="font-sans font-bold text-white mb-2">Faster, Visible Results</h4>
            <p className="text-slate-400 font-sans text-sm">
              Macro tracking builds consistency. Intelligent training accelerates change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Moved to Bottom */}
      <section className="text-center bg-gradient-to-b from-emerald-500/10 to-transparent rounded-3xl border border-slate-800/50 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 blur-3xl opacity-50" />
        <div className="relative z-10 space-y-6">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-white mb-4">
            👉 Get Your Personalised <span className="text-emerald-400">Macro Targets</span>
          </h2>
          <p className="text-slate-400 font-sans mb-6 max-w-xl mx-auto">Enter your details and receive your customised calorie and macro breakdown, delivered directly to your inbox.</p>
          <div className="flex justify-center">
            <Button onClick={onScrollToCalculator} className="h-14 px-10 text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95 gap-2">
              Calculate Your Macros
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default MacroNutritionContent;