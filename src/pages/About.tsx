import React from 'react';
import './About.css';

export const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h1 className="about__title">About AltFind</h1>
        
        <div className="about__content">
          <p className="about__text">
            AltFind was created to help people find the style they love at prices that work for them. 
            We believe that great fashion shouldn't break the bank, and that there are often similar 
            alternatives out there if you know where to look.
          </p>
          
          <p className="about__text">
            Our platform aggregates products from multiple trusted retailers and uses visual similarity 
            matching to surface alternatives that look alike but cost less. Whether you've found 
            something you like on a premium brand's website or you're just browsing for inspiration, 
            AltFind helps you discover budget-friendly options without compromising on style.
          </p>

          <p className="about__text">
            We don't sell products ourselves—we simply connect you with trusted retailers where you 
            can make your purchase. This allows us to focus on what we do best: helping you find 
            the perfect match at the right price.
          </p>
        </div>
      </div>
    </div>
  );
};
