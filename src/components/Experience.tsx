import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-climb-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl text-climb-black mb-6">
              WHAT IS <span className="text-climb-blue">BOULDERING?</span>
            </h2>
            <p className="text-xl text-climb-black/70 font-light mb-8 leading-relaxed">
              Bouldering is climbing stripped down to its raw essentials. No ropes, no harnesses. Just you, the wall, and a thick safety mat below.
            </p>
            <p className="text-lg text-climb-black/60 font-light mb-8 leading-relaxed">
              It's about problem-solving, strength, and technique. Our walls feature routes (problems) designed for all skill levels, from absolute beginners to seasoned pros.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-climb-red" />
              <span className="text-climb-bordeaux font-display tracking-widest uppercase">Safe, Fun, Challenging</span>
            </div>
          </motion.div>

          {/* Interactive Wall Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-climb-lightgrey rounded-3xl overflow-hidden shadow-2xl border border-climb-black/5"
          >
            {/* Wall Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
            
            {/* Safety Mat */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-climb-blue/20 border-t-4 border-climb-blue flex items-center justify-center">
              <span className="text-climb-blue font-display tracking-widest opacity-50">SAFETY MAT</span>
            </div>

            {/* Interactive Holds */}
            <InteractiveHolds />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InteractiveHolds() {
  const holds = [
    { id: 1, color: 'bg-climb-red', top: '20%', left: '30%', size: 'w-16 h-20', rotate: 'rotate-12' },
    { id: 2, color: 'bg-climb-yellow', top: '40%', left: '50%', size: 'w-20 h-16', rotate: '-rotate-6' },
    { id: 3, color: 'bg-climb-blue', top: '60%', left: '20%', size: 'w-14 h-14', rotate: 'rotate-45' },
    { id: 4, color: 'bg-climb-black', top: '30%', left: '70%', size: 'w-12 h-16', rotate: '-rotate-12' },
    { id: 5, color: 'bg-climb-bordeaux', top: '70%', left: '60%', size: 'w-16 h-16', rotate: 'rotate-90' },
  ];

  return (
    <>
      {holds.map((hold) => (
        <motion.div
          key={hold.id}
          whileHover={{ scale: 1.1, rotate: 0 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            'absolute rounded-2xl cursor-pointer shadow-lg transition-colors duration-300',
            hold.color, hold.size, hold.rotate,
            'hover:brightness-110 hover:shadow-xl'
          )}
          style={{ top: hold.top, left: hold.left }}
        >
          {/* Hold texture detail */}
          <div className="absolute inset-2 rounded-xl bg-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/20" />
        </motion.div>
      ))}
    </>
  );
}
