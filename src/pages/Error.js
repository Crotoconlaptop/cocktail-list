// Importa la biblioteca React y el componente Link de React Router DOM
import React from 'react';
import { Link } from 'react-router-dom';

// Crea un componente funcional llamado 'Error'
const Error = () => {
  return (
    // Renderiza una sección que representa una página de error
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! it's a dead end</h1>
        {/* Renderiza un enlace (Link) que redirige a la página de inicio ('/') */}
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}

// Exporta el componente 'Error' para que pueda ser utilizado en otros lugares de la aplicación
export default Error;
