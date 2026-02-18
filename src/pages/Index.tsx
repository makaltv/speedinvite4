import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import HeroSection from "@/components/HeroSection";
import StoryTimeline from "@/components/StoryTimeline";
import CeremonySection from "@/components/CeremonySection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";
import GoldenParticles from "@/components/GoldenParticles";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="bg-background min-h-screen">
          <GoldenParticles />
          <HeroSection />
          <StoryTimeline />
          <CeremonySection />
          <GallerySection />
          <RSVPSection />
          <FooterSection />
        </div>
      )}
    </>
  );
};

export default Index;
