// Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/LOGO.png';
import phone from '../assets/icons8-phone-50.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Tira superior */}
      <div className="h-14  bg-blueking text-sm px-4 py-1 flex justify-start">
        <img src={phone} alt="phone" className="h-5 w-auto" />
        <span className='!text-white'>618111111</span>
      </div>
      
      {/* Barra de navegación */}
      <nav className=" h-28 bg-white shadow text-bg w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

           {/* Logo con la imagen importada */}
           <div className="flex items-center">
            <img src={logo} alt="logo" className="h-32 w-auto mt-11" />
          </div>
          
          <div className="hidden md:flex space-x-12 mr-44 pt-9">
            <a href="#about" className="text-letter text-xl font-bold px-3 py-2 rounded-md">INICIO</a>
  
            <div className="relative group"> {/* Contenedor para el dropdown */}
              <button className="text-letter text-xl font-bold px-3 py-2 rounded-md">OFERTA EDUCATIVA</button>
    
              {/* Dropdown Menu */}
             <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <a href="#program1" className="block px-4 py-2 text-letter hover:bg-gray-100">PREESCOLAR</a>
                <a href="#program2" className="block px-4 py-2 text-letter hover:bg-gray-100">PRIMARIA</a>
                <a href="#program3" className="block px-4 py-2 text-letter hover:bg-gray-100">SECUNDARIA</a>
                <a href="#program3" className="block px-4 py-2 text-letter hover:bg-gray-100">PREPARATORIA</a>
              </div>
            </div>

            <a href="#home" className="text-letter text-xl font-bold px-3 py-2 rounded-md">NOSOTROS</a>
            <a href="#contact" className="text-letter text-xl font-bold px-3 py-2 rounded-md">CONTACTO</a>
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
            <a href="#home" className="block px-4 py-2 hover:bg-blue-700">Home</a>
            <a href="#about" className="block px-4 py-2 hover:bg-blue-700">About</a>
            <a href="#services" className="block px-4 py-2 hover:bg-blue-700">Services</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-blue-700">Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
