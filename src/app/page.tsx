'use client';

import { useState } from 'react';

type Language = 'tr' | 'en' | 'ru' | null;

export default function Home() {
  const [selectedLang, setSelectedLang] = useState<Language>(null);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang);
  };

  if (selectedLang) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black p-4">
        <video 
          className="w-full h-auto max-h-screen"
          src={`/assets/video-${selectedLang}.mp4`}
          controls
          autoPlay
          playsInline
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 px-6">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => handleLanguageSelect('tr')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-rose-500 hover:to-pink-600 active:from-rose-600 active:to-pink-700 transition-all duration-200 shadow-md"
        >
          🇹🇷 Türkçe
        </button>
        <button
          onClick={() => handleLanguageSelect('en')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl hover:from-blue-500 hover:to-indigo-600 active:from-blue-600 active:to-indigo-700 transition-all duration-200 shadow-md"
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => handleLanguageSelect('ru')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl hover:from-sky-500 hover:to-blue-600 active:from-sky-600 active:to-blue-700 transition-all duration-200 shadow-md"
        >
          🇷🇺 Русский
        </button>
      </div>
    </div>
  );
}
