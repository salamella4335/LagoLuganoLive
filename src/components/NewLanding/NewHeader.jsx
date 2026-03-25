import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

function LangDropdown({ anchorRef, onSelect, languages, onClose }) {
  const [rect, setRect] = useState(null);

  useEffect(() => {
    if (anchorRef.current) {
      setRect(anchorRef.current.getBoundingClientRect());
    }
  }, [anchorRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (anchorRef.current && !anchorRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorRef, onClose]);

  if (!rect) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
        zIndex: 99999,
      }}
      className="w-36 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl overflow-hidden py-1"
    >
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => onSelect(l)}
          className="block w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          {l.label}
        </button>
      ))}
    </div>,
    document.body
  );
}

export default function NewHeader() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const { language, setLanguage } = useLanguage();

  const [langOpen, setLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langBtnRef = useRef(null);
  const location = useLocation();
  const isMapPage = location.pathname === '/map';

  const languages = [
    { label: 'English', code: 'en' },
    { label: 'Italiano', code: 'it' },
    { label: 'Deutsch', code: 'de' },
    { label: 'Français', code: 'fr' },
    { label: 'Rumantsch', code: 'ra' },
  ];
  const displayCode = (code) => code.toUpperCase().slice(0, 2);

  return (
    <header
      className={`sticky z-50 w-full transition-all duration-500 flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}
    >
      <div
        className={`w-full flex items-center justify-between transition-all duration-500 ${isScrolled
          ? 'max-w-4xl bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl rounded-full border border-slate-200/50 dark:border-slate-700/50 px-6 py-3'
          : 'max-w-full bg-white/70 dark:bg-background-dark/70 backdrop-blur-lg shadow-sm rounded-none border border-transparent border-b-slate-200 dark:border-b-slate-800 px-4 lg:px-20 py-3'
          }`}
      >
        <div className="flex items-center gap-2">
          <Link to="/">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Lago<span className="text-primary">Lugano</span>Live
            </h2>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8" />
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDark ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          <div className="relative">
            <button
              ref={langBtnRef}
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 px-3 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
              <span className="text-xs font-bold">{displayCode(language)}</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>

            {langOpen && (
              <LangDropdown
                anchorRef={langBtnRef}
                languages={languages}
                onSelect={(l) => { setLanguage(l.code); setLangOpen(false); }}
                onClose={() => setLangOpen(false)}
              />
            )}
          </div>

          {isMapPage ? (
            <Link to="/" className="hidden sm:flex items-center justify-center !rounded-full h-10 !bg-slate-100 dark:!bg-slate-800 !px-6 text-slate-900 dark:!text-white text-sm !font-bold hover:!bg-slate-200 dark:hover:!bg-slate-700 active:scale-95 transition-all gap-1">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Home
            </Link>
          ) : (
            <Link to="/map" className="hidden sm:flex items-center justify-center !rounded-full h-10 !bg-primary !px-6 !text-white text-sm !font-bold hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all">
              Open Map
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
