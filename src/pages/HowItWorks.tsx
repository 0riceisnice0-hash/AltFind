import React from 'react';
import './HowItWorks.css';

export const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works">
      <div className="how-it-works__container">
        <h1 className="how-it-works__title">How it works</h1>
        
        <section className="how-it-works__steps">
          <div className="how-it-works__step">
            <div className="how-it-works__step-number">1</div>
            <div className="how-it-works__step-content">
              <h2 className="how-it-works__step-title">Search or paste a link</h2>
              <p className="how-it-works__step-text">
                Start by typing what you're looking for in the search bar, like "black puffer jacket" 
                or "white trainers". Or if you've found something you like on a retailer's website, 
                simply paste the product link. Our system will analyze the item and find similar alternatives.
              </p>
            </div>
          </div>

          <div className="how-it-works__step">
            <div className="how-it-works__step-number">2</div>
            <div className="how-it-works__step-content">
              <h2 className="how-it-works__step-title">We find similar options</h2>
              <p className="how-it-works__step-text">
                Our algorithm searches through products from multiple trusted retailers to find items 
                that match your search visually. We focus on style, color, and design to surface 
                alternatives that look similar but cost less.
              </p>
            </div>
          </div>

          <div className="how-it-works__step">
            <div className="how-it-works__step-number">3</div>
            <div className="how-it-works__step-content">
              <h2 className="how-it-works__step-title">You choose the best price</h2>
              <p className="how-it-works__step-text">
                Browse the results, compare prices, and click "View deal" to visit the retailer's 
                website. You can save your favorites for later and filter by price, category, or 
                similarity to find exactly what you need.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works__faq">
          <h2 className="how-it-works__section-title">Frequently Asked Questions</h2>
          
          <div className="how-it-works__faq-item">
            <h3 className="how-it-works__faq-question">Does it work with any link?</h3>
            <p className="how-it-works__faq-answer">
              Currently, our system works best with links from our supported retailers. We're 
              constantly expanding our network to include more stores and improve matching accuracy.
            </p>
          </div>

          <div className="how-it-works__faq-item">
            <h3 className="how-it-works__faq-question">Do you sell products?</h3>
            <p className="how-it-works__faq-answer">
              No, we don't sell anything directly. AltFindr is a discovery and comparison platform. 
              When you click "View deal", we'll take you directly to the retailer's website where 
              you can make your purchase.
            </p>
          </div>

          <div className="how-it-works__faq-item">
            <h3 className="how-it-works__faq-question">How do you make money?</h3>
            <p className="how-it-works__faq-answer">
              We earn a small commission from qualifying purchases made through our affiliate links. 
              This doesn't affect your price—you pay the same amount you would if you went directly 
              to the retailer.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
