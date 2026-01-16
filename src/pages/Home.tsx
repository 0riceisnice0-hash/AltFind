import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Badge } from '../components/ui/Badge';
import './Home.css';

export const Home: React.FC = () => {
  const fashionImages = [
    { 
      url: '/AltFind/images/fashion-1.jpg',
      alt: 'Minimal fashion editorial'
    },
    { 
      url: '/AltFind/images/fashion-2.jpg',
      alt: 'Clean streetwear'
    },
    { 
      url: '/AltFind/images/fashion-3.jpg',
      alt: 'Bright fashion lookbook'
    },
    { 
      url: '/AltFind/images/fashion-4.jpg',
      alt: 'Neutral fashion photography'
    },
    { 
      url: '/AltFind/images/fashion-5.jpg',
      alt: 'Editorial outfit'
    },
    { 
      url: '/AltFind/images/fashion-6.jpg',
      alt: 'Minimal wardrobe'
    },
    { 
      url: '/AltFind/images/fashion-7.jpg',
      alt: 'Fashion model neutral'
    },
    { 
      url: '/AltFind/images/fashion-8.jpg',
      alt: 'Streetwear clean'
    },
    { 
      url: '/AltFind/images/fashion-9.jpg',
      alt: 'Layered outfit'
    },
    { 
      url: '/AltFind/images/fashion-10.jpg',
      alt: 'Monochrome fashion'
    },
    { 
      url: '/AltFind/images/fashion-11.jpg',
      alt: 'Casual chic'
    },
    { 
      url: '/AltFind/images/fashion-12.jpg',
      alt: 'Neutral tones outfit'
    },
    { 
      url: '/AltFind/images/fashion-13.jpg',
      alt: 'Minimal style'
    },
    { 
      url: '/AltFind/images/fashion-14.jpg',
      alt: 'Editorial fashion'
    },
    { 
      url: '/AltFind/images/fashion-15.jpg',
      alt: 'Clean fashion photography'
    },
    { 
      url: '/AltFind/images/fashion-16.jpg',
      alt: 'Layered neutral look'
    },
    { 
      url: '/AltFind/images/fashion-17.jpg',
      alt: 'Fashion model bright'
    },
    { 
      url: '/AltFind/images/fashion-18.jpg',
      alt: 'Streetwear editorial'
    },
    { 
      url: '/AltFind/images/fashion-19.jpg',
      alt: 'Sneakers fashion'
    },
    { 
      url: '/AltFind/images/fashion-20.jpg',
      alt: 'Minimalist fashion'
    }
  ];

  const exampleQueries = [
    'black puffer jacket',
    'black zip hoodie',
    'grey cargo trousers',
    'white trainers',
    'brown leather boots',
  ];

  const handleExampleClick = (query: string) => {
    const searchInput = document.querySelector<HTMLInputElement>('.search-bar input');
    if (searchInput) {
      searchInput.value = query;
      searchInput.focus();
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__hero-title">Find similar clothes for less</h1>
          <p className="home__hero-subtitle">
            Search by description or paste a product link.
          </p>
          <div className="home__search">
            <SearchBar />
          </div>
          <div className="home__examples">
            <span className="home__examples-label">Try:</span>
            {exampleQueries.map((query) => (
              <Badge 
                key={query}
                variant="default"
                onClick={() => handleExampleClick(query)}
                style={{ cursor: 'pointer' }}
              >
                {query}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Gallery Section */}
      <section className="home__gallery">
        {fashionImages.map((image) => (
          <div key={image.url} className="home__gallery-item">
            <img 
              src={image.url} 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </section>
    </div>
  );
};
