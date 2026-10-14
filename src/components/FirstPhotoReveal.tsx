import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { SafePhoto } from './SafePhoto';

interface FirstPhotoRevealProps {
  photoUrl: string;
  captionTitle: string;
  captionSubtitle: string;
  memoryBadge?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const FirstPhotoReveal: React.FC<FirstPhotoRevealProps> = ({
  photoUrl,
  captionTitle,
  captionSubtitle,
  memoryBadge = 'Memory',
  fallbackTitle = 'Photo 1 (Farha)',
  fallbackSubtitle = 'Place your file at /public/photo1.jpg',
}) => {
  return (
    <section className="relative min-h-[90dvh] flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center max-w-xl mx-auto overflow-hidden">
      {/* Soft Background Petals floating in section */}
      <div className="absolute top-10 left-6 text-pink-300/40 pointer-events-none">
        <LotusFlower size={38} variant="soft-pink" className="animate-soft-float" />
      </div>
      <div className="absolute bottom-16 right-6 text-pink-200/50 pointer-events-none">
        <LotusFlower size={42} variant="blush" className="animate-soft-float" />
      </div>

      {/* Cinematic Reveal Container */}
      <motion.div
        initial={{ filter: 'blur(10px)', scale: 0.93, opacity: 0.3 }}
        whileInView={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
        viewport={{ margin: '-10% 0px -10% 0px', once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[86vw] sm:max-w-md my-4 sm:my-6"
      >
        {/* Soft Radiating Glow */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.04, 1],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-rose-200/60 via-pink-300/50 to-pink-200/60 blur-xl pointer-events-none"
        />

        {/* Framing Card */}
        <div className="relative p-2.5 sm:p-3 rounded-3xl bg-white/90 backdrop-blur-xl border border-pink-200/80 shadow-2xl shadow-rose-300/25 overflow-hidden">
          <div className="rounded-2xl overflow-hidden bg-pink-100/50">
            <SafePhoto
              src={photoUrl}
              alt="Farha smiling"
              fallbackTitle={fallbackTitle}
              fallbackSubtitle={fallbackSubtitle}
              aspectRatio="portrait"
              priority={true}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700"
            />
          </div>

          {/* Floating Accent Lotus with RTL support */}
          <div className="absolute top-3.5 ltr:left-3.5 rtl:right-3.5 sm:top-4 sm:ltr:left-4 sm:rtl:right-4 p-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-pink-100">
            <LotusFlower size={20} variant="soft-pink" />
          </div>
          <div className="absolute top-3.5 ltr:right-3.5 rtl:left-3.5 sm:top-4 sm:ltr:right-4 sm:rtl:left-4 flex items-center gap-1 text-pink-500 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium border border-pink-100">
            <Heart size={12} className="fill-pink-400 text-pink-400" />
            <span>{memoryBadge}</span>
          </div>
        </div>
      </motion.div>

      {/* Caption Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-center space-y-2 px-2"
      >
        <h3 className="font-display text-3xl sm:text-4xl text-rose-950 font-normal tracking-tight flex items-center justify-center gap-2">
          <span>{captionTitle}</span>
          <Sparkles size={20} className="text-pink-400" />
        </h3>
        <p className="text-base sm:text-lg text-rose-700/90 font-sans-clean font-light leading-relaxed">
          {captionSubtitle}
        </p>
      </motion.div>
    </section>
  );
};
