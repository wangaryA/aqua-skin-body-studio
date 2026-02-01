import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <h2>Aqua Skin & Body Studio</h2>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/overview">About</Link></li>
          <li><Link to="/treatments">Treatments</Link></li>
          <li><Link to="/enhancements">Enhancements</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/gift-certificate">Gift Cards</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/appointments" className="btn btn-primary btn-nav">
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
