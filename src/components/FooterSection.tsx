const FooterSection = () => {
  const handleCalendar = () => {
    const event = {
      title: "Mariage Royal — Éléonore & Thibault",
      start: "20260912T130000Z",
      end: "20260913T030000Z",
      location: "Château de Fontainebleau, France",
      description: "Union royale d'Éléonore & Thibault",
    };

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${event.start}`,
      `DTEND:${event.end}`,
      `SUMMARY:${event.title}`,
      `LOCATION:${event.location}`,
      `DESCRIPTION:${event.description}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mariage-royal.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  const whatsappMessage = encodeURIComponent(
    "Vous êtes cordialement invités à l'union royale d'Éléonore & Thibault — 12 Septembre 2026 au Château de Fontainebleau 👑"
  );

  return (
    <footer className="section-medieval bg-castle-dark border-t border-gold/10">
      <div className="max-w-lg mx-auto text-center">
        <div className="ornament-divider mb-8">
          <span className="text-gold text-lg">👑</span>
        </div>

        <p className="font-cinzel text-gold-gradient text-lg mb-6">
          Éléonore & Thibault
        </p>
        <p className="font-cormorant text-muted-foreground italic mb-8">
          12 Septembre 2026 — Château de Fontainebleau
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={handleCalendar}
            className="font-cinzel-regular text-xs tracking-[0.2em] uppercase px-6 py-3 border border-gold/30 text-gold-light/70 hover:border-gold/60 hover:text-gold-light transition-all duration-300"
          >
            📅 Ajouter au calendrier
          </button>
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel-regular text-xs tracking-[0.2em] uppercase px-6 py-3 border border-emerald/30 text-emerald-light hover:border-emerald/60 transition-all duration-300 inline-block"
          >
            💬 WhatsApp
          </a>
        </div>

        <div className="ornament-divider mt-8">
          <span className="text-gold/40 text-sm">⚜</span>
        </div>

        <p className="font-cormorant text-muted-foreground/40 text-sm mt-4">
          Avec tout notre amour royal ♥
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
