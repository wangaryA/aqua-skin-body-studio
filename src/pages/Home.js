import React from 'react';
import Hero from '../components/Hero';
import SkinAnalysis from '../components/SkinAnalysis';
import Treatments from '../components/Treatments';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';

function Home() {
  return (
    <>
      <Hero />
      <SkinAnalysis />
      <Treatments />
      <Experience />
      <Testimonials />
      <Booking />
    </>
  );
}

export default Home;
