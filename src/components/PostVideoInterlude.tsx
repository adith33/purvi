import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { ClickHereHint } from './ClickHereHint';

interface PostVideoInterludeProps {
  language: 'ar' | 'en';
  onProceed: () => void;
}

export const PostVideoInterlude: React.FC<PostVideoInterludeProps> = ({
  language,
  onProceed,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isRtl = language === 'ar';

  const handleEnter = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      onProceed();
    }, 900);
  };

  // Auto-transition after 4.2 seconds pause
  useEffect(() => {
    const timer = setTimeout(() => {
      handleEnter();
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  const interludeBadge = isRtl ? '✨ بداية الرحلة ✨' : '✨ The Journey Begins ✨';
  const interludeTitle = isRtl ? 'ودلوقتي… مفاجأتك الحقيقية بتبدأ 🌸' : 'And now… your real surprise begins 🌸';
  const interludeSubtitle = isRtl
    ? 'عارف إني ممكن في يوم أخسر الصداقة الجميلة دي… عشان كدة عملتلك المكان ده عشان يفضل ذكرى حلوة لينا دايماً 💗'
    : 'I know that I might lose this wonderful friendship one day… so I made this for a wonderful memory 💗';
  const interludeButton = isRtl ? 'ادخلي على موقعك 🌸' : 'Enter Your Website 🌸';

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="post-video-interlude"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(16px)', scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleEnter}
          className="fixed inset-0 min-h-[100dvh] w-full z-40 flex flex-col items-center justify-center px-6 text-center bg-[#24131E] text-white overflow-hidden select-none touch-manipulation cursor-pointer"
        >
          {/* Dreamy Warm Rose Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-rose-950/40 to-[#1A0C16] pointer-events-none" />
          <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none animate-pulse" />

          {/* Floating Lotus Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 p-4 rounded-full bg-pink-500/15 border border-pink-400/30 backdrop-blur-md shadow-xl shadow-pink-950/50"
          >
            <LotusFlower size={48} variant="soft-pink" className="animate-soft-float" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-200 text-xs font-medium tracking-wide mb-5"
          >
            <Sparkles size={13} className="text-pink-300" />
            <span>{interludeBadge}</span>
            <Sparkles size={13} className="text-pink-300" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className={`text-2xl sm:text-3xl md:text-4xl text-pink-50 font-normal tracking-tight mb-4 max-w-md ${
              isRtl ? 'font-sans-ar' : 'font-display'
            }`}
          >
            {interludeTitle}
          </motion.h2>

          {/* Heartfelt Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className={`text-sm sm:text-base text-pink-200/90 font-light leading-relaxed max-w-sm mb-10 ${
              isRtl ? 'font-sans-ar' : 'font-sans-clean'
            }`}
          >
            {interludeSubtitle}
          </motion.p>

          {/* Enter Button / Tap to Proceed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-3 pointer-events-auto"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEnter();
              }}
              className="touch-manipulation min-h-[48px] px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white font-medium text-sm sm:text-base shadow-xl shadow-pink-500/30 border border-pink-300/40 animate-glow-breathe flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all select-none"
            >
              <Heart size={16} className="fill-white" />
              <span>{interludeButton}</span>
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
            <ClickHereHint onClick={handleEnter} language={language} darkBg={true} />
            <p className="text-[11px] text-pink-300/60 font-light tracking-wide">
              {isRtl ? 'جاري الانتقال تلقائياً… ✨' : 'Transitioning automatically… ✨'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
