/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Activities } from './components/Activities';
import { Pricing } from './components/Pricing';
import { Community } from './components/Community';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Location } from './components/Location';
import { Instagram } from './components/Instagram';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-climb-white min-h-screen font-body text-climb-black selection:bg-climb-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Activities />
        <Pricing />
        <Community />
        <Reviews />
        <Booking />
        <Location />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}

