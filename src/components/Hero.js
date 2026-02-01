import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBanner from '../assets/hero-banner.png';

function Hero() {
  return (
    <div className="hero-wrapper">
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
                <Link to="/appointments" className="btn btn-primary">
                  Book Your Escape
                </Link>
                <Link to="/treatments" className="btn btn-secondary">
                  Discover Treatments
                </Link>
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
