import React from 'react';
import './Products.css';

const products = [
  {
    name: 'iS Clinical',
    description: 'Innovative skincare backed by science. iS Clinical products deliver pharmaceutical-grade formulas for visible, long-lasting results.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop',
    features: ['Clinically Proven', 'Botanical Ingredients', 'Advanced Formulas']
  },
  {
    name: 'SkinCeuticals',
    description: 'Advanced skincare backed by science. SkinCeuticals offers high-potency formulas to improve skin health and treat skin conditions.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b3f?w=400&h=300&fit=crop',
    features: ['Antioxidant Protection', 'Corrective Treatments', 'Anti-Aging Solutions']
  },
  {
    name: 'ZO Skin Health',
    description: 'Created by Dr. Zein Obagi, ZO Skin Health provides comprehensive therapeutic solutions for all skin types and conditions.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop',
    features: ['Medical-Grade', 'Comprehensive Programs', 'Results-Driven']
  },
  {
    name: 'PCA Skin',
    description: 'Professional-grade products formulated with effective ingredients to improve skin health and correct a variety of skin concerns.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop',
    features: ['Gentle Formulas', 'Sensitive Skin Options', 'Daily Care Essentials']
  }
];

function Products() {
  return (
    <div className="page-wrapper">
      <section className="products-hero">
        <div className="container">
          <h1>Professional Skincare Products</h1>
          <p className="subtitle">Medical-Grade Products for Exceptional Results</p>
        </div>
      </section>

      <section className="products-intro">
        <div className="container">
          <p>
            At Aqua Skin & Body Studio, we exclusively use and recommend professional-grade
            skincare products that deliver real results. Our carefully curated selection of
            medical-grade products ensures that your skin receives the highest quality care
            both during treatments and at home.
          </p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-cta">
        <div className="container">
          <h2>Find Your Perfect Skincare Routine</h2>
          <p>
            Not sure which products are right for you? Schedule a consultation and
            we'll create a personalized skincare regimen tailored to your unique needs.
          </p>
          <a href="/appointments" className="btn btn-primary">Book a Consultation</a>
        </div>
      </section>
    </div>
  );
}

export default Products;
