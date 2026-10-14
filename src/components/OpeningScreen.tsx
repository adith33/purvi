import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { BloomingLotusBackground } from './BloomingLotusBackground';
import { ClickHereHint } from './ClickHereHint';

interface OpeningScreenProps {
  onOpen: () => void;
  greeting: string;
  subheading: string;
  ctaText: string;
  badge?: string;
  language?: 'ar' | 'en';
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({
  onOpen,
  greeting,
  subheading,
  ctaText,
  badge = 'A Birthday Surprise for Farha',
  language = 'en',
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    // Smooth cinematic delay allowing the expanding light & petals animation
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 min-h-[100dvh] w-full z-50 flex flex-col items-center justify-center p-5 sm:p-6 text-center overflow-hidden touch-manipulation"
        style={{
          background: 'radial-gradient(ellipse at center, #FFF0F5 0%, #FCE7F3 50%, #FBCFE8 100%)',
        }}
      >
        {/* Soft Ambient Light Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-96 h-96 rounded-full bg-pink-300/40 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-rose-200/50 blur-3xl pointer-events-none"
        />

        {/* 🌸 Pink Lotus Blooming Animation (Positioned around 55-60vh, behind all intro content) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 pointer-events-none select-none z-0 overflow-visible flex items-center justify-center"
          style={{
            top: 'clamp(54vh, 58vh, 60vh)',
            transform: 'translate(-50%, -50%)',
            width: 'min(92vw, clamp(280px, 46vw, 540px))',
            height: 'min(50vh, clamp(210px, 36vh, 410px))',
          }}
        >
          <BloomingLotusBackground />
        </div>

        {/* Expanding Ring on click */}
        {isOpening && (
          <motion.div
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 30, opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute z-30 w-32 h-32 rounded-full bg-white blur-xl pointer-events-none"
          />
        )}

        {/* Lotus Icon Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 relative z-10"
        >
          <div className="p-4 rounded-full bg-white/60 backdrop-blur-md shadow-md shadow-pink-300/30 border border-white/80">
            <LotusFlower size={44} variant="soft-pink" className="animate-soft-float" />
          </div>
          <div className="absolute -top-1 -right-1 text-pink-400">
            <Sparkles size={16} className="animate-pulse" />
          </div>
        </motion.div>

        {/* Greeting Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl text-rose-950 font-normal tracking-tight mb-4"
        >
          {greeting}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          className="relative z-10 text-lg sm:text-xl text-rose-700/80 font-light max-w-xs sm:max-w-md mx-auto mb-10 leading-relaxed font-sans-clean"
        >
          {subheading}
        </motion.p>

        {/* The Breathing Glow Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 2.0, ease: 'easeOut' }}
          className="relative z-20"
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleClick}
            disabled={isOpening}
            className="touch-manipulation select-none relative group px-8 py-4 min-h-[48px] rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-medium text-base sm:text-lg shadow-xl shadow-pink-500/30 border border-pink-300/60 overflow-hidden transition-all duration-300 animate-glow-breathe cursor-pointer active:brightness-95"
          >
            {/* Shimmer Highlight */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="flex items-center justify-center gap-2.5">
              <span>{ctaText}</span>
              <Heart size={18} className="fill-white/80 text-white animate-pulse" />
            </div>
          </motion.button>

          {/* Click here prompt with up arrow pointing up to the button */}
          <div className="flex justify-center">
            <ClickHereHint onClick={handleClick} language={language} delay={2.4} />
          </div>
        </motion.div>

        {/* Bottom subtle note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="absolute bottom-8 z-10 text-xs text-rose-500/70 tracking-widest uppercase font-sans-clean"
        >
          {badge}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
