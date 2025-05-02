import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardCarta = ({ id, nombre, imagen, tipo, rareza }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition w-72 flex flex-col justify-between">
      <Link to={`/cartas/${id}`}>
        <img
          src={imagen}
          alt={`Carta ${nombre}`}
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold">{nombre}</h2>
          <p className="text-sm italic text-gray-300 mt-1">{tipo}</p>
          <span className="mt-2 inline-block px-2 py-1 bg-indigo-600 rounded-full text-xs uppercase">
            {rareza}
          </span>
        </div>
      </Link>

      {/* Botón de favoritos */}
      <div className="px-4 pb-4">
        <button
          className="mt-2 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition"
        >
          Agregar a Favoritos
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

