import React from 'react';
import { SearchBar } from '../components/SearchBar';
import './Home.css';

export const Home: React.FC = () => {
  const fashionImages = [
    { url: 'https://source.unsplash.com/400x600/?fashion,editorial', alt: 'Fashion editorial 1' },
    { url: 'https://source.unsplash.com/400x700/?streetwear,fashion', alt: 'Streetwear fashion 2' },
    { url: 'https://source.unsplash.com/400x550/?avant-garde,fashion', alt: 'Avant-garde fashion 3' },
    { url: 'https://source.unsplash.com/400x650/?minimal,fashion', alt: 'Minimal fashion 4' },
    { url: 'https://source.unsplash.com/400x600/?fashion,model', alt: 'Fashion model 5' },
    { url: 'https://source.unsplash.com/400x700/?fashion,photography', alt: 'Fashion photography 6' },
    { url: 'https://source.unsplash.com/400x550/?fashion,style', alt: 'Fashion style 7' },
    { url: 'https://source.unsplash.com/400x650/?fashion,lookbook', alt: 'Fashion lookbook 8' },
    { url: 'https://source.unsplash.com/400x600/?fashion,runway', alt: 'Fashion runway 9' },
    { url: 'https://source.unsplash.com/400x700/?fashion,chic', alt: 'Fashion chic 10' },
    { url: 'https://source.unsplash.com/400x550/?fashion,designer', alt: 'Fashion designer 11' },
    { url: 'https://source.unsplash.com/400x650/?fashion,couture', alt: 'Fashion couture 12' },
    { url: 'https://source.unsplash.com/400x600/?fashion,vogue', alt: 'Fashion vogue 13' },
    { url: 'https://source.unsplash.com/400x700/?fashion,aesthetic', alt: 'Fashion aesthetic 14' },
    { url: 'https://source.unsplash.com/400x550/?fashion,minimalist', alt: 'Fashion minimalist 15' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__hero-title">Find similar clothes for less</h1>
          <p className="home__hero-subtitle">
            Discover alternatives. Pay less.
          </p>
          <div className="home__search">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Fashion Gallery Section */}
      <section className="home__gallery">
        {fashionImages.map((image) => (
          <div key={image.url} className="home__gallery-item">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};
