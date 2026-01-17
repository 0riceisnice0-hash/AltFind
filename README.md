# AltFindr

**Similar style. Lower price.**

AltFindr is a fashion similarity search web app that helps you find visually similar clothing items from multiple retailers at lower prices.

## 🚀 Live Demo

Visit the deployed site: [https://0riceisnice0-hash.github.io/AltFind](https://0riceisnice0-hash.github.io/AltFind)

## ✨ Features

- **Visual Similarity Search**: Find items that look similar to what you're searching for
- **Price Comparison**: Discover cheaper alternatives from trusted retailers
- **URL Search**: Paste a product link to find similar items
- **Smart Filtering**: Filter by price, category, and sort by similarity or price
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Save Favorites**: Save items you like for later (stored locally)

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** with HashRouter (for GitHub Pages compatibility)
- **CSS** with modern, responsive layouts
- **GitHub Actions** for automated deployment

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0riceisnice0-hash/AltFind.git
cd AltFind
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

To build the project for production:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automated)

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Steps:**

1. Go to your repository Settings
2. Navigate to Pages (under Code and automation)
3. Under "Build and deployment", set:
   - Source: **GitHub Actions**
4. Push to the `main` branch to trigger deployment

The site will be available at: `https://[username].github.io/AltFind/`

**Key Configuration Details:**
- The project uses HashRouter for GitHub Pages compatibility (no server-side routing needed)
- Base path is set to `/AltFind/` in `vite.config.ts`
- `.nojekyll` file is included to prevent Jekyll processing
- GitHub Actions workflow automatically builds and deploys on push to `main`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Upload the contents of the `dist` folder to your hosting provider
```

## 📝 Project Structure

```
AltFindr/
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI primitives (Button, Input, Select, Badge)
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   ├── SearchBar/     # Search bar component
│   │   ├── ProductCard/   # Product card component
│   │   ├── ProductGrid/   # Product grid layout
│   │   └── FiltersBar/    # Filters component
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── Results.tsx    # Search results page
│   │   ├── HowItWorks.tsx # How it works page
│   │   ├── About.tsx      # About page
│   │   └── Legal.tsx      # Legal page
│   ├── data/              # Mock data
│   │   └── mockProducts.ts # Product mock data (40+ items)
│   ├── utils/             # Utility functions
│   │   └── search.ts      # Search and filtering logic
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Shared types
│   ├── App.tsx            # Main app component with routing
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
├── public/                # Static assets
├── vite.config.ts         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Adding More Products

Edit the mock data in `src/data/mockProducts.ts`. Each product should follow this structure:

```typescript
{
  id: string;          // Unique identifier
  title: string;       // Product name
  retailer: string;    // Retailer name
  price: number;       // Price in GBP
  category: string;    // Category (Jackets, Hoodies, Trousers, Trainers, Boots)
  imageUrl: string;    // Product image URL
  outboundUrl: string; // Link to product on retailer's site
}
```

### Modifying Search Logic

The search and filtering logic is in `src/utils/search.ts`. You can adjust:
- Keyword matching algorithm
- Scoring system
- Filter behavior
- Sorting options

### Styling

Global styles are in `src/index.css`. Component-specific styles are colocated with each component.

To change the accent color, update the primary button color in `src/components/ui/Button.css`.

## 📄 Pages

- **Home** (`/`) - Hero section with search, trust indicators, and how it works preview
- **Results** (`/results?q=...`) - Search results with filters and pagination
- **How It Works** (`/how-it-works`) - Detailed explanation with FAQ
- **About** (`/about`) - Mission and purpose
- **Legal** (`/legal`) - Privacy policy, terms, and affiliate disclosure

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run ingest:dhgate` - Run DHgate CSV ingestion script

## 🔐 Supabase Configuration

### Required GitHub Secrets

For automated deployment via GitHub Actions, configure these secrets in your repository:

- `SUPABASE_ACCESS_TOKEN` - Supabase access token for CLI
- `SUPABASE_PROJECT_REF` - Your Supabase project reference ID
- `SUPABASE_DB_PASSWORD` - Database password for migrations

### Required Supabase Edge Function Secret

In your Supabase project dashboard, set the following secret for the Edge Function:

- `SUPABASE_SERVICE_ROLE_KEY` - Service role key for database access

### Local Development

For running the CSV ingestion script locally:

1. Copy `.env.example` to `.env`
2. Add your `SUPABASE_SERVICE_ROLE_KEY` to `.env`
3. Place your DHgate CSV file in the `data/` directory
4. Run: `npm run ingest:dhgate`

**Security Note**: Never commit the `.env` file or service role keys to the repository.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This project integrates with Supabase for product search and data management. The frontend uses the public Supabase anon key, while the Edge Functions and ingestion scripts use the service role key for secure database access.
