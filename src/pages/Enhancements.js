import React from 'react';
import { Link } from 'react-router-dom';
import './Enhancements.css';

const enhancements = [
  {
    name: 'Chemical Peels',
    description: 'Professional-grade chemical peels to address a variety of skin concerns including acne, hyperpigmentation, fine lines, and uneven texture.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Light Refresh Peel', price: '$95', desc: 'Gentle exfoliation with minimal downtime' },
      { name: 'Medium Depth Peel', price: '$150', desc: 'Targets deeper concerns with moderate peeling' },
      { name: 'Advanced Corrective Peel', price: '$200', desc: 'Intensive treatment for significant concerns' }
    ]
  },
  {
    name: 'Microneedling',
    description: 'Collagen induction therapy using fine needles to create micro-channels in the skin, triggering the body\'s natural healing response for improved texture and firmness.',
    image: 'https://images.unsplash.com/photo-1598524374825-50c0b0cbb3c0?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Face Microneedling', price: '$250', desc: 'Full face treatment' },
      { name: 'Face & Neck', price: '$325', desc: 'Extended treatment area' },
      { name: 'Microneedling with PRP', price: '$450', desc: 'Enhanced results with platelet-rich plasma' }
    ]
  },
  {
    name: 'LED Light Therapy',
    description: 'Non-invasive treatment using specific wavelengths of light to address various skin concerns. Red light for anti-aging, blue light for acne, and near-infrared for healing.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Single Session', price: '$50', desc: '20-minute treatment' },
      { name: 'Add to Facial', price: '$35', desc: 'Enhance any facial service' },
      { name: 'Package of 6', price: '$250', desc: 'Series for optimal results' }
    ]
  },
  {
    name: 'Microcurrent Therapy',
    description: 'The "non-surgical facelift" - low-level electrical currents stimulate facial muscles and boost cellular activity for a lifted, toned appearance.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Single Session', price: '$125', desc: '45-minute treatment' },
      { name: 'Series of 6', price: '$650', desc: 'Recommended for lasting results' },
      { name: 'Maintenance Session', price: '$100', desc: 'For existing clients' }
    ]
  },
  {
    name: 'Dermaplaning',
    description: 'Manual exfoliation technique that removes dead skin cells and vellus hair (peach fuzz) for smoother skin and better product penetration.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Dermaplaning Only', price: '$75', desc: '30-minute service' },
      { name: 'Add to Facial', price: '$40', desc: 'Enhance any facial treatment' },
      { name: 'Dermaplane + Peel', price: '$150', desc: 'Ultimate exfoliation combo' }
    ]
  },
  {
    name: 'Oxygen Therapy',
    description: 'Infuse pure oxygen and customized serums deep into the skin for instant hydration, plumping, and a radiant glow.',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&h=400&fit=crop',
    treatments: [
      { name: 'Oxygen Facial', price: '$150', desc: '60-minute full treatment' },
      { name: 'Oxygen Infusion Add-On', price: '$45', desc: 'Add to any facial' }
    ]
  }
];

function Enhancements() {
  return (
    <div className="page-wrapper">
      <section className="enhancements-hero">
        <div className="container">
          <h1>Advanced Enhancements</h1>
          <p className="subtitle">Next-Level Treatments for Transformative Results</p>
        </div>
      </section>

      <section className="enhancements-intro">
        <div className="container">
          <p>
            Take your skincare to the next level with our advanced enhancement treatments.
            These specialized services target specific concerns and deliver dramatic,
            visible results. Our expert aestheticians will help you determine which
            enhancements are right for your skin goals.
          </p>
        </div>
      </section>

      <section className="enhancements-grid-section">
        <div className="container">
          {enhancements.map((enhancement, index) => (
            <div key={index} className={`enhancement-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="enhancement-image">
                <img src={enhancement.image} alt={enhancement.name} />
              </div>
              <div className="enhancement-content">
                <h2>{enhancement.name}</h2>
                <p className="enhancement-desc">{enhancement.description}</p>
                <div className="enhancement-treatments">
                  {enhancement.treatments.map((treatment, i) => (
                    <div key={i} className="enhancement-treatment-item">
                      <div className="treatment-info">
                        <span className="treatment-name">{treatment.name}</span>
                        <span className="treatment-desc">{treatment.desc}</span>
                      </div>
                      <span className="treatment-price">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="enhancements-cta">
        <div className="container">
          <h2>Not Sure Which Enhancement is Right for You?</h2>
          <p>
            Schedule a complimentary consultation and our expert aestheticians will
            create a personalized treatment plan tailored to your unique skin concerns and goals.
          </p>
          <Link to="/appointments" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default Enhancements;
