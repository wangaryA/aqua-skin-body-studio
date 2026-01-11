import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import SkinAnalysis from './components/SkinAnalysis';
import Treatments from './components/Treatments';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Hero scrolled={scrolled} />
      <SkinAnalysis />
      <Treatments />
      <Experience />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
