import React, { useState, useEffect } from 'react';

import img1 from '../assets/Imagen1.png';
import img2 from '../assets/Imagen2.png';
import img3 from '../assets/Imagen3.png';

import pres from '../assets/pre.jpg';

import alum from '../assets/prom1.jpg';
import sec from '../assets/sec.jpg';
import prim from '../assets/prim.jpg';



const images = [img1, img2, img3];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative w-screen h-screen pt-10 overflow-hidden flex flex-col items-center">
    <div className="relative w-full h-full py-10"> {/* Eliminé el py-10 del contenedor externo y lo puse aquí */}
        {images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
        ))}

        {/* Dots de navegación */}
    <div   div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
            <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            style={{ transition: 'background-color 0.3s ease' }}
            ></button>
        ))}
        </div>
    </div>
    </div>

      {/* Div adicional debajo del carrusel */}
      <div className="py-12 px-10 text-black w-full text-2xl  font-semibold text-center">
        <p>Tu hijo recibirá una educación de calidad con atención personalizada, fomentando su crecimiento académico y emocional en un ambiente de valores.</p>
      </div>   
          
        <section className="text-black body-font">
            <div className="container px-8 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      
                <div className="sm:w-1/2 mb-10 px-8">
                    <div className="rounded-lg overflow-hidden h-96"> {/* Ajusta la altura aquí */}
                    <a 
                        href="" 
                        target="_blank" 
                     rel="noopener noreferrer"
                        className="transform transition duration-200 hover:scale-110 hover:opacity-80"
                    >
                        <img src={pres} alt="preescolar" className="object-cover object-center h-full w-full" />
                    </a>
                    </div>
                    <h2 className="title-font text-2xl font-semibold text-black mt-6 mb-3">PREESCOLAR</h2>
                </div>

                <div className="sm:w-1/2 mb-10 px-8">
                    <div className="rounded-lg overflow-hidden h-96"> {/* Ajusta la altura aquí */}
                    <a 
                     href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transform transition duration-200 hover:scale-110 hover:opacity-80"
                    >
                        <img src={prim} alt="primaria" className="object-cover object-center h-full w-full" />
                    </a>
                    </div>
                    <h2 className="title-font text-2xl font-semibold text-black mt-6 mb-3">PRIMARIA</h2>
                </div>

                <div className="sm:w-1/2 mb-10 px-8">
                    <div className="rounded-lg overflow-hidden h-96"> {/* Ajusta la altura aquí */}
                    <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transform transition duration-200 hover:scale-110 hover:opacity-80"
                    >
                        <img src={sec} alt="secundaria" className="object-cover object-center h-full w-full" />
                    </a>
                    </div>
                    <h2 className="title-font text-2xl font-semibold text-black mt-6 mb-3">SECUNDARIA</h2>
                </div>

                <div className="sm:w-1/2 mb-10 px-8">
                    <div className="rounded-lg overflow-hidden h-96"> {/* Ajusta la altura aquí */}
                     <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="transform transition duration-200 hover:scale-110 hover:opacity-80"
                    >
                        <img src={alum} alt="preparatoria" className="object-cover object-center h-full w-full" />
                    </a>
                    </div>
                    <h2 className="title-font text-2xl font-semibold text-black mt-6 mb-3">PREPARATORIA</h2>
                </div>

                </div>
            </div>
        </section>

    </>
  );
};

export default Inicio;