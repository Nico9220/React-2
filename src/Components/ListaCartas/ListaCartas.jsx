import PropTypes from 'prop-types';
import CardCarta from '../CardCarta/CardCarta';

const ListaCartas = ({ cartas }) => {
  if (!cartas || cartas.length === 0) {
    return <p className="text-center text-white">No se encontraron cartas.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cartas.map((carta) => (
        <CardCarta
          key={carta.id}
          id= {carta.id} 
          nombre={carta.name}
          imagen={carta.image_uris.normal}
          tipo={carta.type_line}
          rareza={carta.rarity}
        />
      ))}
    </div>
  );
};

ListaCartas.propTypes = {
  cartas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image_uris: PropTypes.shape({
        normal: PropTypes.string.isRequired,
      }),
      type_line: PropTypes.string,
      rarity: PropTypes.string,
    })
  ).isRequired,
};

export default ListaCartas;

