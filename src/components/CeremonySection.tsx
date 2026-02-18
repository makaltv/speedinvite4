import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "15h00", event: "Cérémonie", detail: "Chapelle du château", icon: "⛪" },
  { time: "16h30", event: "Vin d'honneur", detail: "Jardins royaux", icon: "🍷" },
  { time: "18h00", event: "Banquet royal", detail: "Grande salle du château", icon: "🏰" },
  { time: "21h00", event: "Bal & festivités", detail: "Salle de bal", icon: "🎶" },
];

const CeremonySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="ceremony" className="section-medieval bg-background">
      <div className="max-w-2xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-gold text-lg">⚜</span>
          </div>
          <h2 className="text-gold-gradient text-2xl md:text-3xl font-cinzel mb-4">
            La Célébration
          </h2>
          <p className="font-cormorant text-muted-foreground italic text-lg">
            Programme des festivités royales
          </p>
        </div>

        {/* Schedule */}
        <div className="space-y-6 mb-16">
          {schedule.map((item, i) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex items-center gap-4 p-4 border border-gold/20 bg-card/50 backdrop-blur-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-cinzel-regular text-sm tracking-wider text-gold-light">
                    {item.event}
                  </h4>
                  <span className="font-cormorant text-sm text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <p className="font-cormorant text-sm text-muted-foreground italic mt-1">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dress code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center p-8 border-gold-ornate bg-card/30"
        >
          <h4 className="font-cinzel-regular text-sm tracking-[0.3em] text-gold mb-4 uppercase">
            Dress Code
          </h4>
          <p className="font-cormorant text-lg text-foreground/80 italic">
            Tenue élégante — Inspiration royale & chevaleresque bienvenue
          </p>
          <p className="font-cormorant text-sm text-muted-foreground mt-2">
            Palette suggérée : or, bordeaux, émeraude, ivoire
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h4 className="font-cinzel-regular text-sm tracking-[0.3em] text-gold mb-6 uppercase">
            Le Lieu
          </h4>
          <div className="w-full h-64 border border-gold/20 overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.1234!2d2.7013!3d48.4025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5f6c3e3e0f9e7%3A0x8d080b30e3c2f6d0!2sCh%C3%A2teau%20de%20Fontainebleau!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Lieu de la cérémonie"
            />
          </div>
          <a
            href="https://www.google.com/maps/dir//Ch%C3%A2teau+de+Fontainebleau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-cinzel-regular text-xs tracking-[0.2em] uppercase px-6 py-3 border border-gold/30 text-gold-light/70 hover:border-gold/60 hover:text-gold-light transition-all duration-300"
          >
            📍 Itinéraire
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonySection;
