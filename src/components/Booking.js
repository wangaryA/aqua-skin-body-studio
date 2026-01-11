import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const treatments = [
    'Custom HydraFacial',
    'Anti-Aging Facial',
    'Signature Glow Facial',
    'Relaxation Body Therapy',
    'Deep Tissue Therapy',
    'Skin Wellness Consultation'
  ];

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()]
    };
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }

    if (!formData.treatment) {
      errors.treatment = 'Please select a treatment';
    }

    if (!selectedDate) {
      errors.date = 'Please select a date';
    }

    if (!selectedTime) {
      errors.time = 'Please select a time';
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', { ...formData, date: selectedDate, time: selectedTime });
    } else {
      setFormErrors(errors);
    }
  };

  if (submitted) {
    return (
      <section className="booking section section-alt" id="booking">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Booking Request Received!</h2>
            <p>Thank you for choosing Aqua Skin & Body Studio. We'll contact you shortly to confirm your appointment.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking section section-alt" id="booking">
      <div className="container">
        <div className="section-header text-center">
          <h2>Ready to Transform Your Skin?</h2>
          <p>Book your personalized treatment today</p>
        </div>

        <div className="booking-content">
          <div className="calendar-section">
            <h3>Select Your Preferred Date</h3>
            <div className="date-selector">
              {getNext7Days().map((date, index) => {
                const formatted = formatDate(date);
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                return (
                  <button
                    key={index}
                    className={`date-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedDate(date);
                      setFormErrors(prev => ({ ...prev, date: '' }));
                    }}
                  >
                    <span className="date-day">{formatted.day}</span>
                    <span className="date-number">{formatted.date}</span>
                    <span className="date-month">{formatted.month}</span>
                  </button>
                );
              })}
            </div>
            {formErrors.date && <p className="error-message">{formErrors.date}</p>}

            <h3>Select Your Preferred Time</h3>
            <div className="time-selector">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedTime(time);
                    setFormErrors(prev => ({ ...prev, time: '' }));
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
            {formErrors.time && <p className="error-message">{formErrors.time}</p>}

            <div className="studio-info">
              <h4>Studio Information</h4>
              <p><strong>Address:</strong> 123 Wellness Avenue, Suite 200, Your City, ST 12345</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Hours:</strong> Mon-Sat 9:00 AM - 7:00 PM | Sun 10:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-text">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-text">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className={formErrors.phone ? 'error' : ''}
                />
                {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="treatment">Select Treatment *</label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className={formErrors.treatment ? 'error' : ''}
                >
                  <option value="">Choose a treatment...</option>
                  {treatments.map((treatment, index) => (
                    <option key={index} value={treatment}>{treatment}</option>
                  ))}
                </select>
                {formErrors.treatment && <span className="error-text">{formErrors.treatment}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Requests or Questions</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any skin concerns or special requests..."
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Book Appointment
              </button>

              <p className="form-note">
                * Required fields. Your information is secure and will only be used to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
