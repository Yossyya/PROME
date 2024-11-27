import React from 'react';
import { useState, useEffect } from 'react';

export function Chatbot() {
    const [chatVisible, setChatVisible] = useState(false);
    const [output, setOutput] = useState('');
    const [offerVisible, setOfferVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const handleToggleChat = () => {
        setChatVisible(!chatVisible);
    };

    const handleButtonClick = (input: string) => {
        setOutput(''); // Limpiar el output

        // Respuestas predefinidas
        if (input === 'ADMISION') {
            setOutput(`
                <div class="user-message">${input}</div>
                <div class="bot-message">
                    <ul>
                        <li>Identificación del nivel educativo: Determina si tu hijo(a) ingresará a preescolar, primaria, secundaria o preparatoria. Esto nos ayudará a proporcionarte la información correcta.</li>
                        <li>Solicitud de información: Solicita más detalles sobre el nivel educativo que te interesa, incluyendo los costos de inscripción, colegiatura, horarios y requisitos específicos.</li>
                        <li>Inscripción: Una vez que hayas reunido la documentación requerida y recibido la información, puedes proceder con la inscripción en nuestras oficinas.</li>
                    </ul>
                </div>
            `);
        } else if (input === 'BENEFICIOS') {
            setOutput(`
                <div class="user-message">${input}</div>
                <div class="bot-message">
                    <ul>
                        <li>Educación personalizada: Grupos reducidos que permiten una atención más cercana y personalizada para cada estudiante.</li>
                        <li>Alta calidad académica: Profesores altamente capacitados y programas académicos actualizados.</li>
                        <li>Ambiente de valores: Enfocamos nuestra enseñanza en valores como la ética, la responsabilidad y el compromiso social.</li>
                        <li>Desarrollo integral: Nos aseguramos de que los estudiantes crezcan no solo académicamente, sino también en su desarrollo emocional, físico y social.</li>
                        <li>Trayectoria y prestigio: Con más de 50 años de experiencia, nos hemos consolidado como una institución de prestigio.</li>
                        <li>Enfoque en habilidades del futuro: Promovemos el aprendizaje de tecnología, creatividad y habilidades blandas esenciales para los retos del siglo XXI.</li>
                    </ul>
                </div>
            `);
        } else if (input === 'OFERTA EDUCATIVA') {
            setOfferVisible(true);
            setButtonsVisible(false);
            setOutput(`
                <div class="user-message">${input}</div>
                <div class="bot-message">Selecciona un nivel educativo.</div>
            `);
        }
    };

    const handleSubButtonClick = (level: string) => {
        let response = '';
        // Respuestas específicas para cada nivel
        if (level === 'PREESCOLAR') {
            response = `
                <div class="bot-message">
                    <ul>
                        <li>Educación integral para niños de 3 a 6 años.</li>
                        <li>Desarrollo de habilidades motrices, cognitivas y emocionales.</li>
                        <li>Enfoque en la creatividad, la comunicación y los primeros pasos en la lectoescritura y matemáticas.</li>
                    </ul>
                </div>
            `;
        } else if (level === 'PRIMARIA') {
            response = `
                <div class="bot-message">
                    <ul>
                        <li>Educación primaria de 1° a 6° grado.</li>
                        <li>Fomento del pensamiento crítico, la creatividad y las habilidades sociales.</li>
                        <li>Programas académicos alineados con los estándares nacionales e internacionales.</li>
                    </ul>
                </div>
            `;
        } else if (level === 'SECUNDARIA') {
            response = `
                <div class="bot-message">
                    <ul>
                        <li>- Educación para adolescentes de 1° a 3° de secundaria.</li>
                        <li>- Preparación para enfrentar retos académicos y personales con un enfoque en valores y habilidades tecnológicas.</li>
                        <li>- Actividades extracurriculares y programas de desarrollo emocional.</li>
                    </ul>
                </div>
            `;
        } else if (level === 'PREPARATORIA') {
            response = `
                <div class="bot-message">
                    <ul>
                        <li>- Educación preparatoria con enfoque en preparar a los estudiantes para el ingreso a universidades de prestigio.</li>
                        <li>- Formación académica sólida en ciencias, humanidades y tecnología.</li>
                        <li>- Desarrollo de habilidades de liderazgo, ética y responsabilidad social.</li>
                    </ul>
                </div>
            `;
        }
        setOutput(`
            <div class="user-message">${level}</div>
            ${response}
        `);

        setOfferVisible(false);
        setButtonsVisible(true);
    };

    return (
        <div>
            <button id="chat-toggle" onClick={handleToggleChat}>
                {chatVisible ? 'Ocultar' : 'Preguntas Frecuentes'}
            </button>
            {chatVisible && (
                <div id="chatbot-container">
                    <div id="chat-output" dangerouslySetInnerHTML={{ __html: output }}></div>
                    {buttonsVisible && (
                        <div id="button-container">
                            <button className="button-option" onClick={() => handleButtonClick('ADMISION')}>ADMISIÓN</button>
                            <button className="button-option" onClick={() => handleButtonClick('BENEFICIOS')}>BENEFICIOS</button>
                            <button className="button-option" onClick={() => handleButtonClick('OFERTA EDUCATIVA')}>OFERTA EDUCATIVA</button>
                        </div>
                    )}
                    {offerVisible && (
                        <div id="oferta-container">
                            <button className="sub-button" onClick={() => handleSubButtonClick('PREESCOLAR')}>PREESCOLAR</button>
                            <button className="sub-button" onClick={() => handleSubButtonClick('PRIMARIA')}>PRIMARIA</button>
                            <button className="sub-button" onClick={() => handleSubButtonClick('SECUNDARIA')}>SECUNDARIA</button>
                            <button className="sub-button" onClick={() => handleSubButtonClick('PREPARATORIA')}>PREPARATORIA</button>
                        </div>
                    )}
                    <div id="info-container" className="info"></div>
                </div>
            )}
        </div>
    );
}
export default Chatbot;
