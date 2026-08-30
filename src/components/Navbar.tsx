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
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-brand-green-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img 
              src="https://raw.githubusercontent.com/dharmayanggg/storage-image/main/logo%20santara%20transparant.png" 
              alt="Santara Kost Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="flex flex-col justify-center pt-1">
              <span className="font-bold text-[#FFD700] text-lg md:text-xl leading-none tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>SANTARA KOST</span>
              <span className="text-white text-lg md:text-xl leading-none -mt-1 ml-0.5" style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-2deg)' }}>Sumbawa</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">Home</Link>
            {isHome ? (
              <button onClick={scrollToPrice} className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">Price</button>
            ) : (
              <Link to="/#price" className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">Price</Link>
            )}
            <Link to="/gallery" className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">Gallery</Link>
            <Link to="/peraturan" className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">Peraturan</Link>
            <Link to="/about" className="text-sm font-semibold text-stone-300 hover:text-brand-green-light transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href={getWaLink(defaultWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green-light text-stone-950 font-bold px-5 py-2.5 rounded-full hover:bg-emerald-400 transition-colors text-sm shadow-md shadow-brand-green-light/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-brand-green-light bg-stone-900 rounded-lg border border-stone-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-brand-green-light shadow-xl py-4 px-4 flex flex-col gap-2">
          <Link to="/" onClick={closeMenu} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors">Home</Link>
          {isHome ? (
            <button onClick={scrollToPrice} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors text-left">Price</button>
          ) : (
            <Link to="/#price" onClick={closeMenu} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors">Price</Link>
          )}
          <Link to="/gallery" onClick={closeMenu} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors">Gallery</Link>
          <Link to="/peraturan" onClick={closeMenu} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors">Peraturan</Link>
          <Link to="/about" onClick={closeMenu} className="text-base font-semibold text-stone-300 hover:text-brand-green-light hover:bg-stone-900 p-3 rounded-xl transition-colors">About</Link>
          <div className="mt-2 pt-2 border-t border-stone-800">
            <a 
              href={getWaLink(defaultWaMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green-light text-stone-950 font-bold px-4 py-3 rounded-xl hover:bg-emerald-400 transition-colors shadow-md w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
