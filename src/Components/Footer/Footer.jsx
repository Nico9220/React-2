import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-gray-300 py-10 mt-12 border-t border-gray-700 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm justify-items-center-safe">
        {/* Sección: Descubrir */}
        <div>
          <h3 className="text-white font-semibold mb-3 border-b border-orange-500 w-max">
            {t('DESCUBRIR')}
          </h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">{t('artículos')}</a></li>
            <li><a href="#" className="hover:text-white">{t('formatos')}</a></li>
            <li><a href="#" className="hover:text-white">{t('reglas')}</a></li>
            <li><a href="#" className="hover:text-white">{t('fondos_pantalla')}</a></li>
          </ul>
        </div>

        {/* Sección: Magic */}
        <div>
          <h3 className="text-white font-semibold mb-3 border-b border-orange-500 w-max">MAGIC</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">MTG Arena</a></li>
            <li><a href="#" className="hover:text-white">SpellTable</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-white font-semibold mb-3 border-b border-orange-500 w-max">SOCIAL</h3>
          <div className="flex gap-4 mt-2">
            <a href="#"><i className="fab fa-facebook text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl hover:text-white"></i></a>
            <a href="#"><i className="fab fa-youtube text-xl hover:text-white"></i></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-gray-500 text-xs mt-10 px-4">
        © 2025 Magic SPA. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
