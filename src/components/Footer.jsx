
import React from 'react';

import phone from '../assets/icons8-phone-50.png';
import mail from '../assets/icons8-mail-50.png';
import pin from '../assets/icons8-pin-50.png';


import face from '../assets/icons8-facebook-50.png';
import insta from '../assets/icons8-instagram-64.png';




const Footer = () => {
  return (
    <footer className="h-64 bg-blueking text-white py-4">
  <div className="container mx-auto text-left ml-24">
    {/* Contenedor principal con mayor espacio vertical */}
    <div className="flex flex-col items-start space-y-6">
      <div className="flex items-center">
        <p className="text-lg font-bold">COLEGIO PROMEDAC</p>
      </div>

      {/* Íconos de redes sociales justo debajo del nombre del colegio */}
     
      <div className="flex space-x-4 mt-2">
        <a 
          href="https://www.facebook.com/PromedacColegio/?locale=es_LA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition duration-200 hover:scale-110 hover:opacity-80"
        >
          <img src={face} alt="Facebook" className="h-6 w-6" />
        </a>
        <a 
          href="https://www.instagram.com/promedac_colegio/?hl=es" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition duration-200 hover:scale-110 hover:opacity-80"
        >
          <img src={insta} alt="Instagram" className="h-6 w-6" />
        </a>
        <a 
          href="https://www.facebook.com/PrepaPromedac/?locale=es_LA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition duration-200 hover:scale-110 hover:opacity-80"
        >
          <img src={face} alt="Facebook" className="h-6 w-6" />
        </a>
      </div>

      {/* Información de contacto */}
      <div className="flex items-center space-x-4 mt-6">
        <img src={phone} alt="phone" className="h-5 w-auto mr-4" />
        <p>618 818 05 11</p>
      </div>
      <div className="flex items-center space-x-4">
        <img src={mail} alt="mail" className="h-5 w-auto mr-4" />
        <p>PROMEDAC@GMAIL.COM</p>
      </div>
      <div className="flex items-center space-x-4">
        <img src={pin} alt="pin" className="h-5 w-auto mr-4" />
        <a 
          href="https://maps.app.goo.gl/baUgBorD6iN7BAzTA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline hover:text-gray-300 transition duration-200 ease-in-out"
        >
          CARTAGENA 116 FRACC. GUADALUPE
        </a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
