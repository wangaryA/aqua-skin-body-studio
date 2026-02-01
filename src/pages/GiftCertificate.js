import React from 'react';
import { Link } from 'react-router-dom';
import './GiftCertificate.css';

function GiftCertificate() {
  return (
    <div className="page-wrapper">
      <section className="gift-hero">
        <div className="container">
          <h1>Gift Certificates</h1>
          <p className="subtitle">Give the Gift of Radiant Skin</p>
        </div>
      </section>

      <section className="gift-content">
        <div className="container">
          <div className="gift-main">
            <div className="gift-image">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238e49b?w=600&h=500&fit=crop"
                alt="Gift certificate"
              />
            </div>
            <div className="gift-text">
              <h2>The Perfect Gift for Every Occasion</h2>
              <p>
                Treat someone special to the ultimate self-care experience with an Aqua Skin & Body
                Studio gift certificate. Whether it's a birthday, anniversary, holiday, or just
                because—our gift certificates are the perfect way to show you care.
              </p>
              <p>
                Gift certificates are available in any amount and can be used toward any of our
                services or professional skincare products. They never expire and can be
                delivered via email or printed for in-person gifting.
              </p>

              <div className="gift-features">
                <div className="gift-feature">
                  <span className="feature-icon">🎁</span>
                  <span>Custom Amounts Available</span>
                </div>
                <div className="gift-feature">
                  <span className="feature-icon">✉️</span>
                  <span>Email or Print Delivery</span>
                </div>
                <div className="gift-feature">
                  <span className="feature-icon">♾️</span>
                  <span>Never Expires</span>
                </div>
                <div className="gift-feature">
                  <span className="feature-icon">💆</span>
                  <span>Valid for All Services</span>
                </div>
              </div>

              <a
                href="https://squareup.com/gift/YOUR-GIFT-LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Purchase Gift Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="gift-ideas">
        <div className="container">
          <h2>Popular Gift Ideas</h2>
          <div className="ideas-grid">
            <div className="idea-card">
              <div className="idea-amount">$75</div>
              <h3>Express Treat</h3>
              <p>Perfect for a quick glow-up with our Express Facial or add-on treatments.</p>
            </div>
            <div className="idea-card featured">
              <div className="idea-badge">Most Popular</div>
              <div className="idea-amount">$150</div>
              <h3>Signature Experience</h3>
              <p>Our most popular gift amount, perfect for a full Aqua Signature Facial.</p>
            </div>
            <div className="idea-card">
              <div className="idea-amount">$250</div>
              <h3>Luxury Indulgence</h3>
              <p>Treat them to an advanced treatment like microneedling or a facial series.</p>
            </div>
            <div className="idea-card">
              <div className="idea-amount">Custom</div>
              <h3>Your Choice</h3>
              <p>Select any amount you'd like. Great for specific services or product purchases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gift-corporate">
        <div className="container">
          <div className="corporate-content">
            <h2>Corporate & Group Gifts</h2>
            <p>
              Looking to reward your team or thank valued clients? We offer special corporate
              gift certificate packages. Contact us for volume discounts and custom branding options.
            </p>
            <Link to="/contact" className="btn btn-secondary">Contact Us for Details</Link>
          </div>
        </div>
      </section>

      <section className="gift-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I purchase a gift certificate?</h3>
              <p>
                Click the "Purchase Gift Certificate" button above to buy online. You can also
                call us at (415) 555-0123 or visit the studio in person.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I use a gift certificate for products?</h3>
              <p>
                Yes! Gift certificates can be used toward any services or professional
                skincare products available at our studio.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do gift certificates expire?</h3>
              <p>
                No, our gift certificates never expire. The recipient can use them
                whenever they're ready.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I get a refund on a gift certificate?</h3>
              <p>
                Gift certificates are non-refundable but are transferable. If the
                original recipient can't use it, they can give it to someone else.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GiftCertificate;
