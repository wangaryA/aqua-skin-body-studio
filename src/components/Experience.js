import React from 'react';
import './Experience.css';

function Experience() {
  const differentiators = [
    {
      icon: '✦',
      title: 'Personalized Approach',
      description: 'Every treatment is customized to your unique skin type, concerns, and wellness goals.'
    },
    {
      icon: '✦',
      title: 'Boutique Atmosphere',
      description: 'Intimate, serene setting designed for relaxation and rejuvenation away from the everyday.'
    },
    {
      icon: '✦',
      title: 'Expert Aestheticians',
      description: 'Licensed professionals with advanced training in cutting-edge skincare and wellness techniques.'
    },
    {
      icon: '✦',
      title: 'Premium Products',
      description: 'Medical-grade, cruelty-free products from trusted brands that deliver visible results.'
    }
  ];

  return (
    <section className="experience section section-alt" id="experience">
      <div className="container">
        <div className="experience-content">
          <div className="experience-images">
            <div className="image-main">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=700&fit=crop"
                alt="Serene spa interior"
              />
            </div>
            <div className="image-accent">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
                alt="Spa treatment room"
              />
            </div>
          </div>

          <div className="experience-text">
            <h2>Why Choose Aqua Skin & Body Studio</h2>
            <p className="experience-intro">
              More than just a spa, we're a sanctuary where luxury meets personalized care.
              Every visit is an escape into tranquility and transformation.
            </p>

            <div className="differentiators">
              {differentiators.map((item, index) => (
                <div key={index} className="differentiator">
                  <div className="diff-icon">{item.icon}</div>
                  <div className="diff-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            >
              Experience the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
