import React, { useState } from 'react';
import { Settings, Image as ImageIcon, Music, Video, X, Check, Upload, HelpCircle } from 'lucide-react';
import { LotusFlower } from './LotusFlower';

interface AssetCustomizerModalProps {
  currentPhoto1: string;
  currentPhoto2: string;
  currentPhoto3?: string;
  currentLandscapeImage?: string;
  currentBirthdayImage: string;
  currentSong: string;
  currentSong2?: string;
  currentIntroVideo?: string;
  onUpdateAssets: (newAssets: {
    photo1Url?: string;
    photo2Url?: string;
    photo3Url?: string;
    landscapeImgUrl?: string;
    birthdayImageUrl?: string;
    songUrl?: string;
    song2Url?: string;
    introVideoUrl?: string;
  }) => void;
}

export const AssetCustomizerModal: React.FC<AssetCustomizerModalProps> = ({
  currentPhoto1,
  currentPhoto2,
  currentPhoto3,
  currentLandscapeImage,
  currentBirthdayImage,
  currentSong,
  currentSong2,
  currentIntroVideo,
  onUpdateAssets,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);

  React.useEffect(() => {
    // Check if URL specifies developer mode
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('dev') === 'true' || window.location.hash === '#dev') {
      setIsDevMode(true);
    }

    // Keyboard shortcut Shift + D to toggle dev mode
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        setIsDevMode((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'photo1' | 'photo2' | 'photo3' | 'landscapeImage' | 'birthdayImage' | 'song' | 'song2' | 'introVideo'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    if (type === 'photo1') onUpdateAssets({ photo1Url: fileUrl });
    if (type === 'photo2') onUpdateAssets({ photo2Url: fileUrl });
    if (type === 'photo3') onUpdateAssets({ photo3Url: fileUrl });
    if (type === 'landscapeImage') onUpdateAssets({ landscapeImgUrl: fileUrl, birthdayImageUrl: fileUrl });
    if (type === 'birthdayImage') onUpdateAssets({ birthdayImageUrl: fileUrl });
    if (type === 'song') onUpdateAssets({ songUrl: fileUrl });
    if (type === 'song2') onUpdateAssets({ song2Url: fileUrl });
    if (type === 'introVideo') onUpdateAssets({ introVideoUrl: fileUrl });
  };

  return (
    <>
      {/* Developer Trigger Button - hidden by default unless ?dev=true or Shift+D */}
      {isDevMode && (
        <div className="fixed bottom-4 left-4 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-rose-900 border border-pink-300 shadow-md backdrop-blur-md text-xs font-medium transition-all hover:scale-105 cursor-pointer"
            title="Adith's Asset Setup (Dev Only)"
          >
            <LotusFlower size={14} variant="soft-pink" />
            <span>Asset Setup (Dev)</span>
          </button>
        </div>
      )}

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-[#FFFDFB] border border-pink-200 p-6 shadow-2xl space-y-5 text-rose-950 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-pink-100">
              <div className="flex items-center gap-2">
                <LotusFlower size={20} variant="soft-pink" />
                <h4 className="font-display text-lg font-bold text-rose-950">
                  Easy Asset Setup Guide
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-rose-400 hover:text-rose-700 hover:bg-pink-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="text-xs text-rose-800/80 space-y-2 leading-relaxed bg-pink-50/70 p-3.5 rounded-xl border border-pink-200/60">
              <p className="font-semibold text-rose-950 flex items-center gap-1">
                <HelpCircle size={14} className="text-pink-500" />
                How to add your real files:
              </p>
              <p>
                1. <strong>Direct File Mode (Permanent):</strong> Drop your files directly into the project's <code className="bg-white px-1.5 py-0.5 rounded border border-pink-200 text-pink-700">public/</code> folder with these exact names:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 font-mono text-[11px] text-rose-900">
                <li>/public/intro-video.mp4</li>
                <li>/public/photo1.jpg</li>
                <li>/public/photo2.jpg</li>
                <li>/public/photo3.jpg</li>
                <li>/public/happy-birthday-farha.png</li>
                <li>/public/landscapeimg.jpg</li>
                <li>/public/farha-song.mp3 (Farha’s Song)</li>
              </ul>
              <p>
                2. <strong>Live Preview Tester (Instant):</strong> You can also choose files below to test them right here in the live preview window without waiting!
              </p>
            </div>

            {/* Instant File Pickers */}
            <div className="space-y-3 pt-1">
              {/* Intro Video */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">20s Vertical Intro Video</p>
                  <p className="text-[11px] text-rose-500">Target: /intro-video.mp4</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Video size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleFileUpload(e, 'introVideo')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Photo 1 */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Farha Photo 1</p>
                  <p className="text-[11px] text-rose-500">Target: /photo1.jpg</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Upload size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'photo1')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Photo 2 */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Farha Photo 2 (Scrapbook)</p>
                  <p className="text-[11px] text-rose-500">Target: /photo2.jpg</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Upload size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'photo2')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Photo 3 */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Farha Photo 3 (Lotus Grace)</p>
                  <p className="text-[11px] text-rose-500">Target: /photo3.jpg</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Upload size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'photo3')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Landscape Image */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Landscape Image / Banner</p>
                  <p className="text-[11px] text-rose-500">Target: /landscapeimg.jpg</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Upload size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'landscapeImage')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Birthday Image */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Happy Birthday Image</p>
                  <p className="text-[11px] text-rose-500">Target: /happy-birthday-farha.png</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Upload size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'birthdayImage')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Farha Song - Primary / Default */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Farha Song (Primary / Default)</p>
                  <p className="text-[11px] text-rose-500">Target: /baby-doll-song.mp3</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Music size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleFileUpload(e, 'song')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Farha Song 2 - Secondary Option */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-pink-200 bg-white/90">
                <div>
                  <p className="text-xs font-semibold text-rose-950">Farha Song 2 (Secondary Option)</p>
                  <p className="text-[11px] text-rose-500">Target: /farha-song.mp3</p>
                </div>
                <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-medium border border-pink-200 flex items-center gap-1">
                  <Music size={13} />
                  <span>Choose</span>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => handleFileUpload(e, 'song2')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-xl bg-pink-600 text-white font-medium text-xs hover:bg-pink-700 transition-colors shadow-sm"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
