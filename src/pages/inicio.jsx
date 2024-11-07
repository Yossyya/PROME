import React, { useState, useEffect } from 'react';

import img1 from '../assets/Imagen1.png';
import img2 from '../assets/Imagen2.png';
import img3 from '../assets/Imagen3.png';

import pres from '../assets/pre.jpg';

import alum from '../assets/prom1.jpg';
import sec from '../assets/sec.jpg';
import prim from '../assets/prim.jpg';

import ejm1 from '../assets/septiembre.jpg';
import ejm2 from '../assets/botarga.jpg';
import ejm3 from '../assets/8m.jpg';

import ox from '../assets/OXFORD.png';

import { motion } from 'framer-motion';

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
      <div className="relative w-full h-full py-10">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              transition: { duration: 1 },
            }}
            exit={{ opacity: 0 }}
          />
        ))}

        {/* Dots de navegación */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        <div className="py-12 px-10 text-black w-full text-2xl  font-semibold text-center">
            <p>Ayuda a tus hijos a desarrollar habilidades académicas y emocionales para enfrentar los retos del futuro. Ofrecemos un enfoque integral que combina aprendizaje personalizado y valores, garantizando que estén preparados para su éxito personal y profesional.</p>
            
        </div>   
        <div className='text-center py-8 text-xl'>
            <button className='bg-bluebutton text-white py-3 px-12 rounded-lg font-medium'>CONTACTANOS</button>  
            {/* NECESARIO AGREGAR 'A' PARA DIRIGUIR A PAGINA CONTACTO */} 
        </div>
        

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-4xl text-center font-semibold text-black mb-10">NOTICIAS</h1>

            {/* Main Article */}
            <div className="flex flex-wrap w-full bg-gray-100 mb-6">
              <div className="w-1/2 p-6">
                <img
                  alt="20 de Noviembre"
                  className="w-full h-full object-cover rounded-md"
                  src={ejm1}
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">16 DE SEPTIEMBRE</h2>
                <p className="text-gray-700 leading-relaxed">
                  Conmemoración de la Revolución Mexicana. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficiturLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur..
                </p>
              </div>
            </div>

            {/* Two Smaller Articles */}
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="bg-gray-100 p-6 flex flex-col items-center">
                  <img
                    alt="8 de Agosto"
                    className="w-full object-cover h-64 mb-4 rounded-md"
                    src={ejm3}
                  />
                  <h2 className="text-xl font-semibold mb-2">8 DE MARZO</h2>
                  <p className="text-gray-700 text-center">
                    Inicio de clases. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                  </p>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="bg-gray-100 p-6 flex flex-col items-center">
                  <img
                    alt="Mascotas del Colegio"
                    className="w-full object-cover h-64 mb-4 rounded-md"
                    src={ejm2}
                  />
                  <h2 className="text-xl font-semibold mb-2">CARRERA 2023</h2>
                  <p className="text-gray-700 text-center">
                    Actividades escolares con mascotas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 py-24">
            <h1 class="text-4xl font-semibold text-black text-center mb-10">CONVENIOS</h1>
            
            <div class="flex flex-wrap bg-white rounded-lg overflow-hidden shadow-lg">
              
             
              <div class="w-full md:w-1/2">
                <img src={ox}  alt="Oxford Quality" class="object-cover w-full h-full"/>
              </div>
              
              
              <div class="w-full md:w-1/2 bg-bluebutton p-12 flex flex-col justify-center text-white">
                <h2 class="text-2xl font-semibold mb-6">Acreditación Oxford Quality</h2>
                <p class="leading-relaxed mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur, orci ipsum tincidunt tortor, at convallis orci felis at libero. Sed scelerisque vel odio ac tristique.
                </p>
                <a src='' href="https://elt.oup.com/feature/global/oxford-quality/?srsltid=AfmBOoqsUQhBocHn-X5G-gTRaZFjRRG1f0nMxHBBtm_6lpRwfOyXoJ-X&cc=pl&selLanguage=pl" class="inline-flex items-center px-6 py-2 text-white bg-bluebutton font-semibold rounded border-2 border-white hover:text-bluebutton hover:bg-white transition duration-300 mx-auto">
                  SABER MAS...
                </a>

              </div>
              
            </div>
          </div>
        </section>


          

    </>
  );
};

export default Inicio;