import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Detalles = () => {
  const { id } = useParams();
  const [carta, setCarta] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCarta = async () => {
      try {
        const respuesta = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
        const data = await respuesta.json();
        setCarta(data.card);
      } catch (err) {
        setError(err);
      }
    };

    obtenerCarta();
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-10">Error: {error.message}</p>;
  if (!carta) return <p className="text-white text-center mt-10">Cargando carta...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{carta.name}</h1>

      {carta.imageUrl && (
        <img
          src={carta.imageUrl.replace('http://', 'https://')}
          alt={carta.name}
          className="w-full max-w-sm mb-6 rounded-lg shadow-lg"
        />
      )}

      <p><strong>Tipo:</strong> {carta.type}</p>
      <p><strong>Rareza:</strong> {carta.rarity}</p>
      <p><strong>Set:</strong> {carta.setName}</p>

      {carta.text && (
        <div className="mt-4">
          <strong>Texto:</strong>
          <p className="whitespace-pre-line mt-1 text-gray-300">{carta.text}</p>
        </div>
      )}

      {carta.flavor && (
        <div className="mt-4">
          <strong>Flavor text:</strong>
          <p className="italic text-gray-400 mt-1">{carta.flavor}</p>
        </div>
      )}

      {carta.power && carta.toughness && (
        <p className="mt-4"><strong>Poder/Resistencia:</strong> {carta.power}/{carta.toughness}</p>
      )}

      <p className="mt-4"><strong>Artista:</strong> {carta.artist}</p>

      <button
  onClick={() => navigate('/cartas')}
  className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition"
>
  ← Volver al listado
</button>

    </div>
  );
};

export default Detalles;
