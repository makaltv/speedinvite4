import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-castle-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Crown */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl mb-6"
        >
          👑
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="ornament-divider mb-6"
        >
          <span className="text-gold text-xl">⚜</span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gold-gradient text-4xl md:text-6xl lg:text-7xl font-cinzel mb-2 leading-tight"
        >
          Éléonore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gold text-3xl md:text-4xl font-medieval my-2"
        >
          &
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gold-gradient text-4xl md:text-6xl lg:text-7xl font-cinzel mb-6"
        >
          Thibault
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-cormorant text-lg md:text-xl text-foreground/80 italic mb-8 max-w-md mx-auto"
        >
          « Par décret du cœur, nos destinées s'unissent. »
        </motion.p>

        {/* Date/Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-cinzel-regular text-sm md:text-base tracking-[0.2em] text-gold-light/80 uppercase mb-8 space-y-1"
        >
          <p>12 Septembre 2026</p>
          <p>Château de Fontainebleau</p>
          <p>15h00</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <CountdownTimer targetDate="2026-09-12T15:00:00" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <button
            onClick={() => scrollTo("rsvp")}
            className="font-cinzel-regular text-xs tracking-[0.25em] uppercase px-8 py-3 border-gold-ornate bg-gold/10 text-gold-light hover:bg-gold/20 transition-all duration-300"
          >
            RSVP
          </button>
          <button
            onClick={() => scrollTo("story")}
            className="font-cinzel-regular text-xs tracking-[0.25em] uppercase px-8 py-3 border border-gold/30 text-gold-light/70 hover:border-gold/60 hover:text-gold-light transition-all duration-300"
          >
            Le Royaume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
