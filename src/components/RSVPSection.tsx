import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="section-medieval bg-background">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-12 border-gold-ornate bg-card/30"
          >
            <span className="text-5xl block mb-6">⚜</span>
            <h3 className="text-gold-gradient text-xl font-cinzel mb-4">
              Votre présence honorera le royaume
            </h3>
            <p className="font-cormorant text-foreground/70 italic text-lg">
              Votre réponse a été reçue avec gratitude. Nous avons hâte de célébrer cette union royale en votre compagnie.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-medieval bg-background">
      <div className="max-w-lg mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="ornament-divider mb-4">
            <span className="text-gold text-lg">✉️</span>
          </div>
          <h2 className="text-gold-gradient text-2xl md:text-3xl font-cinzel mb-4">
            Répondez au Décret
          </h2>
          <p className="font-cormorant text-muted-foreground italic text-lg">
            Confirmez votre présence au royaume
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 border-gold-ornate bg-card/20"
        >
          {/* Name */}
          <div>
            <label className="font-cinzel-regular text-xs tracking-[0.2em] text-gold-light/70 uppercase block mb-2">
              Votre Nom
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 bg-input border border-gold/20 text-foreground font-cormorant text-lg focus:border-gold/50 focus:outline-none transition-colors"
              placeholder="Sire / Dame..."
            />
          </div>

          {/* Attendance */}
          <div>
            <label className="font-cinzel-regular text-xs tracking-[0.2em] text-gold-light/70 uppercase block mb-2">
              Présence
            </label>
            <select
              value={form.attendance}
              onChange={(e) => setForm({ ...form, attendance: e.target.value })}
              className="w-full p-3 bg-input border border-gold/20 text-foreground font-cormorant text-lg focus:border-gold/50 focus:outline-none transition-colors"
            >
              <option value="yes">J'honorerai le royaume de ma présence</option>
              <option value="no">Je ne pourrai hélas être présent(e)</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="font-cinzel-regular text-xs tracking-[0.2em] text-gold-light/70 uppercase block mb-2">
              Nombre de convives
            </label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full p-3 bg-input border border-gold/20 text-foreground font-cormorant text-lg focus:border-gold/50 focus:outline-none transition-colors"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="font-cinzel-regular text-xs tracking-[0.2em] text-gold-light/70 uppercase block mb-2">
              Message pour les souverains
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 bg-input border border-gold/20 text-foreground font-cormorant text-lg focus:border-gold/50 focus:outline-none transition-colors resize-none"
              placeholder="Vos vœux pour le royaume..."
            />
          </div>

          <button
            type="submit"
            className="w-full font-cinzel-regular text-xs tracking-[0.3em] uppercase py-4 border-gold-ornate bg-gold/10 text-gold-light hover:bg-gold/20 transition-all duration-500"
          >
            ⚜ Envoyer ma réponse ⚜
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
