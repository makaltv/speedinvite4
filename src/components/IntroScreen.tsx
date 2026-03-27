import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introVideo from "@/assets/intro-video.mp4";

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"video" | "text1" | "text2" | "button">("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force autoplay on mobile
    const tryPlay = () => {
      video.play().catch(() => {
        // If autoplay fails, skip to button phase immediately
        setPhase("button");
      });
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }
  }, []);

  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime > 1 && phase === "video") setPhase("text1");
    if (video.currentTime > 2.5) setPhase("text2");
    if (video.currentTime > 3.8) setPhase("button");
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-castle-dark overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        onTimeUpdate={handleVideoTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ pointerEvents: 'none', WebkitAppearance: 'none' }}
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-castle-dark/70 via-transparent to-castle-dark/90" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl mb-8"
        >
          👑
        </motion.div>

        <AnimatePresence>
          {(phase === "text1" || phase === "text2" || phase === "button") && (
            <motion.p
              key="text1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-cinzel text-xl md:text-2xl text-gold-light mb-4 italic"
            >
              Dans le royaume de l'amour…
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(phase === "text2" || phase === "button") && (
            <motion.p
              key="text2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-cinzel text-lg md:text-xl text-foreground mb-12"
            >
              Une union royale sera célébrée.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "button" && (
            <motion.button
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onClick={onEnter}
              className="font-cinzel-regular text-sm md:text-base tracking-[0.3em] uppercase px-10 py-4 border-gold-ornate bg-castle-dark/80 text-gold-light hover:bg-gold/10 transition-all duration-500 animate-pulse-glow"
            >
              ⚜ Entrer dans le Royaume ⚜
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
