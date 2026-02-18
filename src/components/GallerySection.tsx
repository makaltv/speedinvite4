import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const photos = [
  { id: 1, placeholder: "🌹", label: "Premier regard" },
  { id: 2, placeholder: "💑", label: "Ensemble" },
  { id: 3, placeholder: "🌅", label: "Coucher de soleil" },
  { id: 4, placeholder: "💍", label: "La demande" },
  { id: 5, placeholder: "🏰", label: "Au château" },
  { id: 6, placeholder: "✨", label: "Magie" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-medieval bg-castle-gradient">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider mb-4">
            <span className="text-gold text-lg">📸</span>
          </div>
          <h2 className="text-gold-gradient text-2xl md:text-3xl font-cinzel mb-4">
            Galerie Royale
          </h2>
          <p className="font-cormorant text-muted-foreground italic text-lg">
            Fragments de notre histoire
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedPhoto(photo.id)}
              className="aspect-square border-2 border-gold/20 bg-card/50 flex flex-col items-center justify-center cursor-pointer hover:border-gold/50 hover:glow-gold transition-all duration-500 group"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {photo.placeholder}
              </span>
              <span className="font-cormorant text-sm text-muted-foreground italic">
                {photo.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-cormorant text-center text-muted-foreground text-sm italic mt-8">
          Ajoutez vos propres photos pour personnaliser cette galerie
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
