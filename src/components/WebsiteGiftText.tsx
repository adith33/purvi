import React from 'react';
import { motion } from 'motion/react';
import { LotusFlower } from './LotusFlower';

interface WebsiteGiftTextProps {
  message?: string;
  subtext?: string;
  forFarhaTag?: string;
}

export const WebsiteGiftText: React.FC<WebsiteGiftTextProps> = ({
  message = 'Consider this website as a gift 🌸',
  subtext = 'No wrapped boxes or ribbons—just memories, genuine words, and a little piece of Effort created especially for you....',
  forFarhaTag = 'For Farha',
}) => {
  return (
    <section className="relative py-16 sm:py-20 px-4 max-w-lg mx-auto flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full p-6 sm:p-10 rounded-3xl glass-pink-strong border border-pink-200/80 shadow-xl shadow-rose-950/5 flex flex-col items-center space-y-4 mobile-touch-pop select-text"
      >
        <LotusFlower size={28} variant="soft-pink" />

        <h3 className="font-display text-2xl sm:text-3xl text-rose-950 font-normal tracking-tight">
          {message}
        </h3>

        {subtext && (
          <p className="font-sans-clean text-base sm:text-lg text-rose-900/85 leading-relaxed font-light max-w-sm">
            {subtext}
          </p>
        )}

        <div className="pt-2 flex items-center gap-2 text-pink-400">
          <div className="w-8 h-[1px] bg-pink-200" />
          <span className="text-xs uppercase tracking-widest text-pink-500/80 font-sans-clean">
            {forFarhaTag}
          </span>
          <div className="w-8 h-[1px] bg-pink-200" />
        </div>
      </motion.div>
    </section>
  );
};
