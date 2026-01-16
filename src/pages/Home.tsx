import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Badge } from '../components/ui/Badge';
import './Home.css';

export const Home: React.FC = () => {
  const fashionImages = [
    { 
      url: 'https://ae01.alicdn.com/kf/S8c5e3f3c8e4a4e3d9f8e7d6c5b4a3d2/Women-s-Fashion-Casual-Blazer.jpg',
      alt: 'Women Fashion Casual Blazer'
    },
    { 
      url: 'https://img.kwcdn.com/product/fancy/5f5e5d5c5b5a5958/5f5e5d5c5b5a5958.jpg',
      alt: 'Casual Fashion Style'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/H1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6/Mens-Casual-Shirt.jpg',
      alt: 'Mens Casual Shirt'
    },
    { 
      url: 'https://img.kwcdn.com/product/open/2023/11/15/1700000000000-1-cate.jpg',
      alt: 'Trendy Fashion Product'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/A1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6/Women-Jeans.jpg',
      alt: 'Women Jeans'
    },
    { 
      url: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/0c5e4f3d2c1b0a9/6f5e4d3c2b1a0918.jpg',
      alt: 'Fashion Model Style'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/X9y8z7a6b5c4d3e2f1g0h9i8j7k6l5m4/Sneakers-Men.jpg',
      alt: 'Men Sneakers'
    },
    { 
      url: 'https://img.kwcdn.com/product/open/2023/12/01/1701400000000-2-cate.jpg',
      alt: 'Fashion Category'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/M4n3o2p1q0r9s8t7u6v5w4x3y2z1a0b9/Women-Dress.jpg',
      alt: 'Women Dress'
    },
    { 
      url: 'https://img.kwcdn.com/product/fancy/4a3b2c1d0e9f8e7d6c5b4a3b2c1/4a3b2c1d0e9f8e7d.jpg',
      alt: 'Fancy Fashion'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/P5q4r3s2t1u0v9w8x7y6z5a4b3c2d1e0/Mens-Jacket.jpg',
      alt: 'Mens Jacket'
    },
    { 
      url: 'https://img.kwcdn.com/product/open/2024/01/10/1704900000000-3-cate.jpg',
      alt: 'Latest Fashion'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/L6m5n4o3p2q1r0s9t8u7v6w5x4y3z2a1/Women-Coat.jpg',
      alt: 'Women Coat'
    },
    { 
      url: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/1d0c9b8a7968574/5e4d3c2b1a091827.jpg',
      alt: 'Virtual Model Fashion'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/K7l6m5n4o3p2q1r0s9t8u7v6w5x4y3z2/Sports-Shoes.jpg',
      alt: 'Sports Shoes'
    },
    { 
      url: 'https://img.kwcdn.com/product/open/2023/10/20/1697800000000-4-cate.jpg',
      alt: 'Fashion Collection'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/J8k7l6m5n4o3p2q1r0s9t8u7v6w5x4y3/Mens-Pants.jpg',
      alt: 'Mens Pants'
    },
    { 
      url: 'https://img.kwcdn.com/product/fancy/3c2b1a09f8e7d6c5b4a3c2b1a0/3c2b1a09f8e7d6c5.jpg',
      alt: 'Trendy Apparel'
    },
    { 
      url: 'https://ae01.alicdn.com/kf/I9j8k7l6m5n4o3p2q1r0s9t8u7v6w5x4/Women-Sweater.jpg',
      alt: 'Women Sweater'
    },
    { 
      url: 'https://img.kwcdn.com/product/open/2024/02/15/1708000000000-5-cate.jpg',
      alt: 'Fashion Catalog'
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
