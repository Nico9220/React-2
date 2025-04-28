import  { Link } from 'react-router-dom';
import Idioma from './Idioma'; // hay que crearlo todavia

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur text-white w-full shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
    <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition">
      Magic: The Gathering
    </Link>
    <nav className="flex gap-8 items-center text-lg">
      <Link to="/" className="hover:text-gray-400 transition">Inicio</Link>
      <Link to="/favoritos" className="hover:text-gray-400 transition">Favoritos</Link>
      <Idioma />
    </nav>
  </div>
</header>

    );
};

export default Header;