import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      {units.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-gold/30 bg-castle-dark/60 backdrop-blur-sm">
            <span className="font-cinzel-regular text-xl md:text-2xl text-gold-light">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="font-cormorant text-xs text-muted-foreground mt-2 block tracking-wider uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
