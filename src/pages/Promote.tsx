import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { mockProducts } from '../data/mockProducts';
import './Promote.css';

export const Promote: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  const [linkCopied, setLinkCopied] = useState(false);
  const [captionCopied, setCaptionCopied] = useState(false);

  const affiliateLink = `https://altfindr.com/ref/${product.id}`;
  const caption = `Check out this amazing ${product.title} from ${product.retailer}!\n\nOnly £${product.price.toFixed(2)} - get yours now!\n\n${affiliateLink}\n\n#fashion #style #affiliate`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(caption);
    setCaptionCopied(true);
    setTimeout(() => setCaptionCopied(false), 2000);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(caption)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(affiliateLink)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(affiliateLink)}&description=${encodeURIComponent(product.title)}`,
    email: `mailto:?subject=${encodeURIComponent(`Check out ${product.title}`)}&body=${encodeURIComponent(caption)}`,
  };

  return (
    <div className="promote">
      <div className="promote__container">
        <h1 className="promote__title">Promote This Product</h1>
        <p className="promote__subtitle">
          Share this product and earn {product.commission}% commission on every sale
        </p>

        {/* Product Preview */}
        <div className="promote__preview">
          <h2 className="promote__section-title">Product Preview</h2>
          <div className="promote__preview-card">
            <img 
              src={product.imageUrl} 
              alt={product.title}
              className="promote__preview-image"
            />
            <div className="promote__preview-info">
              <h3 className="promote__preview-title">{product.title}</h3>
              <p className="promote__preview-retailer">{product.retailer}</p>
              <p className="promote__preview-price">£{product.price.toFixed(2)}</p>
              <span className="promote__preview-commission">
                {product.commission}% commission
              </span>
            </div>
          </div>
        </div>

        {/* Affiliate Link */}
        <div className="promote__section">
          <h2 className="promote__section-title">Your Affiliate Link</h2>
          <div className="promote__link-box">
            <input 
              type="text" 
              value={affiliateLink}
              readOnly
              className="promote__link-input"
            />
            <Button 
              onClick={handleCopyLink}
              variant="primary"
              className="promote__copy-button"
            >
              {linkCopied ? 'Copied!' : 'Copy Link'}
            </Button>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="promote__section">
          <h2 className="promote__section-title">Share on Social Media</h2>
          <div className="promote__share-buttons">
            <a 
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="promote__share-button promote__share-button--twitter"
            >
              <span className="promote__share-icon">X</span>
              Twitter/X
            </a>
            <a 
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="promote__share-button promote__share-button--facebook"
            >
              <span className="promote__share-icon">f</span>
              Facebook
            </a>
            <a 
              href={shareLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="promote__share-button promote__share-button--pinterest"
            >
              <span className="promote__share-icon">P</span>
              Pinterest
            </a>
            <a 
              href={shareLinks.email}
              className="promote__share-button promote__share-button--email"
            >
              <span className="promote__share-icon">@</span>
              Email
            </a>
          </div>
        </div>

        {/* Pre-written Caption */}
        <div className="promote__section">
          <h2 className="promote__section-title">Pre-written Caption</h2>
          <div className="promote__caption-box">
            <textarea 
              value={caption}
              readOnly
              className="promote__caption-textarea"
              rows={6}
            />
            <Button 
              onClick={handleCopyCaption}
              variant="primary"
              className="promote__copy-button"
            >
              {captionCopied ? 'Copied!' : 'Copy Caption'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
