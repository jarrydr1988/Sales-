import { useEffect, useRef } from "react";

const GlowingRing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      ctx.clearRect(0, 0, width, height);

      // Draw particle grid background
      ctx.strokeStyle = "rgba(124, 182, 88, 0.05)";
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating particles
      for (let i = 0; i < 50; i++) {
        const particleX = (Math.sin(time * 0.001 + i * 0.5) * 0.5 + 0.5) * width;
        const particleY = (Math.cos(time * 0.0008 + i * 0.7) * 0.5 + 0.5) * height;
        const size = Math.sin(time * 0.002 + i) * 1.5 + 2;
        const alpha = Math.sin(time * 0.001 + i * 0.3) * 0.3 + 0.4;

        ctx.beginPath();
        ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 182, 88, ${alpha})`;
        ctx.fill();
      }

      // Draw main glowing ring
      const segments = 180;
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const nextAngle = ((i + 1) / segments) * Math.PI * 2;
        
        // Wave effect on the ring
        const wave = Math.sin(angle * 3 + time * 0.003) * 8;
        const currentRadius = radius + wave;
        
        const x1 = centerX + Math.cos(angle) * currentRadius;
        const y1 = centerY + Math.sin(angle) * currentRadius;
        const x2 = centerX + Math.cos(nextAngle) * (radius + Math.sin(nextAngle * 3 + time * 0.003) * 8);
        const y2 = centerY + Math.sin(nextAngle) * (radius + Math.sin(nextAngle * 3 + time * 0.003) * 8);

        // Color gradient around the ring
        const hue = 95 + Math.sin(angle + time * 0.001) * 10;
        const lightness = 50 + Math.sin(angle * 2 + time * 0.002) * 15;
        const alpha = 0.6 + Math.sin(angle * 4 + time * 0.003) * 0.3;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsla(${hue}, 50%, ${lightness}%, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Draw outer glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, radius - 20,
        centerX, centerY, radius + 60
      );
      gradient.addColorStop(0, "rgba(124, 182, 88, 0)");
      gradient.addColorStop(0.5, `rgba(124, 182, 88, ${0.15 + Math.sin(time * 0.002) * 0.1})`);
      gradient.addColorStop(1, "rgba(124, 182, 88, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 40, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw inner subtle glow
      const innerGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      innerGradient.addColorStop(0, `rgba(124, 182, 88, ${0.05 + Math.sin(time * 0.001) * 0.03})`);
      innerGradient.addColorStop(0.7, "rgba(124, 182, 88, 0.02)");
      innerGradient.addColorStop(1, "rgba(124, 182, 88, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = innerGradient;
      ctx.fill();

      // Energy pulses moving along the ring
      for (let p = 0; p < 3; p++) {
        const pulseAngle = (time * 0.002 + (p * Math.PI * 2) / 3) % (Math.PI * 2);
        const pulseX = centerX + Math.cos(pulseAngle) * radius;
        const pulseY = centerY + Math.sin(pulseAngle) * radius;

        const pulseGradient = ctx.createRadialGradient(
          pulseX, pulseY, 0,
          pulseX, pulseY, 30
        );
        pulseGradient.addColorStop(0, "rgba(124, 182, 88, 0.8)");
        pulseGradient.addColorStop(0.5, "rgba(124, 182, 88, 0.3)");
        pulseGradient.addColorStop(1, "rgba(124, 182, 88, 0)");

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 30, 0, Math.PI * 2);
        ctx.fillStyle = pulseGradient;
        ctx.fill();
      }

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default GlowingRing;
