import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getWaLink, defaultWaMsg } from '../data';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    if (location.hash === '#price' && isHome) {
      setTimeout(() => {
        document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location, isHome]);

  const scrollToPrice = () => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex flex-col items-start leading-none" onClick={closeMenu}>
            <div className="font-black text-emerald-600 text-2xl tracking-tighter">
              Santara <span className="text-amber-600">Kost</span>
            </div>
            <div className="text-xl text-amber-700 -mt-1.5 ml-0.5" style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-2deg)' }}>
              Sumbawa
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-stone-600 hover:text-brand-green-light transition-colors">Home</Link>
            {isHome ? (
              <button onClick={scrollToPrice} className="text-sm font-semibold text-stone-600 hover:text-brand-green-light transition-colors">Price</button>
            ) : (
              <Link to="/#price" className="text-sm font-semibold text-stone-600 hover:text-brand-green-light transition-colors">Price</Link>
            )}
            <Link to="/gallery" className="text-sm font-semibold text-stone-600 hover:text-brand-green-light transition-colors">Gallery</Link>
            <Link to="/about" className="text-sm font-semibold text-stone-600 hover:text-brand-green-light transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href={getWaLink(defaultWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-4 py-2 rounded-full hover:bg-brand-green-light transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href={getWaLink(defaultWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-green text-white p-2 rounded-full hover:bg-brand-green-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-brand-green-light bg-stone-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-stone-200 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link to="/" onClick={closeMenu} className="text-base font-semibold text-stone-700 hover:text-brand-green-light p-2 rounded-lg hover:bg-stone-50">Home</Link>
          {isHome ? (
            <button onClick={scrollToPrice} className="text-base font-semibold text-stone-700 hover:text-brand-green-light text-left p-2 rounded-lg hover:bg-stone-50">Price</button>
          ) : (
            <Link to="/#price" onClick={closeMenu} className="text-base font-semibold text-stone-700 hover:text-brand-green-light p-2 rounded-lg hover:bg-stone-50">Price</Link>
          )}
          <Link to="/gallery" onClick={closeMenu} className="text-base font-semibold text-stone-700 hover:text-brand-green-light p-2 rounded-lg hover:bg-stone-50">Gallery</Link>
          <Link to="/about" onClick={closeMenu} className="text-base font-semibold text-stone-700 hover:text-brand-green-light p-2 rounded-lg hover:bg-stone-50">About</Link>
        </div>
      )}
    </nav>
  );
}
