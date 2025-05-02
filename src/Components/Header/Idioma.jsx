import { useTranslation } from 'react-i18next';

const Idioma = () => {
  const { i18n } = useTranslation();

  const cambiarIdioma = (e) => {
    const nuevoIdioma = e.target.value;
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem('idioma', nuevoIdioma);
  };

  return (
    <select
      onChange={cambiarIdioma}
      value={i18n.language}
      className="bg-gray-800 text-white border border-gray-700 p-1 rounded"
    >
      <option value="es">Español</option>
      <option value="en">Inglés</option>
    </select>
  );
};

export default Idioma;
