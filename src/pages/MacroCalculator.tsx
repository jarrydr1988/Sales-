import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AtlasLogo from "@/components/AtlasLogo";

type Gender = "male" | "female";
type Goal = "fat-loss" | "muscle-gain" | "maintain";
type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "inches";
type ActivityLevel = "sedentary" | "somewhat-active" | "active" | "very-active";

interface MacroResults {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

const MacroCalculator = () => {
  const [gender, setGender] = useState<Gender | "">("");
  const [goal, setGoal] = useState<Goal | "">("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel | "">("");
  const [results, setResults] = useState<MacroResults | null>(null);

  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary: 1.2,
    "somewhat-active": 1.375,
    active: 1.55,
    "very-active": 1.725,
  };

  const calculateMacros = () => {
    if (!gender || !goal || !weight || !height || !age || !activityLevel) {
      return;
    }

    // Convert weight to kg
    const weightKg = weightUnit === "lbs" ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    
    // Convert height to cm
    const heightCm = heightUnit === "inches" ? parseFloat(height) * 2.54 : parseFloat(height);
    
    const ageNum = parseFloat(age);

    // Mifflin-St Jeor Equation for BMR
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161;
    }

    // Calculate TDEE
    const tdee = bmr * activityMultipliers[activityLevel];

    // Adjust calories based on goal
    let calories: number;
    switch (goal) {
      case "fat-loss":
        calories = tdee - 500;
        break;
      case "muscle-gain":
        calories = tdee + 300;
        break;
      default:
        calories = tdee;
    }

    // Calculate macros based on goal
    let proteinMultiplier: number;
    let fatPercentage: number;

    switch (goal) {
      case "fat-loss":
        proteinMultiplier = 2.2; // g per kg bodyweight
        fatPercentage = 0.25;
        break;
      case "muscle-gain":
        proteinMultiplier = 2.0;
        fatPercentage = 0.25;
        break;
      default:
        proteinMultiplier = 1.8;
        fatPercentage = 0.30;
    }

    const protein = Math.round(weightKg * proteinMultiplier);
    const fats = Math.round((calories * fatPercentage) / 9);
    const carbCalories = calories - (protein * 4) - (fats * 9);
    const carbs = Math.round(carbCalories / 4);

    setResults({
      calories: Math.round(calories),
      protein,
      carbs,
      fats,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <AtlasLogo className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl md:text-2xl text-primary">ATLAS</span>
                <span className="font-display text-xs md:text-sm text-foreground tracking-widest">STRENGTH & PERFORMANCE</span>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft size={16} />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="w-10 h-10 text-primary" />
              <h1 className="font-display text-4xl md:text-5xl text-foreground">
                MACRO <span className="text-primary">CALCULATOR</span>
              </h1>
            </div>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Get personalized macro and calorie targets based on your goals, body composition, and activity level.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
            {/* Gender Selection */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Gender</Label>
              <Select value={gender} onValueChange={(value: Gender) => setGender(value)}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Age</Label>
              <Input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-background border-border"
              />
            </div>

            {/* Goal Selection */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Goal</Label>
              <Select value={goal} onValueChange={(value: Goal) => setGoal(value)}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fat-loss">Fat Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="maintain">Maintain</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Weight */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Body Weight</Label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder={`Weight in ${weightUnit}`}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-background border-border flex-1"
                />
                <Select value={weightUnit} onValueChange={(value: WeightUnit) => setWeightUnit(value)}>
                  <SelectTrigger className="bg-background border-border w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">KG</SelectItem>
                    <SelectItem value="lbs">LBS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Height */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Height</Label>
              <div className="flex gap-3">
                <Input
                  type="number"
                  placeholder={`Height in ${heightUnit}`}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-background border-border flex-1"
                />
                <Select value={heightUnit} onValueChange={(value: HeightUnit) => setHeightUnit(value)}>
                  <SelectTrigger className="bg-background border-border w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cm">CM</SelectItem>
                    <SelectItem value="inches">Inches</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <Label className="text-foreground font-display tracking-wider">Activity Level</Label>
              <Select value={activityLevel} onValueChange={(value: ActivityLevel) => setActivityLevel(value)}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select activity level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                  <SelectItem value="somewhat-active">Somewhat Active (1-3 days/week)</SelectItem>
                  <SelectItem value="active">Active (3-5 days/week)</SelectItem>
                  <SelectItem value="very-active">Very Active (6-7 days/week)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Calculate Button */}
            <Button
              variant="hero"
              size="xl"
              className="w-full mt-4"
              onClick={calculateMacros}
              disabled={!gender || !goal || !weight || !height || !age || !activityLevel}
            >
              Calculate My Macros
            </Button>

            {/* Results */}
            {results && (
              <div className="mt-8 pt-8 border-t border-border animate-fade-in">
                <h2 className="font-display text-2xl text-center text-foreground mb-6">
                  YOUR <span className="text-primary">TARGETS</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-background border border-primary/30 rounded-lg p-4 text-center">
                    <p className="text-3xl font-display text-primary">{results.calories}</p>
                    <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Calories</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4 text-center">
                    <p className="text-3xl font-display text-foreground">{results.protein}g</p>
                    <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Protein</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4 text-center">
                    <p className="text-3xl font-display text-foreground">{results.carbs}g</p>
                    <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Carbs</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4 text-center">
                    <p className="text-3xl font-display text-foreground">{results.fats}g</p>
                    <p className="text-sm text-muted-foreground font-body uppercase tracking-wider">Fats</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-6 font-body">
                  These are estimated targets. For personalized guidance, consider our coaching services.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MacroCalculator;
