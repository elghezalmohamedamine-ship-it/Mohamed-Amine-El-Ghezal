import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Clock, ChevronRight, Globe } from 'lucide-react';
import { cn } from '../utils';
import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.activities, href: '#activities' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.community.title2, href: '#community' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-climb-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-3xl font-display text-climb-white tracking-wider">
          CLIMB<span className="text-climb-red">'IN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-climb-white font-medium text-sm uppercase tracking-widest hover:text-climb-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-climb-yellow transition-all group-hover:w-full" />
            </a>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-climb-white hover:text-climb-yellow transition-colors font-medium text-sm uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {lang.toUpperCase()}
          </button>

          <a
            href="#booking"
            className="bg-climb-red text-climb-white px-6 py-2.5 rounded-sm font-display tracking-wider hover:bg-climb-bordeaux transition-colors transform hover:-translate-y-0.5 duration-200"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-climb-white hover:text-climb-yellow transition-colors font-medium text-sm uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {lang.toUpperCase()}
          </button>
          <button
            className="text-climb-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-climb-black border-t border-climb-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-climb-white font-display text-xl uppercase tracking-wider hover:text-climb-yellow transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-climb-red text-climb-white px-6 py-3 rounded-sm font-display text-xl tracking-wider text-center mt-4"
              >
                {t.nav.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
