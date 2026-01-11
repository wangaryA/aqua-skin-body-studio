import React from 'react';
import './Treatments.css';

function Treatments() {
  const treatments = [
    {
      name: 'Custom HydraFacial',
      description: 'Deep cleansing, exfoliation, and hydration with personalized serums tailored to your skin\'s unique needs.',
      duration: '60 minutes',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop'
    },
    {
      name: 'Anti-Aging Facial',
      description: 'Collagen-boosting treatment with peptides, retinol, and microcurrent therapy to reduce fine lines and restore firmness.',
      duration: '75 minutes',
      price: '$220',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop'
    },
    {
      name: 'Signature Glow Facial',
      description: 'Luxurious brightening treatment combining enzyme exfoliation, vitamin C, and LED light therapy for radiant skin.',
      duration: '60 minutes',
      price: '$160',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop'
    },
    {
      name: 'Relaxation Body Therapy',
      description: 'Full-body massage with aromatherapy and hot stones to release tension and promote deep relaxation.',
      duration: '90 minutes',
      price: '$200',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop'
    },
    {
      name: 'Deep Tissue Therapy',
      description: 'Therapeutic massage targeting chronic muscle tension and knots with customized pressure and techniques.',
      duration: '60 minutes',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop'
    },
    {
      name: 'Skin Wellness Consultation',
      description: 'Comprehensive skin analysis with personalized treatment plan and home care recommendations.',
      duration: '45 minutes',
      price: '$80',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="treatments section" id="treatments">
      <div className="container">
        <div className="section-header text-center">
          <h2>Signature Treatments</h2>
          <p>Experience transformative treatments designed for your unique beauty journey</p>
        </div>

        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="treatment-image">
                <img src={treatment.image} alt={treatment.name} />
                <div className="treatment-overlay"></div>
              </div>
              <div className="treatment-details">
                <h3>{treatment.name}</h3>
                <p className="treatment-description">{treatment.description}</p>
                <div className="treatment-meta">
                  <span className="duration">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {treatment.duration}
                  </span>
                  <span className="price">{treatment.price}</span>
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Treatments;
