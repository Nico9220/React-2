import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      Inicio: "Inicio",
      Favoritos: "Favoritos",
      Cartas: "Cartas",
      // Otros textos...
    },
  },
  en: {
    translation: {
      Inicio: "Home",
      Favoritos: "Favorites",
      Cartas: "Cards",
      // Otros textos...
    },
  },
};

// Si hay idioma guardado, lo usamos; si no, usamos español.
const idiomaGuardado = localStorage.getItem('idioma') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: idiomaGuardado,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

