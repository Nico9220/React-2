import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      Inicio: "Inicio",
      Favoritos: "Favoritos",
      Cartas: "Cartas",
      add_to_favorites: "Agregar a Favoritos",
      remove_from_favorites: "Remover de Favoritos",
      fondos_pantalla: "Fondos de Pantalla",
      cargando_carta: "Cargando carta...",
      poder_resistencia: "Poder/Resistencia",
      volver_al_listado: "← Volver al listado",
      cargando_favoritos: "Cargando tus cartas favoritas...",
      titulo_favoritos: "Tus Cartas Favoritas",
      error_cartas: "No se pudieron cargar algunas cartas. Es posible que ya no existan.",
      sin_favoritos: "Aún no has agregado ninguna carta válida a tus favoritos.",
      bienvenido: "¡Bienvenido!",
      // Otros textos...
    },
  },
  en: {
    translation: {
      Inicio: "Home",
      Favoritos: "Favorites",
      Cartas: "Cards",
      add_to_favorites: "Add to Favorites",
      remove_from_favorites: "Remove from Favorites",
      DESCUBRIR: "DISCOVER",
      artículos: "Articles",
      formatos: "Formats",
      reglas: "Rules",
      fondos_pantalla: "Wallpapers",
      cargando_carta: "Loading card...",
      tipo: "Type",
      rareza: "Rarity",
      set: "Set",
      texto: "Text",
      flavor_text: "Flavor text",
      poder_resistencia: "Power/Toughness",
      artista: "Artist",
      volver_al_listado: "← Back to list",
      cargando_favoritos: "Loading your favorite cards...",
      titulo_favoritos: "Your Favorite Cards",
      error_cartas: "Some cards couldn't be loaded. They may no longer exist.",
      sin_favoritos: "You haven't added any valid cards to your favorites yet.",
      bienvenido: "Welcome!",
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

