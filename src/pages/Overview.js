import React from 'react';
import './Overview.css';

function Overview() {
  return (
    <div className="page-wrapper">
      <section className="overview-hero">
        <div className="container">
          <h1>About Aqua Skin & Body Studio</h1>
          <p className="subtitle">Your Journey to Radiant Skin Begins Here</p>
        </div>
      </section>

      <section className="overview-content">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-image">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop"
                alt="Spa professional"
              />
            </div>
            <div className="overview-text">
              <h2>Welcome to Aqua</h2>
              <p>
                At Aqua Skin & Body Studio, we believe that everyone deserves to feel
                confident and beautiful in their own skin. Our boutique spa experience
                combines advanced skincare techniques with a serene, welcoming atmosphere
                to help you achieve your skin goals.
              </p>
              <p>
                With years of experience in the aesthetics industry, our team is dedicated
                to providing personalized treatments tailored to your unique skin needs.
                We stay current with the latest innovations in skincare technology while
                maintaining a commitment to safe, effective treatments.
              </p>
              <p>
                Our philosophy is simple: healthy skin is beautiful skin. We take a
                holistic approach to skincare, considering factors like lifestyle, diet,
                and environmental exposure to create comprehensive treatment plans that
                deliver lasting results.
              </p>

              <div className="credentials">
                <h3>Our Expertise</h3>
                <ul>
                  <li>Licensed Aesthetician</li>
                  <li>Advanced Facial Treatments</li>
                  <li>Chemical Peel Specialist</li>
                  <li>Microneedling Certified</li>
                  <li>LED Light Therapy</li>
                  <li>Medical-Grade Skincare Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">✨</div>
              <h3>Personalized Care</h3>
              <p>Every treatment is customized to your specific skin type, concerns, and goals.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">🌿</div>
              <h3>Quality Products</h3>
              <p>We use only professional-grade, results-driven skincare products from trusted brands.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">💆</div>
              <h3>Relaxing Environment</h3>
              <p>Our tranquil spa setting allows you to unwind while receiving expert skincare treatments.</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">📚</div>
              <h3>Education First</h3>
              <p>We empower you with knowledge about your skin and how to maintain results at home.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
