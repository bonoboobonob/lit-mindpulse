import React, { useState, useEffect } from 'react';
import { Volume2, Square } from 'lucide-react';
import { speechEngine } from '../../utils/speech';
import { sounds } from '../../utils/sound';

export default function AudioSpeakButton({
  text,
  label = 'Dinle',
  activeLabel = 'Durdur',
  className = '',
  size = 'md', // 'xs' | 'sm' | 'md' | 'lg' | 'hero'
  variant = 'pill', // 'pill' | 'icon' | 'minimal' | 'hero'
  rate = 0.88,
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    setIsSpeaking(speechEngine.isSpeakingText(text));

    const unsubscribe = speechEngine.subscribe(() => {
      setIsSpeaking(speechEngine.isSpeakingText(text));
    });

    return () => {
      unsubscribe();
    };
  }, [text]);

  const handleToggle = (e) => {
    e.stopPropagation();
    sounds.triggerHaptic('light');

    if (isSpeaking) {
      speechEngine.stop();
    } else {
      speechEngine.speak(text, { rate });
    }
  };

  if (!speechEngine.isSupported()) {
    return null;
  }

  // Size styling
  const sizeClasses = {
    xs: 'px-2 py-0.5 text-[11px] gap-1',
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3.5 py-1.5 text-xs sm:text-sm gap-2',
    lg: 'px-5 py-2.5 text-sm sm:text-base gap-2.5',
    hero: 'px-4 py-2 text-xs sm:text-sm gap-2',
  };

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    hero: 'w-4 h-4',
  };

  // Equalizer wave animation bars
  const WaveBars = () => (
    <div className="flex items-center gap-0.5 h-3.5 px-0.5">
      <span className="w-0.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
      <span className="w-0.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s] h-2" />
      <span className="w-0.5 bg-current rounded-full animate-bounce h-3.5" />
      <span className="w-0.5 bg-current rounded-full animate-bounce [animation-delay:-0.2s] h-2.5" />
    </div>
  );

  // Variant: Icon Only
  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        title={isSpeaking ? 'Seslendirmeyi durdur' : 'Pasajı sesli dinle'}
        className={`p-1.5 sm:p-2 rounded-xl transition cursor-pointer flex items-center justify-center ${
          isSpeaking
            ? 'bg-[#C85A32] text-white shadow-sm shadow-[#C85A32]/30 scale-105'
            : 'bg-white/80 dark:bg-[#1E1B18]/80 hover:bg-[#FAF6EE] dark:hover:bg-[#282420] text-[#57534E] dark:text-[#A8A196] hover:text-[#B44A22] dark:hover:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B]'
        } ${className}`}
      >
        {isSpeaking ? (
          <Square className={`${iconSizes[size]} fill-current`} />
        ) : (
          <Volume2 className={iconSizes[size]} />
        )}
      </button>
    );
  }

  // Variant: Minimalist
  if (variant === 'minimal') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center font-semibold transition cursor-pointer ${
          isSpeaking
            ? 'text-[#C85A32] dark:text-[#E07048]'
            : 'text-[#57534E] dark:text-[#A8A196] hover:text-[#B44A22] dark:hover:text-[#E07048]'
        } ${sizeClasses[size]} ${className}`}
      >
        {isSpeaking ? (
          <>
            <WaveBars />
            <span>{activeLabel}</span>
          </>
        ) : (
          <>
            <Volume2 className={iconSizes[size]} />
            <span>{label}</span>
          </>
        )}
      </button>
    );
  }

  // Variant: Pill (Default)
  return (
    <button
      type="button"
      onClick={handleToggle}
      title={isSpeaking ? 'Seslendirmeyi durdur' : 'Cümleyi sesli dinle'}
      className={`inline-flex items-center font-bold rounded-xl transition cursor-pointer shadow-2xs select-none ${sizeClasses[size]} ${
        isSpeaking
          ? 'bg-[#C85A32] text-white border border-[#B44A22] shadow-sm shadow-[#C85A32]/30 animate-pulse'
          : 'bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F0EAE1] dark:hover:bg-[#2D2823] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60'
      } ${className}`}
    >
      {isSpeaking ? (
        <>
          <WaveBars />
          <span>{activeLabel}</span>
          <Square className="w-2.5 h-2.5 fill-current opacity-70 ml-0.5" />
        </>
      ) : (
        <>
          <Volume2 className={`${iconSizes[size]} shrink-0`} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
