import React, { useState, useEffect } from 'react';
import CardCarta from '../Components/CardCarta/CardCarta';

const Favoritos = () => {
  const [favoritas, setFavoritas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errores, setErrores] = useState([]);

  useEffect(() => {
    const obtenerCartasFavoritas = async () => {
      const storedFavorites = localStorage.getItem('favoritas');
      const favoriteIds = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (favoriteIds.length === 0) {
        setLoading(false);
        return;
      }

      const cartasObtenidas = [];
      const idsConError = [];

      await Promise.all(
        favoriteIds.map(async (id) => {
          try {
            const response = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`);
            if (!response.ok) throw new Error();

            const data = await response.json();
            if (data.card) {
              cartasObtenidas.push(data.card);
            } else {
              idsConError.push(id);
            }
          } catch {
            idsConError.push(id);
          }
        })
      );

      setFavoritas(cartasObtenidas);
      setErrores(idsConError);
      setLoading(false);
    };

    obtenerCartasFavoritas();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Cargando tus cartas favoritas...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Tus Cartas Favoritas</h2>

      {errores.length > 0 && (
        <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
          No se pudieron cargar algunas cartas. Es posible que ya no existan.
        </div>
      )}

      {favoritas.length === 0 ? (
        <p className="text-center text-white">Aún no has agregado ninguna carta válida a tus favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritas.map((carta) => {
            const secureImageUrl = carta.imageUrl?.startsWith('http:')
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
      )}
    </div>
  );
};

export default Favoritos;
