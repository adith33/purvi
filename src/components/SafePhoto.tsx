import React, { useState } from 'react';
import { LotusFlower } from './LotusFlower';
import { Sparkles, Heart } from 'lucide-react';

import photo1 from '../assets/photos/photo1.jpg';
import photo2 from '../assets/photos/photo2.jpg';
import photo3 from '../assets/photos/photo3.jpg';
import landscapeImg from '../assets/photos/landscapeimg.jpg';
import happyBirthdayFarha from '../assets/photos/happy-birthday-farha.png';

const ASSET_MAP: Record<string, string> = {
  '/photo1.jpg': photo1,
  '/photo2.jpg': photo2,
  '/photo3.jpg': photo3,
  '/landscapeimg.jpg': landscapeImg,
  '/happy-birthday-farha.png': happyBirthdayFarha,
};

function resolveAsset(url?: string): string {
  if (!url) return '';
  const clean = url.split('?')[0];
  return ASSET_MAP[clean] || url;
}

interface SafePhotoProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  aspectRatio?: 'portrait' | 'square' | 'wide' | 'auto';
  objectFit?: 'cover' | 'contain';
  fallbackSrc?: string;
  priority?: boolean;
}

export const SafePhoto: React.FC<SafePhotoProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle = 'Place your file in /public',
  aspectRatio = 'portrait',
  objectFit = 'cover',
  fallbackSrc,
  priority = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(() => resolveAsset(src));
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    setCurrentSrc(resolveAsset(src));
    setHasError(false);
  }, [src]);

  const handleError = () => {
    const resolvedFallback = resolveAsset(fallbackSrc);
    if (resolvedFallback && currentSrc !== resolvedFallback) {
      setCurrentSrc(resolvedFallback);
    } else {
      setHasError(true);
    }
  };

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'wide'
      ? 'aspect-[16/9]'
      : '';

  if (hasError || !currentSrc) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-pink-100/90 via-rose-50/80 to-pink-100/90 border border-pink-200/80 shadow-inner overflow-hidden text-center select-none ${aspectClass} ${className}`}
      >
        {/* Soft decorative background circles */}
        <div className="absolute w-40 h-40 rounded-full bg-pink-200/40 blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="p-4 mb-3 rounded-full bg-white/70 shadow-sm border border-pink-200/60 animate-soft-float">
            <LotusFlower size={36} variant="soft-pink" />
          </div>
          <p className="font-display text-rose-900 font-medium text-lg mb-1">{fallbackTitle}</p>
          <p className="text-xs text-rose-500/80 max-w-[200px] leading-tight font-sans-clean">
            {fallbackSubtitle}
          </p>
          <div className="flex items-center gap-1 mt-3 text-pink-400">
            <Heart size={14} className="fill-pink-300" />
            <Sparkles size={14} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
      className={`max-w-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${className}`}
    />
  );
};
