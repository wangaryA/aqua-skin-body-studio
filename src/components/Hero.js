import React, { useState } from 'react';
import './Hero.css';
import heroBanner from '../assets/hero-banner.png';

function Hero({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="hero-wrapper">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="logo">
            <h2>Aqua Skin & Body Studio</h2>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#treatments" onClick={(e) => { e.preventDefault(); scrollToSection('treatments'); }}>Services</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>About</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a></li>
            <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Contact</a></li>
            <li>
              <button
                className="btn btn-primary btn-nav"
                onClick={() => scrollToSection('booking')}
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="hero-overlay"></div>

        <div className="trust-indicators">
          <div className="container">
            <div className="hero-text">
              <h1 className="fade-in-up">Your Personal Sanctuary for Radiant Skin</h1>
              <p className="hero-subtitle fade-in-up">
                Boutique sanctuary dedicated to luxurious facials, restorative body therapy, and personalized skin wellness
              </p>
              <div className="hero-ctas fade-in-up">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('booking')}
                >
                  Book Your Escape
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('treatments')}
                >
                  Discover Treatments
                </button>
              </div>
            </div>

            <div className="indicators-row">
              <div className="indicator">
                <div className="indicator-icon">✦</div>
                <p>5+ Years of Excellence</p>
              </div>
              <div className="indicator">
                <div className="indicator-icon">✦</div>
                <p>Certified Aestheticians</p>
              </div>
              <div className="indicator">
                <div className="indicator-icon">✦</div>
                <p>Personalized Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
