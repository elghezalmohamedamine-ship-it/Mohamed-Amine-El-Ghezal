import React from 'react';
import { motion } from 'motion/react';

export function Community() {
  const images = [
    'images/photo1.webp', // The Wall
    'images/photo2.webp', // The Café
    'images/photo3.webp', // Community Events
    'images/photo4.webp', // Kids/Community
  ];

  return (
    <section id="community" className="py-24 bg-climb-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl text-climb-black mb-6">
              THE <span className="text-climb-blue">COMMUNITY</span> HUB
            </h2>
            <p className="text-xl text-climb-black/70 font-light leading-relaxed">
              Climb'IN is more than a gym. It's a place to hang out, grab a coffee, meet fellow climbers, and plan your next outdoor adventure.
            </p>
          </motion.div>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <img src={images[0]} alt="Climber" className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl overflow-hidden relative group"
          >
            <img src={images[1]} alt="Cafe" className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl overflow-hidden relative group"
          >
            <img src={images[2]} alt="Social" className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 rounded-3xl overflow-hidden relative group h-[300px]"
          >
            <img src={images[3]} alt="Community" className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
