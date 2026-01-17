import { useState, useEffect, useCallback } from "react";

const words = ["Potential", "Strength", "Health", "Power", "Best Self"];

interface LeafParticle {
  id: number;
  char: string;
  x: number;
  y: number;
  rotation: number;
  delay: number;
}

const RotatingWord = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<LeafParticle[]>([]);
  const [displayWord, setDisplayWord] = useState(words[0]);

  const createParticles = useCallback((word: string) => {
    const newParticles: LeafParticle[] = word.split("").map((char, i) => ({
      id: i,
      char,
      x: Math.random() * 200 - 100,
      y: Math.random() * -150 - 50,
      rotation: Math.random() * 720 - 360,
      delay: i * 0.03,
    }));
    return newParticles;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setParticles(createParticles(words[currentIndex]));
      
      // After particles animate out, change word
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setDisplayWord(words[nextIndex]);
        setParticles([]);
        setIsAnimating(false);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, createParticles]);

  return (
    <span className="relative inline-block min-w-[280px] md:min-w-[400px] lg:min-w-[500px]">
      {/* Current word with fade effect */}
      <span
        className={`text-gradient transition-all duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayWord}
      </span>

      {/* Leaf particles */}
      {isAnimating && (
        <span className="absolute inset-0 pointer-events-none overflow-visible">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="absolute text-gradient leaf-particle"
              style={{
                left: `${(particle.id / particles.length) * 100}%`,
                animationDelay: `${particle.delay}s`,
                ["--tx" as string]: `${particle.x}px`,
                ["--ty" as string]: `${particle.y}px`,
                ["--rot" as string]: `${particle.rotation}deg`,
              }}
            >
              {particle.char}
            </span>
          ))}
        </span>
      )}
    </span>
  );
};

export default RotatingWord;
