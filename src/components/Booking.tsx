import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Users, ChevronRight, User, Mail, Phone } from 'lucide-react';

export function Booking() {
  const [date, setDate] = useState('');
  const [type, setType] = useState('adult');
  const [shoeRental, setShoeRental] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: ''
  });

  // Date constraints
  const getLocalISODate = (d: Date) => {
    const offset = d.getTimezoneOffset() * 60000;
    return new Date(d.getTime() - offset).toISOString().split('T')[0];
  };

  const today = new Date();
  const todayStr = getLocalISODate(today);

  const maxSessionDate = new Date();
  maxSessionDate.setFullYear(today.getFullYear() + 1);
  const maxSessionStr = getLocalISODate(maxSessionDate);

  const minDobDate = new Date();
  minDobDate.setFullYear(today.getFullYear() - 80); // Max 80 years old
  const minDobStr = getLocalISODate(minDobDate);
  
  const maxDobDate = new Date();
  maxDobDate.setFullYear(today.getFullYear() - 3); // Min 3 years old
  const maxDobStr = getLocalISODate(maxDobDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Calculate entry type automatically based on age if dob changes
      if (name === 'dob' && value) {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        // Assuming adult is 18 and older, teen is 14-17, child is under 14
        if (age >= 18) {
          setType('adult');
        } else if (age >= 14) {
          setType('teen');
        } else {
          setType('child');
        }
      }
      
      return newData;
    });
  };

  const getBasePrice = () => {
    return 20; // All categories cost 20 DT
  };

  const shoePrice = 5;
  const totalPrice = getBasePrice() + (shoeRental ? shoePrice : 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      sessionDate: date,
      entryType: type,
      shoeRental: shoeRental ? 'Yes' : 'No',
      totalPrice: totalPrice,
      timestamp: new Date().toISOString(),
    };

    const webhookUrl = import.meta.env.VITE_BOOKING_WEBHOOK_URL || 'https://hook.eu1.make.com/6qzcmx3kdokyk9rq4o1yte92s0gok5oi';

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Simulation si l'URL n'est pas encore configurée
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Booking simulation:", payload);
      }
      setIsSuccess(true);
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-climb-blue relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-climb-white mb-6">
              RÉSERVEZ VOTRE <span className="text-climb-yellow">SESSION</span>
            </h2>
            <p className="text-xl text-climb-white/80 font-light mb-8 leading-relaxed">
              Réservez votre place sur le mur. Que vous soyez un pro chevronné ou un débutant, nous avons une voie pour vous.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-climb-white/90">
                <div className="w-2 h-2 rounded-full bg-climb-yellow" />
                <span>Confirmation instantanée</span>
              </li>
              <li className="flex items-center gap-3 text-climb-white/90">
                <div className="w-2 h-2 rounded-full bg-climb-red" />
                <span>Annulation gratuite jusqu'à 24h avant</span>
              </li>
              <li className="flex items-center gap-3 text-climb-white/90">
                <div className="w-2 h-2 rounded-full bg-climb-white" />
                <span>Location de matériel disponible sur place</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-climb-white p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-climb-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-climb-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display text-climb-black mb-4">Réservation Envoyée !</h3>
                <p className="text-climb-black/60 mb-8">
                  Merci {formData.firstName}. Nous avons bien reçu votre demande de réservation pour le {date}.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', dob: '' });
                    setDate('');
                    setShoeRental(false);
                  }}
                  className="bg-climb-red text-white px-8 py-3 rounded-xl font-medium hover:bg-climb-bordeaux transition-colors"
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Prénom
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Numéro de téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Date de naissance
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="date" 
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      min={minDobStr}
                      max={maxDobStr}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                    Date de la session
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-climb-black/40 w-5 h-5" />
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={todayStr}
                      max={maxSessionStr}
                      className="w-full pl-12 pr-4 py-3 bg-climb-lightgrey rounded-xl border-2 border-transparent focus:border-climb-blue focus:outline-none transition-colors text-climb-black font-medium"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Entry Type */}
              <div>
                <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                  Catégorie (Calculée automatiquement)
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className={`py-3 px-2 rounded-xl border-2 font-medium transition-all text-center text-sm sm:text-base ${
                      type === 'child' 
                        ? 'border-climb-blue bg-climb-blue/5 text-climb-blue' 
                        : 'border-climb-lightgrey bg-climb-lightgrey text-climb-black/40'
                    }`}
                  >
                    Enfant (5-13)
                    <div className="text-xs mt-1 opacity-70">20 DT</div>
                  </div>
                  <div
                    className={`py-3 px-2 rounded-xl border-2 font-medium transition-all text-center text-sm sm:text-base ${
                      type === 'teen' 
                        ? 'border-climb-blue bg-climb-blue/5 text-climb-blue' 
                        : 'border-climb-lightgrey bg-climb-lightgrey text-climb-black/40'
                    }`}
                  >
                    Ado (14-17)
                    <div className="text-xs mt-1 opacity-70">20 DT</div>
                  </div>
                  <div
                    className={`py-3 px-2 rounded-xl border-2 font-medium transition-all text-center text-sm sm:text-base ${
                      type === 'adult' 
                        ? 'border-climb-blue bg-climb-blue/5 text-climb-blue' 
                        : 'border-climb-lightgrey bg-climb-lightgrey text-climb-black/40'
                    }`}
                  >
                    Adulte (18+)
                    <div className="text-xs mt-1 opacity-70">20 DT</div>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div>
                <label className="block text-sm font-display tracking-widest text-climb-black/50 uppercase mb-2">
                  Options supplémentaires
                </label>
                <label className="flex items-center justify-between p-4 rounded-xl border-2 border-climb-lightgrey bg-climb-lightgrey hover:border-climb-black/20 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={shoeRental}
                      onChange={(e) => setShoeRental(e.target.checked)}
                      className="w-5 h-5 rounded text-climb-blue focus:ring-climb-blue border-gray-300"
                    />
                    <span className="font-medium text-climb-black">Location de chaussons</span>
                  </div>
                  <span className="text-climb-black/60 font-medium">+5 DT</span>
                </label>
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-climb-black/10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-climb-black/60 font-medium">Total estimé</span>
                  <span className="text-3xl font-display text-climb-black">{totalPrice} DT</span>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-climb-red text-climb-white py-4 rounded-xl font-display text-xl tracking-wider hover:bg-climb-bordeaux transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'TRAITEMENT...' : 'RÉSERVER MAINTENANT'}
                  {!isSubmitting && <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
