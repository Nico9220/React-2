import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Detalles = () => {
  const { id } = useParams();
  const [carta, setCarta] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  useEffect(() => {
    const obtenerCarta = async () => {
      try {
        const respuesta = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
        const data = await respuesta.json();

        if (!data.card) {
            navigate('/404', { replace: true });
            return;
          }

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
    <div className="max-w-6xl mx-auto p-8 text-white flex flex-col md:flex-row gap-10 items-start mt-55">
  {/* Imagen */}
  <div className="md:w-1/2 flex justify-center">
    {carta.imageUrl && (
      <img
        src={carta.imageUrl.replace('http://', 'https://')}
        alt={carta.name}
        className="rounded-xl shadow-2xl w-full max-w-xs"
      />
    )}
  </div>

  {/* Detalles */}
  <div className="md:w-1/2 flex flex-col gap-3">
    <h1 className="text-4xl font-extrabold mb-2">{carta.name}</h1>

    <p><span className="font-semibold text-indigo-400">Tipo:</span> {carta.type}</p>
    <p><span className="font-semibold text-indigo-400">Rareza:</span> {carta.rarity}</p>
    <p><span className="font-semibold text-indigo-400">Set:</span> {carta.setName}</p>

    {carta.text && (
      <div className="mt-2">
        <p className="font-semibold text-indigo-400">Texto:</p>
        <p className="whitespace-pre-line text-gray-200">{carta.text}</p>
      </div>
    )}

    {carta.flavor && (
      <div className="mt-2">
        <p className="font-semibold text-indigo-400">Flavor text:</p>
        <p className="italic text-gray-400">{carta.flavor}</p>
      </div>
    )}

    {carta.power && carta.toughness && (
      <p><span className="font-semibold text-indigo-400">Poder/Resistencia:</span> {carta.power}/{carta.toughness}</p>
    )}

    <p><span className="font-semibold text-indigo-400">Artista:</span> {carta.artist}</p>

    {/* Botón volver */}
    <button
      onClick={() => navigate('/cartas')}
      className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition self-start"
    >
      ← Volver al listado
    </button>
  </div>
</div>

  );
};

export default Detalles;
