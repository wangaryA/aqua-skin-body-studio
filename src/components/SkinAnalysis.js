import React, { useState } from 'react';
import './SkinAnalysis.css';

function SkinAnalysis() {
  const [selectedConcern, setSelectedConcern] = useState('acne');

  const concerns = {
    acne: {
      title: 'Acne & Breakouts',
      description: 'Clear, balanced skin starts with targeted treatment and proper care.',
      treatments: [
        {
          name: 'Deep Cleansing Facial',
          desc: 'Purifying treatment with extractions and antibacterial solutions'
        },
        {
          name: 'LED Light Therapy',
          desc: 'Blue light therapy to reduce inflammation and kill acne-causing bacteria'
        },
        {
          name: 'Chemical Peel',
          desc: 'Exfoliating treatment to unclog pores and prevent future breakouts'
        }
      ]
    },
    aging: {
      title: 'Aging & Fine Lines',
      description: 'Turn back time with treatments designed to restore youthful vitality.',
      treatments: [
        {
          name: 'Anti-Aging Facial',
          desc: 'Collagen-boosting treatment with peptides and retinol'
        },
        {
          name: 'Microcurrent Therapy',
          desc: 'Non-invasive lifting and toning for firmer, younger-looking skin'
        },
        {
          name: 'Vitamin C Brightening',
          desc: 'Antioxidant-rich treatment to reduce fine lines and boost radiance'
        }
      ]
    },
    dryness: {
      title: 'Dryness & Dehydration',
      description: 'Restore moisture balance and achieve a dewy, healthy glow.',
      treatments: [
        {
          name: 'HydraFacial',
          desc: 'Deep hydration with hyaluronic acid and nourishing serums'
        },
        {
          name: 'Moisture Infusion Treatment',
          desc: 'Intensive hydration therapy with barrier-repairing ingredients'
        },
        {
          name: 'Oxygen Facial',
          desc: 'Oxygen-infused treatment to plump and revitalize dry skin'
        }
      ]
    },
    sensitivity: {
      title: 'Sensitivity & Redness',
      description: 'Gentle, soothing treatments to calm and strengthen reactive skin.',
      treatments: [
        {
          name: 'Calming Facial',
          desc: 'Anti-inflammatory treatment with soothing botanicals'
        },
        {
          name: 'Rosacea Relief Therapy',
          desc: 'Specialized treatment to reduce redness and strengthen capillaries'
        },
        {
          name: 'Gentle Enzyme Peel',
          desc: 'Mild exfoliation without irritation for sensitive skin types'
        }
      ]
    },
    hyperpigmentation: {
      title: 'Hyperpigmentation & Dark Spots',
      description: 'Achieve even-toned, luminous skin with targeted brightening treatments.',
      treatments: [
        {
          name: 'Brightening Facial',
          desc: 'Vitamin C and kojic acid treatment to fade dark spots'
        },
        {
          name: 'Chemical Peel',
          desc: 'Professional-grade exfoliation to resurface and even skin tone'
        },
        {
          name: 'IPL Photofacial',
          desc: 'Light therapy to target and reduce pigmentation'
        }
      ]
    }
  };

  return (
    <section className="skin-analysis section" id="skin-analysis">
      <div className="container">
        <div className="section-header text-center">
          <h2>Find Your Perfect Treatment</h2>
          <p>Select your primary skin concern to discover personalized solutions</p>
        </div>

        <div className="concern-buttons">
          <button
            className={`concern-btn ${selectedConcern === 'acne' ? 'active' : ''}`}
            onClick={() => setSelectedConcern('acne')}
          >
            Acne
          </button>
          <button
            className={`concern-btn ${selectedConcern === 'aging' ? 'active' : ''}`}
            onClick={() => setSelectedConcern('aging')}
          >
            Aging
          </button>
          <button
            className={`concern-btn ${selectedConcern === 'dryness' ? 'active' : ''}`}
            onClick={() => setSelectedConcern('dryness')}
          >
            Dryness
          </button>
          <button
            className={`concern-btn ${selectedConcern === 'sensitivity' ? 'active' : ''}`}
            onClick={() => setSelectedConcern('sensitivity')}
          >
            Sensitivity
          </button>
          <button
            className={`concern-btn ${selectedConcern === 'hyperpigmentation' ? 'active' : ''}`}
            onClick={() => setSelectedConcern('hyperpigmentation')}
          >
            Hyperpigmentation
          </button>
        </div>

        <div className="concern-content fade-in">
          <h3>{concerns[selectedConcern].title}</h3>
          <p className="concern-description">{concerns[selectedConcern].description}</p>

          <div className="treatments-list">
            {concerns[selectedConcern].treatments.map((treatment, index) => (
              <div key={index} className="treatment-item">
                <div className="treatment-number">{index + 1}</div>
                <div className="treatment-info">
                  <h4>{treatment.name}</h4>
                  <p>{treatment.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="concern-cta">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkinAnalysis;
