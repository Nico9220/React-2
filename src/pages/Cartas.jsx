import React, { useEffect, useState } from 'react';
import ListaCartas from '../Components/ListaCartas/ListaCartas';
import { useTranslation } from 'react-i18next';

const ListaCartasPage = () => {
  const { t } = useTranslation();

  const [cartas, setCartas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerCartas = async () => {
      try {
        const respuesta = await fetch('https://api.magicthegathering.io/v1/cards');
        const data = await respuesta.json();

        const cartasAdaptadas = data.cards
          .filter(c => c.imageUrl && c.name && c.type && c.rarity)
          .map(c => ({
            id: c.id,
            name: c.name,
            image_uris: {
              normal: c.imageUrl.replace('http://', 'https://'),
            },
            type_line: c.type,
            rarity: c.rarity,
          }));

        setCartas(cartasAdaptadas);
        setCargando(false);
      } catch (err) {
        setError(err);
        setCargando(false);
      }
    };

    obtenerCartas();
  }, []);

  if (cargando) return <p className="text-white text-center mt-10">Cargando cartas...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-4xl text-white text-center my-6 font-bold">{t('Cartas')}</h1>
      
      <ListaCartas cartas={cartas} />
    </div>
  );
};

export default ListaCartasPage;
