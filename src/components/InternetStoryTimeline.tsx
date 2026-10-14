import React from 'react';
import { motion } from 'motion/react';
import { Globe, MessageSquare, Coffee, Plane, Sparkles, Heart, Cake } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface Step {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

interface InternetStoryTimelineProps {
  badge: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case 'globe':
      return <Globe size={18} className="text-pink-500" />;
    case 'message':
      return <MessageSquare size={18} className="text-pink-500" />;
    case 'coffee':
      return <Coffee size={18} className="text-pink-500" />;
    case 'plane':
      return <Plane size={18} className="text-pink-500" />;
    case 'sparkles':
      return <Sparkles size={18} className="text-pink-500" />;
    case 'heart':
      return <Heart size={18} className="fill-pink-500 text-pink-500" />;
    case 'cake':
      return <Cake size={18} className="text-pink-500" />;
    default:
      return <Heart size={18} className="text-pink-500" />;
  }
};

export const InternetStoryTimeline: React.FC<InternetStoryTimelineProps> = ({
  badge,
  title,
  subtitle,
  steps,
}) => {
  return (
    <section className="relative min-h-[85dvh] py-20 sm:py-24 px-4 max-w-lg mx-auto flex flex-col items-center">
      {/* Background soft ambient bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-96 bg-gradient-to-b from-pink-300/20 via-rose-200/20 to-transparent blur-3xl pointer-events-none" />

      {/* Lotus Badge Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-3"
      >
        <LotusFlower size={22} variant="blush" />
        <span className="text-xs uppercase tracking-widest text-pink-500 font-medium font-sans-clean">
          {badge}
        </span>
        <LotusFlower size={22} variant="blush" />
      </motion.div>

      {/* Main Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl text-rose-950 font-normal text-center mb-3 tracking-tight leading-snug"
      >
        {title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base text-rose-700/80 font-sans-clean text-center max-w-sm mb-12 sm:mb-14 font-light"
      >
        {subtitle}
      </motion.p>

      {/* Vertical Glowing Timeline */}
      <div className="relative w-full">
        {/* Central glowing vertical track with RTL logical positioning */}
        <div className="absolute top-3 bottom-8 ltr:left-5 rtl:right-5 sm:ltr:left-7 sm:rtl:right-7 w-0.5 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-400/30 rounded-full pointer-events-none" />

        {/* Steps List */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: '-30px', once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-start gap-3.5 sm:gap-6 ltr:pl-1 rtl:pr-1"
              >
                {/* Glowing Node on Timeline */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isLast
                        ? 'bg-gradient-to-br from-pink-500 to-rose-500 border-pink-200 text-white shadow-lg shadow-pink-500/40'
                        : 'bg-white/90 backdrop-blur-md border-pink-200 shadow-md shadow-pink-200/30'
                    }`}
                  >
                    {isLast ? <Cake size={18} className="text-white" /> : getStepIcon(step.icon)}
                  </div>

                  {/* Pulsing ring around node */}
                  {isLast && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-1 rounded-full bg-pink-400 blur-sm pointer-events-none"
                    />
                  )}
                </div>

                {/* Timeline Card Content with Touch Pop */}
                <div
                  className={`flex-1 p-4 sm:p-5 rounded-2xl transition-all duration-300 mobile-touch-pop touch-manipulation select-text ${
                    isLast
                      ? 'glass-pink-strong border-pink-300 shadow-xl shadow-pink-400/20'
                      : 'glass-pink border-pink-200/70 shadow-sm hover:shadow-md'
                  }`}
                >
                  <h4
                    className={`text-base sm:text-lg md:text-xl font-display tracking-tight mb-1 ${
                      isLast ? 'text-rose-950 font-medium' : 'text-rose-900 font-normal'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-rose-700/85 font-sans-clean font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
