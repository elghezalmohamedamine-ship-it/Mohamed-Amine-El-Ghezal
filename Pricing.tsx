import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-climb-black flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-climb-black/60 via-climb-black/40 to-climb-black/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2803&auto=format&fit=crop" 
          alt="Climbing Wall" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-climb-white leading-none mb-6 drop-shadow-2xl">
            CLIMB <span className="text-climb-red">HIGHER</span><br />
            CLIMB <span className="text-climb-yellow">TOGETHER</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl text-climb-lightgrey font-light mb-2">
            The first indoor climbing gym in Tunisia.
          </p>
          <p className="text-lg md:text-xl text-climb-lightgrey/80 font-light">
            A home for climbers, beginners, and adventurers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a 
            href="#experience"
            className="group flex items-center justify-center gap-2 bg-climb-red text-climb-white px-8 py-4 rounded-sm font-display text-xl tracking-wider hover:bg-climb-bordeaux transition-all duration-300"
          >
            START CLIMBING
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#booking"
            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-climb-white text-climb-white px-8 py-4 rounded-sm font-display text-xl tracking-wider hover:bg-climb-white hover:text-climb-black transition-all duration-300"
          >
            BOOK A SESSION
          </a>
        </motion.div>
      </div>

      {/* Floating Holds Decoration */}
      <FloatingHolds />
    </section>
  );
}

function FloatingHolds() {
  const holds = [
    { color: 'bg-climb-red', size: 'w-12 h-16', top: '20%', left: '10%', delay: 0 },
    { color: 'bg-climb-yellow', size: 'w-16 h-12', top: '60%', left: '15%', delay: 1 },
    { color: 'bg-climb-blue', size: 'w-10 h-10', top: '30%', right: '15%', delay: 0.5 },
    { color: 'bg-climb-white', size: 'w-14 h-14', top: '70%', right: '10%', delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden md:block">
      {holds.map((hold, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${hold.color} ${hold.size} opacity-20 blur-[2px]`}
          style={{ top: hold.top, left: hold.left, right: hold.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: hold.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
