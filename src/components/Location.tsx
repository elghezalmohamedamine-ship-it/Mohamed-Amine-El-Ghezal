import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-climb-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-climb-black/5"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Climb'IN,%20Rue%20Jaber%20Ibn%20Hayan,%20La%20Marsa,%20Tunisia&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Climb'IN Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl text-climb-black mb-12">
              FIND <span className="text-climb-red">US</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-climb-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-climb-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display tracking-wider mb-2 text-climb-black">ADDRESS</h3>
                  <p className="text-climb-black/70 font-light leading-relaxed">
                    Climb'IN<br />
                    Rue Jaber Ibn Hayan<br />
                    Bhar Lazreg<br />
                    La Marsa 2046<br />
                    Tunisia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-climb-yellow/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-climb-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-display tracking-wider mb-2 text-climb-black">PHONE</h3>
                  <p className="text-climb-black/70 font-light text-lg">
                    +216 23 727 427
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-climb-red/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-climb-red" />
                </div>
                <div>
                  <h3 className="text-xl font-display tracking-wider mb-2 text-climb-black">OPENING HOURS</h3>
                  <p className="text-climb-black/70 font-light text-lg">
                    Opens at 14:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
