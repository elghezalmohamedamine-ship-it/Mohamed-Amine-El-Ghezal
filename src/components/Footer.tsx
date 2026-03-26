import React from 'react';
import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-climb-black pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-climb-blue/5 skew-x-12 transform origin-top-left pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="text-4xl font-display text-climb-white tracking-wider block">
              CLIMB<span className="text-climb-red">'IN</span>
            </a>
            <p className="text-climb-white/60 font-light leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/climb.in/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-climb-white/10 flex items-center justify-center text-climb-white hover:bg-climb-red hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/ClimbInTunisia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-climb-white/10 flex items-center justify-center text-climb-white hover:bg-climb-blue hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display text-climb-white tracking-wider mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              <li><a href="#experience" className="text-climb-white/60 hover:text-climb-yellow transition-colors font-light">{t.footer.experience}</a></li>
              <li><a href="#activities" className="text-climb-white/60 hover:text-climb-yellow transition-colors font-light">{t.footer.activities}</a></li>
              <li><a href="#pricing" className="text-climb-white/60 hover:text-climb-yellow transition-colors font-light">{t.footer.pricing}</a></li>
              <li><a href="#community" className="text-climb-white/60 hover:text-climb-yellow transition-colors font-light">{t.footer.community}</a></li>
              <li><a href="#booking" className="text-climb-white/60 hover:text-climb-yellow transition-colors font-light">{t.footer.bookSession}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-display text-climb-white tracking-wider mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-climb-red shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/mJuUHFGt86t4ZDn97" target="_blank" rel="noopener noreferrer" className="text-climb-white/60 font-light hover:text-climb-white transition-colors">
                  Rue Jaber Ibn Hayan, Bhar Lazreg, La Marsa 2046, Tunisia
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-climb-blue shrink-0" />
                <span className="text-climb-white/60 font-light">31 210 201 - 23 727 427</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-climb-yellow shrink-0" />
                <span className="text-climb-white/60 font-light">hello@climbin.tn</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-display text-climb-white tracking-wider mb-6">{t.footer.hours}</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-climb-white/10 pb-2">
                <span className="text-climb-white/60 font-light">{t.footer.days.tuesday}</span>
                <span className="text-climb-white font-medium">16h00 - 22h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-climb-white/10 pb-2">
                <span className="text-climb-white/60 font-light">{t.footer.days.wednesday}</span>
                <span className="text-climb-white font-medium">14h00 - 22h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-climb-white/10 pb-2">
                <span className="text-climb-white/60 font-light">{t.footer.days.thursdayFriday}</span>
                <span className="text-climb-white font-medium">16h00 - 22h00</span>
              </li>
              <li className="flex justify-between items-center border-b border-climb-white/10 pb-2">
                <span className="text-climb-white/60 font-light">{t.footer.days.saturdaySunday}</span>
                <span className="text-climb-white font-medium">14h00 - 20h00</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="text-climb-white/60 font-light">{t.footer.days.monday}</span>
                <span className="text-climb-white font-medium text-climb-red">{t.footer.closed}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-climb-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-climb-white/40 font-light text-sm">
            © {new Date().getFullYear()} Climb'IN. {t.footer.rights}
          </p>
          <p className="text-climb-white font-display text-2xl tracking-widest uppercase opacity-20">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
