// Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/LOGO.png';
import phone from '../assets/icons8-phone-50.png';
import whats from '../assets/icons8-whatsapp-50.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Tira superior */}
      <div className="h-14 bg-blueking text-sm px-4 py-1 flex justify-start">
        <img src={phone} alt="phone" className="h-5 w-auto" />
        <span className='!text-white'>618 818 4002</span>
        <img src={whats} alt="phone" className="h-5 w-auto" />
        <span className='!text-white'>618 818 4002</span>
      </div>
      
      {/* Barra de navegación */}
      <nav className="h-28 bg-white shadow text-bg w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

          {/* Logo con la imagen importada */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-32 w-auto mt-11" />
          </div>
          
          <div className="hidden md:flex space-x-12 mr-44 pt-9">
            <Link to="/" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">INICIO</Link>

            <div className="relative group"> {/* Contenedor para el dropdown */}
              <button className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">
                OFERTA EDUCATIVA
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-20 group-focus-within:block">
                <div className="space-y-2 py-2">
                  <Link to="/preescolar" className="block px-4 py-2 text-letter hover:bg-gray-100">PREESCOLAR</Link>
                  <Link to="/primaria" href="#program2" className="block px-4 py-2 text-letter hover:bg-gray-100">PRIMARIA</Link>
                  <Link to="/secundaria" href="#program3" className="block px-4 py-2 text-letter hover:bg-gray-100">SECUNDARIA</Link>
                  <Link to="/preparatoria" href="#program3" className="block px-4 py-2 text-letter hover:bg-gray-100">PREPARATORIA</Link>
                </div>
              </div>
            </div>


            <Link to="/nosotros" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">NOSOTROS</Link>
            <Link to="/contacto" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">CONTACTO</Link>
          </div>

          {/* Botón de menú para pantallas pequeñas */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden">
            <a href="#Inicio" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">Inicio</a>
            <a href="#Oferta" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">Oferta</a>
            <a href="#Nosotros" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">Nosotros</a>
            <a href="#Contacto" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">Contacto</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;


