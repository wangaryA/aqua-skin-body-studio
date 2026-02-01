import React from 'react';
import { Link } from 'react-router-dom';
import './Appointments.css';

function Appointments() {
  return (
    <div className="page-wrapper">
      <section className="appointments-hero">
        <div className="container">
          <h1>Book Your Appointment</h1>
          <p className="subtitle">Begin Your Journey to Radiant Skin</p>
        </div>
      </section>

      <section className="appointments-content">
        <div className="container">
          <div className="appointments-grid">
            <div className="appointments-info">
              <div className="info-card">
                <h2>Contact Information</h2>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>123 Wellness Boulevard, Suite 100<br />San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>(415) 555-0123</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>hello@aquaskinbody.com</p>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h2>Hours of Operation</h2>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Tuesday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Wednesday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Thursday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item closed">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="booking-section">
              <div className="booking-card">
                <h2>Schedule Online</h2>
                <p>
                  Book your appointment easily through our online scheduling system.
                  Select your preferred service, date, and time.
                </p>
                <a
                  href="https://square.site/book/YOUR-BOOKING-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  Book Online Now
                </a>
                <p className="booking-note">
                  Prefer to speak with us? Call (415) 555-0123 to schedule your appointment.
                </p>
              </div>

              <div className="policies-card">
                <h2>Appointment Policies</h2>

                <div className="policy-section">
                  <h3>Cancellation Policy</h3>
                  <p>
                    We understand that plans change. Please provide at least 24 hours notice
                    if you need to cancel or reschedule your appointment. Cancellations made
                    with less than 24 hours notice may be subject to a cancellation fee of
                    50% of the service price.
                  </p>
                </div>

                <div className="policy-section">
                  <h3>Late Arrivals</h3>
                  <p>
                    Please arrive 10 minutes before your scheduled appointment to complete
                    any necessary paperwork. If you arrive late, your treatment time may
                    be shortened to accommodate the next client, and full service price
                    will still apply.
                  </p>
                </div>

                <div className="policy-section">
                  <h3>First Visit</h3>
                  <p>
                    New clients should arrive 15 minutes early to complete our intake forms
                    and discuss any skin concerns or health conditions with your aesthetician.
                  </p>
                </div>

                <div className="policy-section">
                  <h3>Payment</h3>
                  <p>
                    We accept all major credit cards, debit cards, and cash. Payment is due
                    at the time of service. Gift certificates are also available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appointments-cta">
        <div className="container">
          <h2>Have Questions?</h2>
          <p>
            Not sure which treatment is right for you? We offer complimentary consultations
            to help you determine the best plan for your skin.
          </p>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Appointments;
