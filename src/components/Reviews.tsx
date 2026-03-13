import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Amine K.",
      text: "Best climbing gym in Tunisia. Incredible atmosphere and routes. The community here is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "Perfect for beginners and pros alike. The staff is super helpful and the coffee is great!",
      rating: 5,
    },
    {
      name: "Youssef T.",
      text: "A world-class facility right here in La Marsa. The route setting is creative and challenging.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-climb-lightgrey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-climb-black mb-4">
              CLIMBER <span className="text-climb-red">STORIES</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-climb-yellow text-climb-yellow" />
                ))}
              </div>
              <span className="text-2xl font-display text-climb-black">4.8 / 5</span>
              <span className="text-climb-black/60 font-medium">from 176 reviews</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-climb-white p-8 rounded-3xl shadow-lg border border-climb-black/5 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-climb-lightgrey opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-climb-yellow text-climb-yellow" />
                ))}
              </div>
              <p className="text-lg text-climb-black/80 font-light italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-climb-blue/10 flex items-center justify-center text-climb-blue font-display text-xl">
                  {review.name.charAt(0)}
                </div>
                <span className="font-medium text-climb-black">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
