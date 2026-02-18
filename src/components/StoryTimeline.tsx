import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import parchmentBg from "@/assets/parchment-bg.jpg";

const events = [
  {
    year: "MMXVIII",
    title: "La Rencontre",
    description: "Tel un tournoi du destin, leurs regards se croisèrent lors d'un bal de printemps. L'étincelle d'un amour éternel fut allumée.",
    icon: "⚔️",
  },
  {
    year: "MMXX",
    title: "La Promesse",
    description: "Sous les étoiles d'un soir d'été, ils se jurèrent fidélité et dévouement, scellant leur alliance par un serment sacré.",
    icon: "💍",
  },
  {
    year: "MMXXIV",
    title: "L'Engagement",
    description: "Au sommet d'une colline baignée de lumière dorée, il posa un genou à terre et demanda sa main. Elle accepta, les larmes aux yeux.",
    icon: "👑",
  },
  {
    year: "MMXXVI",
    title: "L'Union Royale",
    description: "Le grand jour approche. Deux familles, un royaume, une célébration digne des plus grandes légendes.",
    icon: "🏰",
  },
];

const TimelineItem = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex flex-col items-center"
    >
      {/* Connector line */}
      {index < events.length - 1 && (
        <div className="absolute top-20 left-1/2 w-px h-full bg-gradient-to-b from-gold-dark/60 to-transparent -translate-x-1/2 z-0" />
      )}

      {/* Icon circle */}
      <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold-dark bg-castle-dark text-2xl glow-gold mb-4">
        {event.icon}
      </div>

      {/* Year */}
      <span className="font-cinzel-regular text-xs tracking-[0.3em] text-gold-dark mb-2">
        {event.year}
      </span>

      {/* Card */}
      <div
        className="relative max-w-sm w-full p-6 mb-16 border border-gold-dark/30 overflow-hidden"
        style={{
          backgroundImage: `url(${parchmentBg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-parchment-overlay" />
        <div className="relative z-10">
          <h3 className="font-cinzel text-lg text-castle-dark mb-3 text-center">
            {event.title}
          </h3>
          <p className="font-cormorant text-base text-castle-dark/80 text-center leading-relaxed italic">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const StoryTimeline = () => {
  return (
    <section id="story" className="section-medieval bg-castle-gradient">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-gold text-lg">📜</span>
          </div>
          <h2 className="text-gold-gradient text-2xl md:text-3xl font-cinzel mb-4">
            Notre Histoire
          </h2>
          <p className="font-cormorant text-muted-foreground italic text-lg">
            Les chapitres d'un amour royal
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col items-center">
          {events.map((event, index) => (
            <TimelineItem key={event.title} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
