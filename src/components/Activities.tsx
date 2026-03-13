import React from 'react';
import { motion } from 'motion/react';
import { Mountain, Users, Map } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      title: "Indoor Bouldering",
      description: "Artificial climbing walls designed for all skill levels. Challenge yourself with constantly updated routes.",
      icon: <Mountain className="w-12 h-12 text-climb-blue" />,
      color: "bg-climb-blue/10",
      borderColor: "border-climb-blue/20",
      hoverBorder: "hover:border-climb-blue",
    },
    {
      title: "Kids Climbing Classes",
      description: "Classes for ages 5–14. Build confidence, strength, and problem-solving skills in a safe environment.",
      schedule: ["Wednesday", "Saturday", "Sunday"],
      icon: <Users className="w-12 h-12 text-climb-yellow" />,
      color: "bg-climb-yellow/10",
      borderColor: "border-climb-yellow/20",
      hoverBorder: "hover:border-climb-yellow",
    },
    {
      title: "Outdoor Climbing Trips",
      description: "Guided trips to natural climbing sites across Tunisia. Experience real rock with our expert instructors.",
      icon: <Map className="w-12 h-12 text-climb-red" />,
      color: "bg-climb-red/10",
      borderColor: "border-climb-red/20",
      hoverBorder: "hover:border-climb-red",
    }
  ];

  return (
    <section id="activities" className="py-24 bg-climb-lightgrey relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-climb-black mb-4"
          >
            OUR <span className="text-climb-red">ACTIVITIES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-climb-black/60 font-light"
          >
            More than just a gym. A complete climbing experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-climb-white p-8 rounded-2xl shadow-lg border-2 ${activity.borderColor} ${activity.hoverBorder} transition-all duration-300 group`}
            >
              <div className={`w-20 h-20 rounded-2xl ${activity.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {activity.icon}
              </div>
              <h3 className="text-3xl text-climb-black mb-4">{activity.title}</h3>
              <p className="text-climb-black/70 font-light leading-relaxed mb-6">
                {activity.description}
              </p>
              
              {activity.schedule && (
                <div className="mt-auto">
                  <h4 className="text-sm font-display tracking-widest text-climb-black/50 mb-3 uppercase">Schedule</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.schedule.map(day => (
                      <span key={day} className="px-3 py-1 bg-climb-lightgrey text-climb-black text-sm rounded-full font-medium">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
