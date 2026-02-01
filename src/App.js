import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Products from './pages/Products';
import TreatmentsPage from './pages/TreatmentsPage';
import Enhancements from './pages/Enhancements';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import GiftCertificate from './pages/GiftCertificate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/products" element={<Products />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/enhancements" element={<Enhancements />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gift-certificate" element={<GiftCertificate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
