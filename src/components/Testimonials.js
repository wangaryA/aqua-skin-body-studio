import React, { useState, useEffect } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The HydraFacial at Aqua completely transformed my skin. After years of struggling with dryness, my complexion is now glowing and hydrated. The team truly understands skin care!",
      name: "Sarah Mitchell",
      treatment: "Custom HydraFacial",
      initials: "SM"
    },
    {
      quote: "I've been coming to Aqua for over a year now, and the results speak for themselves. My fine lines have visibly reduced, and I feel more confident than ever. Worth every penny!",
      name: "Jennifer Lee",
      treatment: "Anti-Aging Facial Series",
      initials: "JL"
    },
    {
      quote: "The relaxation body therapy is my monthly escape. The atmosphere is serene, the therapists are skilled, and I always leave feeling completely renewed. Highly recommend!",
      name: "Michael Rodriguez",
      treatment: "Relaxation Body Therapy",
      initials: "MR"
    },
    {
      quote: "As someone with sensitive skin, finding the right spa was challenging. Aqua's calming facial has been a game-changer. They take the time to understand my skin and customize every treatment.",
      name: "Emily Chen",
      treatment: "Calming Facial",
      initials: "EC"
    },
    {
      quote: "Professional, knowledgeable, and absolutely wonderful. The skin consultation gave me a clear roadmap for my skincare journey. I finally understand what my skin needs!",
      name: "David Thompson",
      treatment: "Skin Wellness Consultation",
      initials: "DT"
    }
  ];

  const beforeAfter = [
    {
      before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
      treatment: "Acne Treatment - 12 Weeks"
    },
    {
      before: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop",
      treatment: "Anti-Aging Series - 8 Weeks"
    },
    {
      before: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=400&h=400&fit=crop",
      treatment: "Brightening Facial - 6 Weeks"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2>Real Results from Real Clients</h2>
          <p>See the transformations and hear from those who've experienced our care</p>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-carousel">
            <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonials[currentTestimonial].quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].treatment}</p>
                </div>
              </div>
            </div>

            <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="before-after-section">
            <h3>Visible Transformations</h3>
            <div className="before-after-grid">
              {beforeAfter.map((item, index) => (
                <div key={index} className="before-after-item">
                  <div className="comparison">
                    <div className="comparison-side">
                      <img src={item.before} alt="Before treatment" />
                      <span className="label">Before</span>
                    </div>
                    <div className="comparison-side">
                      <img src={item.after} alt="After treatment" />
                      <span className="label">After</span>
                    </div>
                  </div>
                  <p className="comparison-caption">{item.treatment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
