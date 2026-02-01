import React from 'react';
import { Link } from 'react-router-dom';
import './TreatmentsPage.css';

const treatments = [
  {
    category: 'Signature Facials',
    items: [
      {
        name: 'Aqua Signature Facial',
        duration: '75 min',
        price: '$150',
        description: 'Our most comprehensive facial experience. Includes deep cleansing, exfoliation, extractions, customized mask, and relaxing massage. Tailored to your specific skin concerns for optimal results.'
      },
      {
        name: 'Custom HydraFacial',
        duration: '60 min',
        price: '$175',
        description: 'Advanced hydradermabrasion treatment that cleanses, extracts, and hydrates. Includes LED therapy and customized serums for your skin type.'
      },
      {
        name: 'Express Glow Facial',
        duration: '30 min',
        price: '$75',
        description: 'Perfect for busy schedules. Quick yet effective treatment includes cleansing, exfoliation, and hydrating mask for an instant glow.'
      },
      {
        name: 'Gentleman\'s Facial',
        duration: '60 min',
        price: '$125',
        description: 'Designed specifically for men\'s skin. Deep cleansing, exfoliation, and hydration with attention to razor burn and ingrown hairs.'
      }
    ]
  },
  {
    category: 'Anti-Aging Treatments',
    items: [
      {
        name: 'Age-Defying Facial',
        duration: '75 min',
        price: '$175',
        description: 'Targeted treatment for fine lines, wrinkles, and loss of firmness. Includes peptide-rich serums, microcurrent therapy, and collagen-boosting mask.'
      },
      {
        name: 'Collagen Induction Therapy',
        duration: '60 min',
        price: '$250',
        description: 'Microneedling treatment to stimulate natural collagen production. Reduces fine lines, acne scars, and improves overall skin texture.'
      },
      {
        name: 'Firming & Lifting Facial',
        duration: '60 min',
        price: '$165',
        description: 'Non-invasive lifting treatment using advanced technology to tighten and firm sagging skin on face and neck.'
      }
    ]
  },
  {
    category: 'Corrective Treatments',
    items: [
      {
        name: 'Acne Clarifying Facial',
        duration: '60 min',
        price: '$135',
        description: 'Deep cleansing treatment for acne-prone skin. Includes extractions, high-frequency therapy, and calming anti-bacterial mask.'
      },
      {
        name: 'Brightening Treatment',
        duration: '60 min',
        price: '$145',
        description: 'Target hyperpigmentation and uneven skin tone with vitamin C, kojic acid, and gentle chemical exfoliation.'
      },
      {
        name: 'Sensitive Skin Facial',
        duration: '60 min',
        price: '$125',
        description: 'Gentle treatment for rosacea, reactive, or sensitized skin. Focuses on calming inflammation and strengthening the skin barrier.'
      }
    ]
  },
  {
    category: 'Body Treatments',
    items: [
      {
        name: 'Back Facial',
        duration: '45 min',
        price: '$95',
        description: 'Extend your skincare routine to hard-to-reach areas. Includes cleansing, exfoliation, extractions, and hydrating mask for the back.'
      },
      {
        name: 'Body Exfoliation & Wrap',
        duration: '60 min',
        price: '$125',
        description: 'Full body treatment with sea salt scrub and nourishing body wrap. Leaves skin silky smooth and deeply hydrated.'
      }
    ]
  }
];

function TreatmentsPage() {
  return (
    <div className="page-wrapper">
      <section className="treatments-page-hero">
        <div className="container">
          <h1>Our Treatments</h1>
          <p className="subtitle">Customized Skincare Solutions for Every Concern</p>
        </div>
      </section>

      <section className="treatments-page-content">
        <div className="container">
          <div className="treatments-intro">
            <p>
              Every treatment at Aqua Skin & Body Studio begins with a thorough skin analysis
              to ensure we address your unique concerns. Our expert aestheticians customize
              each service to deliver optimal results for your skin type and goals.
            </p>
          </div>

          {treatments.map((category, index) => (
            <div key={index} className="treatment-category">
              <h2>{category.category}</h2>
              <div className="treatment-list">
                {category.items.map((treatment, i) => (
                  <div key={i} className="treatment-item">
                    <div className="treatment-header">
                      <h3>{treatment.name}</h3>
                      <div className="treatment-meta">
                        <span className="duration">{treatment.duration}</span>
                        <span className="price">{treatment.price}</span>
                      </div>
                    </div>
                    <p>{treatment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="treatments-note">
            <h3>Important Information</h3>
            <ul>
              <li>All facial treatments include a complimentary skin consultation</li>
              <li>Series packages available for enhanced results (ask about our treatment series discounts)</li>
              <li>Add-on services available: LED therapy (+$35), Dermaplaning (+$40), Eye treatment (+$25)</li>
              <li>Please arrive 10 minutes before your appointment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="treatments-cta">
        <div className="container">
          <h2>Ready to Transform Your Skin?</h2>
          <p>Book your appointment today and start your journey to healthier, more radiant skin.</p>
          <Link to="/appointments" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  );
}

export default TreatmentsPage;
