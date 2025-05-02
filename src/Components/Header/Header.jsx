import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import Idioma from './Idioma';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-gray-300 transition">
            Magic: The Gathering
          </Link>

          {/* Botón hamburguesa en móviles */}
          <button
          className="text-white sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          >
            ☰
          </button>


          {/* Menú en pantallas grandes */}
          <nav className="hidden sm:flex gap-6 items-center text-white text-lg">
            <Link to="/" className="hover:text-gray-300 transition">{t('Inicio')}</Link>
            <Link to="/favoritos" className="hover:text-gray-300 transition">{t('Favoritos')}</Link>
            <Idioma />
          </nav>
        </div>

        {/* Menú desplegable en móviles */}
        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-4 text-white text-lg">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">{t('Inicio')}</Link>
            <Link to="/favoritos" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">{t('Favoritos')}</Link>
            <Idioma />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

