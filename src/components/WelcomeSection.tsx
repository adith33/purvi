import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { SafePhoto } from './SafePhoto';

interface WelcomeSectionProps {
  photoUrl: string;
  title: string;
  intro: string;
  instruction: string;
  badge?: string;
  scrollHint?: string;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  photoUrl,
  title,
  intro,
  instruction,
  badge = 'A Best Friend’s Surprise',
  scrollHint = 'Keep scrolling',
}) => {
  return (
    <section className="relative min-h-[90dvh] flex flex-col items-center justify-center px-4 sm:px-5 py-16 sm:py-20 text-center max-w-lg mx-auto">
      {/* Soft Lotus Crest */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="mb-4 flex items-center justify-center gap-2"
      >
        <LotusFlower size={26} variant="soft-pink" />
        <span className="text-xs uppercase tracking-widest text-pink-500/80 font-medium font-sans-clean">
          {badge}
        </span>
        <LotusFlower size={26} variant="soft-pink" />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-display text-4xl sm:text-5xl text-rose-950 font-normal mb-8 tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Photo 1 Subtle Glowing Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="relative w-56 sm:w-64 mb-8"
      >
        {/* Glowing Aura Ring */}
        <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-pink-300/40 via-rose-200/50 to-pink-400/40 blur-lg opacity-80" />

        {/* Outer Frame with Lotus Accents */}
        <div className="relative p-2.5 rounded-3xl bg-white/85 backdrop-blur-md border border-pink-200/80 shadow-xl shadow-pink-300/20 overflow-hidden">
          <div className="rounded-2xl overflow-hidden shadow-inner bg-pink-50">
            <SafePhoto
              src={photoUrl}
              alt="Farha"
              fallbackTitle="Farha's Photo"
              fallbackSubtitle="Replace photo1.jpg in /public"
              aspectRatio="portrait"
              priority={true}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Delicate Lotus Flowers on Frame Corners */}
          <div className="absolute -top-1 -right-1">
            <LotusFlower size={24} variant="soft-pink" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <LotusFlower size={22} variant="blush" />
          </div>
        </div>

        {/* Tiny Floating Sparkle */}
        <div className="absolute -bottom-3 -right-2 text-pink-400">
          <Sparkles size={18} className="animate-pulse" />
        </div>
      </motion.div>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="text-lg sm:text-xl text-rose-900 font-normal mb-3 font-sans-clean leading-relaxed"
      >
        {intro}
      </motion.p>

      {/* Playful Instruction */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-sm sm:text-base text-rose-600/80 font-light mb-12 font-sans-clean italic"
      >
        “{instruction}”
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="flex flex-col items-center text-pink-400 gap-1 text-xs font-medium tracking-wide uppercase font-sans-clean"
      >
        <span className="flex items-center gap-1">
          {scrollHint}
          <LotusFlower size={14} variant="soft-pink" />
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
