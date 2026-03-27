import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import introVideo from "@/assets/intro-video.mp4";

interface IntroScreenProps {
  onEnter: () => void;
}

const INTRO_DURATION_MS = 5200;

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [phase, setPhase] = useState<"video" | "text1" | "text2">("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const fallbackTimer = window.setTimeout(onEnter, INTRO_DURATION_MS);

    if (!video) {
      return () => window.clearTimeout(fallbackTimer);
    }

    const tryPlay = () => {
      video.play().catch(() => {
        window.setTimeout(onEnter, 1800);
      });
    };

    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [onEnter]);

  const handleVideoTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime > 1 && phase === "video") setPhase("text1");
    if (video.currentTime > 2.5) setPhase("text2");
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-castle-dark overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleVideoTimeUpdate}
        onEnded={onEnter}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        style={{ pointerEvents: "none", WebkitAppearance: "none" }}
      >
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-castle-dark/70 via-transparent to-castle-dark/90" />

      <div className="relative z-10 flex max-w-lg flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8 text-5xl"
        >
          👑
        </motion.div>

        <AnimatePresence>
          {(phase === "text1" || phase === "text2") && (
            <motion.p
              key="text1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-4 font-cinzel text-xl italic text-gold-light md:text-2xl"
            >
              Dans le royaume de l&apos;amour…
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === "text2" && (
            <motion.p
              key="text2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-cinzel text-lg text-foreground md:text-xl"
            >
              Une union royale sera célébrée.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
