import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface IntroLoaderProps {
  steps?: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    skip: string;
  };
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const onCompleteRef = React.useRef(onComplete);
  onCompleteRef.current = onComplete;

  const stepTexts = [
    steps?.step1 || 'Preparing something very special for Farha… 🎀',
    steps?.step2 || 'Adding a little extra pink… 🌸',
    steps?.step3 || 'Sprinkling a little birthday magic… ✨',
    steps?.step4 || 'Connecting India, Kerala to Egypt, Alexandria… 🇮🇳 ➔ 🇪🇬',
    steps?.step5 || 'Everything is ready for you, Farha! 🌷',
  ];

  useEffect(() => {
    // Step progression timer
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < stepTexts.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onCompleteRef.current();
          }, 1100);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [stepTexts.length]);

  const progressPercent = Math.min(100, Math.round(((currentStep + 1) / stepTexts.length) * 100));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 min-h-[100dvh] z-50 flex flex-col items-center justify-center px-5 sm:px-6 bg-gradient-to-b from-[#FFF5F7] via-[#FFEBF2] to-[#FFF0F5] text-center overflow-hidden"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-pink-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />

      {/* Floating Center Icon */}
      <div className="relative mb-8">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10 w-24 h-24 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl shadow-pink-300/40 border border-pink-200 flex items-center justify-center p-4"
        >
          <LotusFlower size={56} variant="soft-pink" />
        </motion.div>

        {/* Ambient Ring */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-pink-400/40 via-rose-300/40 to-pink-300/40 blur-md pointer-events-none"
        />
      </div>

      {/* Sequential Message Text */}
      <div
        dir={steps?.skip === 'تخطي' ? 'rtl' : 'ltr'}
        className="h-20 flex items-center justify-center max-w-sm px-2 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={`${currentStep}-${steps?.skip}`}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.5 }}
            className={`text-2xl sm:text-3xl text-rose-950 font-normal tracking-tight leading-snug ${
              steps?.skip === 'تخطي' ? 'font-sans-ar' : 'font-display'
            }`}
          >
            {stepTexts[currentStep]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Pink Shimmer Progress Bar */}
      <div className="w-64 max-w-xs mt-6 mb-3">
        <div className="h-2 w-full bg-pink-100 rounded-full overflow-hidden border border-pink-200/60 p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 rounded-full"
            initial={{ width: '15%' }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between items-center text-xs text-rose-400 font-sans-clean mt-2 px-1">
          <span className="flex items-center gap-1 font-medium">
            <Sparkles size={12} className="text-pink-400" />
            <span>{steps?.skip === 'تخطي' ? 'سحر عيد ميلاد فرحة 🌸' : "Farha's Birthday Magic"}</span>
          </span>
          <span className="font-semibold">{progressPercent}%</span>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="mt-6 text-xs text-rose-400/80 hover:text-rose-600 transition-colors uppercase tracking-widest font-sans-clean py-1.5 px-3 rounded-full hover:bg-white/60 cursor-pointer touch-manipulation active:scale-95"
      >
        {steps?.skip || 'Skip'} ➔
      </button>

      {/* Soft floating decorative sparkles */}
      <div className="absolute top-1/4 left-8 text-pink-300 pointer-events-none opacity-60">
        <Heart size={16} className="fill-pink-200" />
      </div>
      <div className="absolute bottom-1/4 right-8 text-pink-300 pointer-events-none opacity-60">
        <Sparkles size={18} />
      </div>
    </motion.div>
  );
};
