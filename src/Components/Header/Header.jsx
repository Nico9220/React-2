import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Idioma from './Idioma';

const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur text-gray-900' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/cartas" className="text-2xl font-bold hover:text-gray-500 transition">
          Magic: The Gathering
        </Link>

        {/* Navegación para escritorio */}
        <nav className="hidden sm:flex items-center gap-6 text-lg">
          <Link to="/cartas" className="hover:text-gray-500 transition">
            {t('Inicio')}
          </Link>
          <Link to="/favoritos" className="hover:text-gray-500 transition">
            {t('Favoritos')}
          </Link>
          <Idioma />
        </nav>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="sm:hidden bg-white text-gray-900 flex flex-col items-center gap-4 py-6 shadow-md">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-500 transition">
            {t('Inicio')}
          </Link>
          <Link to="/favoritos" onClick={toggleMenu} className="hover:text-gray-500 transition">
            {t('Favoritos')}
          </Link>
          <Idioma />
        </div>
      )}
    </header>
  );
};

export default Header;
