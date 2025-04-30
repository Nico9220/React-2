const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Magic SPA. Todos los derechos reservados.
          </div>
  
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Contacto</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;