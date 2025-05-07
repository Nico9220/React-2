import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CardCarta = ({ id, nombre, imagen, tipo, rareza, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const favorites = localStorage.getItem('favoritas');
    if (favorites && JSON.parse(favorites).includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  const handleAddToFavorites = () => {
    const favorites = localStorage.getItem('favoritas');
    let favoriteIds = favorites ? JSON.parse(favorites) : [];

    if (isFavorite) {
      favoriteIds = favoriteIds.filter((favId) => favId !== id);
      setIsFavorite(false);
      if (onToggleFavorite) onToggleFavorite(id);
    } else {
      favoriteIds = [...favoriteIds, id];
      setIsFavorite(true);
    }

    localStorage.setItem('favoritas', JSON.stringify(favoriteIds));
  };

  const rarezaColor = {
    common: 'bg-gray-500',
    uncommon: 'bg-blue-500',
    rare: 'bg-purple-600',
    mythic: 'bg-orange-500',
  };
  
  

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-72 flex flex-col">
      <Link to={`/cartas/${id}`}>
        <img
          src={imagen}
          alt={`Carta ${nombre}`}
          className="w-full h-96 object-cover rounded-t-xl"
        />
        <div className="p-4 flex flex-col gap-1">
          <h2 className="text-xl font-semibold text-indigo-300">{nombre}</h2>
          <p className="italic text-sm text-gray-300">{tipo}</p>
          <span
            className={`mt-1 self-start px-2 py-1 rounded-full text-xs font-bold uppercase text-white ${rarezaColor[rareza?.toLowerCase()] || 'bg-gray-600'}`}
          >
            {rareza}
          </span>
        </div>
      </Link>

      {/* Botón de favoritos */}
      <div className="px-4 pb-4 mt-auto">
        <button
          onClick={handleAddToFavorites}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition ${
            isFavorite ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
          {isFavorite ? t('remove_from_favorites') : t('add_to_favorites')}
        </button>
      </div>
    </div>
  );
};

CardCarta.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  rareza: PropTypes.string,
};

export default CardCarta;
