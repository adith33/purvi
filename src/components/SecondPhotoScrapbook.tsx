import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Pin } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { SafePhoto } from './SafePhoto';

interface SecondPhotoScrapbookProps {
  photoUrl: string;
  title: string;
  subtitle: string;
  scrapbookTag?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const SecondPhotoScrapbook: React.FC<SecondPhotoScrapbookProps> = ({
  photoUrl,
  title,
  subtitle,
  scrapbookTag = 'A little moment worth keeping forever',
  fallbackTitle = 'Photo 2 (Scrapbook)',
  fallbackSubtitle = 'Place your file at /public/photo2.jpg',
}) => {
  return (
    <section className="relative min-h-[90dvh] py-16 sm:py-20 px-4 flex flex-col items-center justify-center max-w-lg mx-auto overflow-hidden">
      {/* Decorative Lotus Floaters */}
      <div className="absolute top-12 right-6 pointer-events-none opacity-40">
        <LotusFlower size={36} variant="blush" className="animate-soft-float" />
      </div>
      <div className="absolute bottom-12 left-6 pointer-events-none opacity-50">
        <LotusFlower size={30} variant="gold" className="animate-soft-float" />
      </div>

      {/* Scrapbook Container */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -1 }}
        viewport={{ margin: '-10% 0px -10% 0px', once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[86vw] sm:max-w-md my-4 mobile-touch-pop"
      >
        {/* Soft shadow underneath polaroid */}
        <div className="absolute -inset-2 rounded-[28px] bg-rose-950/10 blur-xl transform rotate-1" />

        {/* Polaroid Card with warm paper feel */}
        <div className="relative bg-[#FFFDF9] border border-[#F5E6D3] rounded-[24px] p-4 sm:p-5 shadow-2xl overflow-hidden">
          {/* Subtle Paper Texture & Washi Tape Header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-pink-200/60 backdrop-blur-sm -rotate-1 rounded-sm border-t border-b border-pink-300/40 shadow-sm" />

          {/* Decorative Pin / Stamp with RTL support */}
          <div className="absolute top-2 ltr:right-4 rtl:left-4 text-pink-400 opacity-80">
            <Pin size={18} className="transform rotate-45 fill-pink-300" />
          </div>

          {/* Photo Frame Container */}
          <div className="mt-4 rounded-xl overflow-hidden bg-rose-50 border border-pink-100 shadow-inner">
            <div className="w-full">
              <SafePhoto
                src={photoUrl}
                alt="Farha special moment"
                fallbackTitle={fallbackTitle}
                fallbackSubtitle={fallbackSubtitle}
                aspectRatio="portrait"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Handwritten Polaroid Caption */}
          <div className="pt-5 pb-2 text-center select-text">
            <p className="font-handwriting text-2xl sm:text-3xl text-rose-900 font-bold tracking-wide">
              Farha ✨
            </p>
            <p className="font-script text-lg text-rose-600/80 -mt-1">
              {scrapbookTag}
            </p>
          </div>

          {/* Mini Lotus Corner Accents with RTL support */}
          <div className="absolute bottom-3 ltr:left-4 rtl:right-4 opacity-70">
            <LotusFlower size={20} variant="soft-pink" />
          </div>
          <div className="absolute bottom-3 ltr:right-4 rtl:left-4 text-pink-400 opacity-80">
            <Sparkles size={16} />
          </div>
        </div>
      </motion.div>

      {/* Story Text */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25 }}
        className="mt-8 text-center space-y-2 px-2"
      >
        <h3 className="font-display text-3xl sm:text-4xl text-rose-950 font-normal tracking-tight">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-rose-700/85 font-sans-clean font-light">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
};
