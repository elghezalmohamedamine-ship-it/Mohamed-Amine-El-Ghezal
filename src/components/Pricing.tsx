import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      title: "Adult Entry",
      price: "15",
      period: "DT",
      features: ["Unlimited time", "Access to all bouldering areas", "Free chalk", "Locker access"],
      highlight: true,
      color: "bg-climb-red",
      textColor: "text-climb-white",
      buttonColor: "bg-climb-white text-climb-red hover:bg-climb-lightgrey",
    },
    {
      title: "Kids Entry",
      price: "12",
      period: "DT",
      features: ["Unlimited time", "Access to kids area", "Supervised environment", "Locker access"],
      highlight: false,
      color: "bg-climb-yellow",
      textColor: "text-climb-black",
      buttonColor: "bg-climb-blue text-climb-white hover:bg-climb-blue/90",
    },
    {
      title: "Shoe Rental",
      price: "3",
      period: "DT",
      features: ["High-quality climbing shoes", "All sizes available", "Sanitized after each use"],
      highlight: false,
      color: "bg-climb-white",
      textColor: "text-climb-black",
      buttonColor: "bg-climb-black text-climb-white hover:bg-climb-black/80",
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-climb-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-climb-bordeaux/10 skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-climb-white mb-4"
          >
            SIMPLE <span className="text-climb-yellow">PRICING</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-climb-white/60 font-light"
          >
            No time limit. Climb as long as you want.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl shadow-2xl ${plan.color} ${plan.textColor} ${plan.highlight ? 'md:-translate-y-4 md:scale-105 border-4 border-climb-red/20 relative' : 'border border-climb-white/10'}`}
            >
              <h3 className="text-3xl font-display mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-display">{plan.price}</span>
                <span className={`text-xl font-bold ${plan.highlight ? 'text-climb-white/80' : 'text-climb-black/50'}`}>{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-climb-yellow' : 'text-climb-blue'}`} />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#booking"
                className={`w-full py-4 rounded-xl font-display tracking-wider text-lg transition-colors duration-300 flex justify-center items-center ${plan.buttonColor}`}
              >
                GET STARTED
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
