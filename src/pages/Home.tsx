import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Badge } from '../components/ui/Badge';
import './Home.css';

export const Home: React.FC = () => {
  const fashionImages = [
    { 
      url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimal fashion editorial'
    },
    { 
      url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      alt: 'Clean streetwear style'
    },
    { 
      url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
      alt: 'Bright fashion lookbook'
    },
    { 
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      alt: 'Neutral fashion photography'
    },
    { 
      url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      alt: 'Editorial outfit aesthetic'
    },
    { 
      url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimal wardrobe essentials'
    },
    { 
      url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
      alt: 'Fashion model neutral tones'
    },
    { 
      url: 'https://images.unsplash.com/photo-1544957992-20514f595d6f?auto=format&fit=crop&w=800&q=80',
      alt: 'Streetwear clean aesthetic'
    },
    { 
      url: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80',
      alt: 'Layered outfit inspiration'
    },
    { 
      url: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80',
      alt: 'Monochrome fashion style'
    },
    { 
      url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
      alt: 'Casual chic fashion'
    },
    { 
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      alt: 'Neutral tones outfit'
    },
    { 
      url: 'https://images.unsplash.com/photo-1558769132-cb1aea1c8f86?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimal style photography'
    },
    { 
      url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
      alt: 'Editorial fashion shoot'
    },
    { 
      url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      alt: 'Clean fashion photography'
    },
    { 
      url: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80',
      alt: 'Layered neutral look'
    },
    { 
      url: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&w=800&q=80',
      alt: 'Fashion model bright lighting'
    },
    { 
      url: 'https://images.unsplash.com/photo-1511401139252-f158d3209c17?auto=format&fit=crop&w=800&q=80',
      alt: 'Streetwear editorial style'
    },
    { 
      url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80',
      alt: 'Sneakers fashion detail'
    },
    { 
      url: 'https://images.unsplash.com/photo-1562447686-45df6e6e2229?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimalist fashion aesthetic'
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
              decoding="async"
              width="200"
              height="300"
              style={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'rgb(235, 231, 224)'
              }}
              className="home__gallery-image"
            />
          </div>
        ))}
      </section>
    </div>
  );
};
