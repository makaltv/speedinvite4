import { useEffect, useRef } from "react";

const GoldenParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 4;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: -10px;
        background: radial-gradient(circle, hsl(43 70% 70%), hsl(43 65% 55% / 0.5));
        border-radius: 50%;
        pointer-events: none;
        animation: float-particle ${duration}s ease-in ${delay}s infinite;
      `;
      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    const interval = setInterval(createParticle, 400);
    // Create initial batch
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default GoldenParticles;
