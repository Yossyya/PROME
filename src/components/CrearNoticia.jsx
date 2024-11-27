import React, { useState } from 'react';

function CrearNoticia() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagenUrl, setImagenUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        if (imagen) {
            formData.append('imagen', imagen);  // Solo si hay imagen
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/noticias', {
                method: 'POST',
                body: formData,
            });
    
            // Verifica si la respuesta es ok
            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
                return;
            }
    
            const data = await response.json();  // Aquí se espera un JSON válido
            alert('Noticia creada con éxito');
            setTitulo('');
            setDescripcion('');
            setImagen(null);
        } catch (error) {
            console.error('Error al crear la noticia:', error);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImagen(e.target.files[0])}
                    required
                />
                <button type="submit">Crear Noticia</button>
            </form>

            {/* Mostrar la imagen si existe */}
            {imagenUrl && <img src={imagenUrl} alt="Imagen de la noticia" />}
        </div>
    );
}

export default CrearNoticia;
