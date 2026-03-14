import React from 'react';
import { motion } from 'motion/react';
import { Instagram as InstagramIcon, Facebook } from 'lucide-react';

export function Instagram() {
  const posts = [
    `${import.meta.env.BASE_URL}images/photo5.webp`,
    `${import.meta.env.BASE_URL}images/photo6.webp`,
    `${import.meta.env.BASE_URL}images/photo7.webp`,
    `${import.meta.env.BASE_URL}images/photo8.webp`,
    `${import.meta.env.BASE_URL}images/photo9.webp`,
    `${import.meta.env.BASE_URL}images/photo10.webp`,
  ];

  return (
    <section className="py-24 bg-climb-lightgrey relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-climb-black mb-4"
          >
            JOIN THE <span className="text-climb-blue">COMMUNITY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-climb-black/60 font-light mb-8"
          >
            Follow us for the latest routes, events, and climbing tips.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href="https://www.instagram.com/climb.in/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-4 rounded-xl font-display tracking-wider hover:opacity-90 transition-opacity">
              <InstagramIcon className="w-6 h-6" />
              FOLLOW ON INSTAGRAM
            </a>
            <a href="https://www.facebook.com/ClimbInTunisia/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-xl font-display tracking-wider hover:bg-[#1877F2]/90 transition-colors">
              <Facebook className="w-6 h-6" />
              FOLLOW ON FACEBOOK
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden relative group block"
            >
              <img src={post} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
