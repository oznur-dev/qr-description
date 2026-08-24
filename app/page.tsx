'use client';

import { useState } from 'react';
import tr from './data/tr.json';
import en from './data/en.json';
import ru from './data/ru.json';

type Language = 'tr' | 'en' | 'ru' | null;

const content: Record<NonNullable<Language>, string> = { tr, en, ru };
const backButtonLabel: Record<NonNullable<Language>, string> = { tr: 'Geri', en: 'Back', ru: 'Назад' };

export default function Home() {
  const [selectedLang, setSelectedLang] = useState<Language>(null);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang);
  };

  if (selectedLang) {
    return (
      <div className="min-h-screen bg-zinc-100 px-6 py-10">
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
          <button
            onClick={() => setSelectedLang(null)}
            className="self-start text-sm font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            ← {backButtonLabel[selectedLang]}
          </button>
          <div className="bg-white rounded-xl shadow-lg p-6 whitespace-pre-line leading-relaxed text-zinc-800">
            {content[selectedLang]}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 px-6">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => handleLanguageSelect('tr')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-rose-500 hover:to-pink-600 active:from-rose-600 active:to-pink-700 transition-all shadow-lg"
        >
          🇹🇷 Türkçe
        </button>
        <button
          onClick={() => handleLanguageSelect('en')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl hover:from-blue-500 hover:to-indigo-600 active:from-blue-600 active:to-indigo-700 transition-all shadow-lg"
        >
          🇬🇧 English
        </button>
        <button
          onClick={() => handleLanguageSelect('ru')}
          className="w-full py-5 text-xl font-medium text-white bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl hover:from-sky-500 hover:to-blue-600 active:from-sky-600 active:to-blue-700 transition-all shadow-lg"
        >
          🇷🇺 Русский
        </button>
      </div>
    </div>
  );
}
