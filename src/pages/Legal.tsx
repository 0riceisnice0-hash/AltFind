import React from 'react';
import './Legal.css';

export const Legal: React.FC = () => {
  return (
    <div className="legal">
      <div className="legal__container">
        <h1 className="legal__title">Legal</h1>

        <section className="legal__section">
          <h2 className="legal__section-title">Privacy Policy</h2>
          <p className="legal__text">
            This is a placeholder for the Privacy Policy. In a production environment, this section 
            would detail how we collect, use, and protect user data, including information about 
            cookies, analytics, and user rights under relevant privacy laws (GDPR, CCPA, etc.).
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__section-title">Terms of Service</h2>
          <p className="legal__text">
            This is a placeholder for the Terms of Service. In a production environment, this section 
            would outline the terms and conditions for using AltFind, including user responsibilities, 
            acceptable use policies, disclaimers, and limitations of liability.
          </p>
        </section>

        <section className="legal__section">
          <h2 className="legal__section-title">Affiliate Disclosure</h2>
          <p className="legal__text">
            AltFind participates in various affiliate marketing programs. When you click on product 
            links and make a purchase, we may earn a commission from qualifying purchases. This 
            commission comes at no additional cost to you—you pay the same price you would if you 
            went directly to the retailer.
          </p>
          <p className="legal__text">
            We only recommend products and retailers that we believe offer value to our users. Our 
            affiliate relationships do not influence the search results or product recommendations 
            you see—these are determined solely by our matching algorithms and the filters you apply.
          </p>
          <p className="legal__text">
            The income we generate through these commissions helps us maintain and improve the 
            AltFind platform, keeping it free for all users.
          </p>
        </section>
      </div>
    </div>
  );
};
