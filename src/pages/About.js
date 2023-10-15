// Importa la biblioteca React
import React from 'react';

// Crea un componente funcional llamado 'About'
const About = () => {
  return (
    // Renderiza una sección que contiene información "Acerca de nosotros"
    <section className='section about-section'>
      <h1 className='section-title'>about us</h1>
      <p>This project was created in order to practice React concepts</p>
    </section>
  );
}

// Exporta el componente 'About' para que pueda ser utilizado en otros lugares de la aplicación
export default About;
