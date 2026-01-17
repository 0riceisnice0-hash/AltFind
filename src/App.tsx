import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Discover } from './pages/Discover';
import { Search } from './pages/Search';
import { Product } from './pages/Product';
import { Promote } from './pages/Promote';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Category } from './pages/Category';
import { Legal } from './pages/Legal';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/promote/:id" element={<Promote />} />
            <Route path="/promote" element={<Navigate to="/discover" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/legal" element={<Legal />} />
            {/* Redirect old routes */}
            <Route path="/how-it-works" element={<Navigate to="/discover" replace />} />
            <Route path="/about" element={<Navigate to="/contact" replace />} />
            <Route path="/affiliate" element={<Navigate to="/contact" replace />} />
            <Route path="/results" element={<Navigate to="/search" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
