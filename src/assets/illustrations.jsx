import React from 'react';

// Classical Oak Tree Woodcut Engraving
export const OakTreeIllustration = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sunrays */}
    <circle cx="50" cy="50" r="38" stroke="#DCCEB8" strokeDasharray="1.5 3" strokeWidth="0.8" className="dark:stroke-[#443D35]"/>
    {/* Foliage Hatching */}
    <path d="M50 18C36 18 26 28 26 42C26 50 31 57 37 60C36 68 42 76 50 76C58 76 64 68 63 60C69 57 74 50 74 42C74 28 64 18 50 18Z" fill="#8C5E3C" fillOpacity="0.15" stroke="#C85A32" strokeWidth="1.5"/>
    {/* Texture Rings inside foliage */}
    <path d="M50 24C40 24 32 32 32 42C32 47 35 52 40 55" stroke="#B89B7A" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-[#8C8479]"/>
    <path d="M50 28C44 28 38 34 38 42" stroke="#B89B7A" strokeWidth="1" strokeDasharray="1.5 1.5" className="dark:stroke-[#8C8479]"/>
    <path d="M50 24C60 24 68 32 68 42C68 47 65 52 60 55" stroke="#B89B7A" strokeWidth="1" strokeDasharray="2 2" className="dark:stroke-[#8C8479]"/>
    {/* Tree Trunk & Roots */}
    <path d="M46 58L45 82L38 86M54 58L55 82L62 86M48 64L50 82M52 64L51 82" stroke="#8C5E3C" strokeWidth="1.8" strokeLinecap="round" className="dark:stroke-[#D4AF37]"/>
    {/* Ground hatching */}
    <line x1="30" y1="86" x2="70" y2="86" stroke="#8C5E3C" strokeWidth="1.2" className="dark:stroke-[#A8A196]"/>
    <line x1="34" y1="89" x2="66" y2="89" stroke="#B89B7A" strokeWidth="0.8" className="dark:stroke-[#665F55]"/>
  </svg>
);

// Classical Author Silhouette Portrait
export const AuthorPortraitIllustration = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="40" cy="40" r="36" fill="#C85A32" fillOpacity="0.1" stroke="#C85A32" strokeWidth="1.5" strokeDasharray="4 2"/>
    {/* Bust Silhouette */}
    <path d="M40 18C34 18 30 23 30 29C30 35 34 39 37 40C30 43 24 50 24 60H56C56 50 50 43 43 40C46 39 50 35 50 29C50 23 46 18 40 18Z" fill="#C85A32" opacity="0.85"/>
    <circle cx="40" cy="28" r="7" fill="#FDFBF7" className="dark:fill-[#1C1917]"/>
    {/* Laurel Wreath base */}
    <path d="M26 64C30 67 36 68 40 68C44 68 50 67 54 64" stroke="#8C5E3C" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#D4AF37]"/>
  </svg>
);

// Antique Open Book with Ribbon Bookmark
export const OpenBookIllustration = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Open pages */}
    <path d="M20 32C32 28 46 30 50 36C54 30 68 28 80 32V72C68 68 54 70 50 76C46 70 32 68 20 72V32Z" fill="#FFFFFF" fillOpacity="0.9" stroke="#8C5E3C" strokeWidth="1.8" className="dark:fill-[#24201C] dark:stroke-[#D6CEBE]"/>
    {/* Spine line */}
    <line x1="50" y1="36" x2="50" y2="76" stroke="#C85A32" strokeWidth="2"/>
    {/* Page Text Lines */}
    <line x1="26" y1="42" x2="44" y2="42" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="26" y1="48" x2="44" y2="48" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="26" y1="54" x2="40" y2="54" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="26" y1="60" x2="42" y2="60" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    
    <line x1="56" y1="42" x2="74" y2="42" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="56" y1="48" x2="74" y2="48" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="56" y1="54" x2="70" y2="54" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    <line x1="56" y1="60" x2="72" y2="60" stroke="#A8A29E" strokeWidth="1.2" strokeLinecap="round" className="dark:stroke-[#665F55]"/>
    {/* Terracotta Ribbon */}
    <path d="M50 36V84L54 80L58 84V56" fill="#C85A32" stroke="#9A3412" strokeWidth="1"/>
  </svg>
);

// Woodcut Lighthouse / Wisdom Beacon
export const LighthouseIllustration = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Light rays */}
    <path d="M40 25L15 15M40 25L65 15M40 25L10 30M40 25L70 30" stroke="#DDA15E" strokeWidth="1" strokeDasharray="2 2"/>
    {/* Tower */}
    <polygon points="36,26 44,26 47,68 33,68" fill="#8C5E3C" fillOpacity="0.15" stroke="#C85A32" strokeWidth="1.5"/>
    {/* Stripes */}
    <line x1="35" y1="38" x2="45" y2="38" stroke="#C85A32" strokeWidth="2.5"/>
    <line x1="34" y1="52" x2="46" y2="52" stroke="#C85A32" strokeWidth="2.5"/>
    {/* Dome & Light */}
    <rect x="37" y="20" width="6" height="6" fill="#DDA15E" stroke="#1C1917" strokeWidth="1" className="dark:stroke-[#D6CEBE]"/>
    <path d="M36 20C36 17 40 15 40 15C40 15 44 17 44 20Z" fill="#1C1917" className="dark:fill-[#D6CEBE]"/>
    {/* Ground rocks */}
    <path d="M22 68C26 66 32 67 40 67C48 67 54 66 58 68V72H22V68Z" fill="#8C5E3C"/>
  </svg>
);

// Terracotta Bookmark Ribbon Tag
export const BookmarkRibbon = ({ className = "w-6 h-8 text-[#C85A32]" }) => (
  <svg viewBox="0 0 24 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 0H24V32L12 24L0 32V0Z"/>
  </svg>
);
