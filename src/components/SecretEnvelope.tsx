import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { LotusFlower } from './LotusFlower';
import { ClickHereHint } from './ClickHereHint';

interface SecretEnvelopeProps {
  title: string;
  buttonText: string;
  message: string;
  sealTag?: string;
  footerNote?: string;
  preBuildup?: string;
  language?: 'ar' | 'en';
}

export const SecretEnvelope: React.FC<SecretEnvelopeProps> = ({
  title,
  buttonText,
  message,
  sealTag = 'For Farha',
  footerNote = 'Always here for you',
  preBuildup = 'Okay… I saved this one for last. 👀💗',
  language = 'en',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleOpen = () => {
    if (isOpen || isShaking) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
    }, 700);
  };

  return (
    <section className="relative min-h-[85dvh] py-20 sm:py-24 px-4 max-w-lg mx-auto flex flex-col items-center justify-center text-center">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl sm:text-4xl text-rose-950 font-normal mb-3 tracking-tight"
      >
        {title}
      </motion.h3>

      {/* Pre-buildup text */}
      {!isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-base sm:text-lg text-rose-700/85 font-sans-clean font-light mb-8"
        >
          {preBuildup}
        </motion.p>
      )}

      {/* Interactive Envelope Container */}
      <div className="relative w-full max-w-sm flex flex-col items-center mt-2">
        {!isOpen ? (
          <>
            <motion.div
              role="button"
              tabIndex={0}
              aria-label={buttonText}
              onClick={handleOpen}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen();
                }
              }}
              animate={isShaking ? { rotate: [-2, 2, -2, 2, 0], y: [-2, 2, -1, 1, 0] } : {}}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="touch-manipulation select-none pointer-events-auto [-webkit-tap-highlight-color:transparent] relative w-[270px] xs:w-72 sm:w-80 h-44 sm:h-48 min-w-[270px] min-h-[176px] max-w-[90vw] rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 border border-pink-300/80 shadow-2xl shadow-pink-400/25 flex flex-col items-center justify-center p-5 sm:p-6 overflow-hidden cursor-pointer active:scale-95 transition-transform"
            >
              {/* Flap Triangles Simulation */}
              <div
                className="absolute top-0 inset-x-0 h-24 bg-pink-300/50 border-b border-pink-300/80 pointer-events-none select-none"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              />

              {/* Ribbon & Wax Seal */}
              <div className="relative z-10 flex flex-col items-center pointer-events-none select-none">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 border-2 border-pink-200 flex items-center justify-center shadow-lg shadow-rose-600/30">
                  <LotusFlower size={24} variant="white" />
                </div>
                <p className="font-handwriting text-xl sm:text-2xl text-rose-900 mt-2 font-bold">
                  {sealTag}
                </p>
              </div>

              {/* Corner Lotus */}
              <div className="absolute bottom-2 left-2 opacity-60 pointer-events-none select-none">
                <LotusFlower size={18} variant="soft-pink" />
              </div>
              <div className="absolute bottom-2 right-2 opacity-60 pointer-events-none select-none">
                <LotusFlower size={18} variant="soft-pink" />
              </div>
            </motion.div>

            {/* Tap Hint: Accessible and Tappable with min-h-[44px] touch target */}
            <button
              onClick={handleOpen}
              aria-label={buttonText}
              className="min-h-[44px] px-4 py-2 mt-3 rounded-full glass-pink border border-pink-200/80 text-xs text-pink-600 font-sans-clean flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation pointer-events-auto active:scale-95 select-none [-webkit-tap-highlight-color:transparent] hover:bg-white/60 transition-colors shadow-sm"
            >
              <Sparkles size={13} className="text-pink-400 shrink-0 animate-pulse" />
              <span>Tap the envelope to open 💌</span>
              <Sparkles size={13} className="text-pink-400 shrink-0 animate-pulse" />
            </button>
          </>
        ) : (
          /* Opened Envelope Letter Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full p-5 sm:p-7 rounded-3xl glass-pink-strong border border-pink-300 shadow-2xl shadow-pink-400/25 text-center overflow-hidden touch-manipulation pointer-events-auto"
          >
            {/* Floating Sparkles & Hearts */}
            <div className="absolute -top-1 -right-1 text-pink-400 pointer-events-none select-none">
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1 text-pink-400 pointer-events-none select-none">
              <Heart size={20} className="fill-pink-300 text-pink-400" />
            </div>

            <div className="p-3 mb-3 sm:mb-4 rounded-full bg-pink-100/90 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mx-auto text-pink-500 pointer-events-none select-none">
              <Mail size={22} />
            </div>

            <div className="space-y-3 sm:space-y-4 text-rose-950 font-sans-clean text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal select-text">
              {message}
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-pink-200/60 flex items-center justify-center gap-2 text-pink-500 pointer-events-none select-none">
              <LotusFlower size={20} variant="soft-pink" />
              <span className="text-xs uppercase tracking-widest font-medium">{footerNote}</span>
              <LotusFlower size={20} variant="soft-pink" />
            </div>

            {/* Re-fold Button to close envelope (min-h 44px) */}
            <div className="mt-4 pt-2 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="min-h-[44px] px-5 py-2.5 rounded-full glass-pink border border-pink-200/80 text-xs font-sans-clean text-pink-600 hover:text-pink-700 active:scale-95 touch-manipulation cursor-pointer pointer-events-auto select-none [-webkit-tap-highlight-color:transparent] flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>{language === 'ar' ? 'إغلاق الرسالة 💌' : 'Fold back into envelope 💌'}</span>
              </button>
              <ClickHereHint onClick={() => setIsOpen(false)} language={language} />
            </div>
          </motion.div>
        )}

        {/* Primary Button to Open Envelope (min-h 48px, min-w 48px) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 sm:mt-8 w-full flex flex-col items-center justify-center"
          >
            <button
              onClick={handleOpen}
              disabled={isShaking}
              className="touch-manipulation px-8 py-3.5 sm:px-9 sm:py-4 min-h-[48px] min-w-[48px] rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-base shadow-lg shadow-pink-500/30 border border-pink-300/60 animate-glow-breathe cursor-pointer flex items-center justify-center gap-2 active:scale-95 select-none pointer-events-auto [-webkit-tap-highlight-color:transparent]"
            >
              <span>{buttonText}</span>
              <Heart size={16} className="fill-white" />
            </button>
            <ClickHereHint onClick={handleOpen} language={language} />
          </motion.div>
        )}
      </div>
    </section>
  );
};
