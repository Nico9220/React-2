import React, { useState, useEffect } from 'react';

function DetallesDeCartas() {
  const [cartas, setCartas] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerCartas = async () => {
      try {
        const respuesta = await fetch('https://api.magicthegathering.io/v1/cards');
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const data = await respuesta.json();
        setCartas(data.cards);
        setCargando(false);
      } catch (error) {
        setError(error);
        setCargando(false);
      }
    };

    obtenerCartas();
  }, []);

  if (cargando) {
    return <div>Cargando cartas con imágenes...</div>;
  }

  if (error) {
    return <div>Error al cargar los detalles de las cartas: {error.message}</div>;
  }

  return (
    <div>
      <h1>Cartas</h1>
      <ul>
        {cartas.map(carta => (
          <li key={carta.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9', color:'black'}}>
            <h2 style={{ color: '#337ab7' }}>{carta.name}</h2>
            {carta.manaCost && <p><strong>Costo de Maná:</strong> <span style={{ fontWeight: 'bold' }}>{carta.manaCost}</span></p>}
            {carta.cmc !== undefined && <p><strong>Costo de Maná Convertido:</strong> <span style={{ fontWeight: 'bold' }}>{carta.cmc}</span></p>}
            {carta.colors && carta.colors.length > 0 && <p><strong>Colores:</strong> {carta.colors.map(color => <span key={color} style={{ fontWeight: 'bold', color: getColor(color), marginRight: '5px' }}>{color}</span>)}</p>}
            {carta.type && <p><strong>Tipo:</strong> <span style={{ fontStyle: 'italic' }}>{carta.type}</span></p>}
            {carta.rarity && <p><strong>Rareza:</strong> <span style={{ fontWeight: 'bold' }}>{carta.rarity}</span></p>}
            {carta.set && <p><strong>Set:</strong> <span style={{ fontWeight: 'bold' }}>{carta.set}</span> ({carta.setName})</p>}
            {carta.text && <p><strong>Texto de la Carta:</strong> <br /> <span style={{ whiteSpace: 'pre-line' }}>{carta.text}</span></p>}
            {carta.flavor && <p><strong>Texto de Flavor:</strong> <em style={{ color: '#777' }}>{carta.flavor}</em></p>}
            {carta.power && carta.toughness && <p><strong>Poder/Resistencia:</strong> <span style={{ fontWeight: 'bold' }}>{carta.power}/{carta.toughness}</span></p>}
            {carta.artist && <p><strong>Artista:</strong> <span style={{ fontStyle: 'italic' }}>{carta.artist}</span></p>}
            {carta.number && <p><strong>Número:</strong> {carta.number}</p>}
            {carta.layout && <p><strong>Layout:</strong> {carta.layout}</p>}
            {carta.multiverseid && <p><strong>ID de Multiverso:</strong> {carta.multiverseid}</p>}
            {carta.imageUrl && (
              <div style={{ marginTop: '10px' }}>
                <strong>Imagen:</strong><br />
                <img
                  src={carta.imageUrl.replace('http://', 'https://')}
                  alt={carta.name}
                  style={{ maxWidth: '200px', height: 'auto', border: '1px solid #eee', borderRadius: '3px' }}
                  onError={(e) => {
                    console.error(`Error al cargar la imagen: ${carta.imageUrl}`);
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const parent = e.target.parentNode;
                    if (parent) {
                      parent.innerHTML = 'Imagen no disponible';
                    }
                  }}
                />
              </div>
            )}
            <hr style={{ borderTop: '1px dashed #bbb', margin: '15px 0' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function getColor(color) {
  switch (color) {
    case 'W': return 'yellow';
    case 'U': return 'blue';
    case 'B': return 'black';
    case 'R': return 'red';
    case 'G': return 'green';
    default: return 'inherit';
  }
}

export default DetallesDeCartas;