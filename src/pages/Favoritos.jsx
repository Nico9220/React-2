import React, { useState, useEffect } from 'react';
import CardCarta from '../Components/CardCarta/CardCarta';

const Favoritos = () => {
  const [favoritas, setFavoritas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerCartasFavoritas = async () => {
      try {
        const storedFavorites = localStorage.getItem('favoritas');
        const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : [];
        if (favoriteIds.length > 0) {
          const fetchedCartas = await Promise.all(
            favoriteIds.map(async (id) => {
              const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
              if (!response.ok) {
                throw new Error(`No se pudo obtener la carta con ID: ${id}`);
              }
              const data = await response.json();
              return data.card;
            })
          );
          setFavoritas(fetchedCartas);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerCartasFavoritas();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Cargando tus cartas favoritas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error al cargar las cartas favoritas: {error}</p>;
  }

  if (favoritas.length === 0) {
    return <p className="text-center text-white">Aún no has agregado ninguna carta a tus favoritos.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Tus Cartas Favoritas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favoritas.map((carta) => {
          const secureImageUrl = carta.imageUrl && carta.imageUrl.startsWith('http:')
            ? carta.imageUrl.replace('http:', 'https:')
            : carta.imageUrl;

          return (
            <CardCarta
              key={carta.id}
              id={carta.id}
              nombre={carta.name}
              imagen={secureImageUrl}
              tipo={carta.type}
              rareza={carta.rarity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favoritos;