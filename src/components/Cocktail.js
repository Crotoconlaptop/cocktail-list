// Importa la biblioteca React y el componente Link de React Router DOM
import React from 'react';
import { Link } from 'react-router-dom';

// Crea un componente funcional llamado 'Cocktail' que recibe propiedades como argumentos
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    // Renderiza un artículo que representa un cóctel
    <article className='cocktail'>
      <div className='img-container'>
        {/* Renderiza la imagen del cóctel con el nombre como atributo 'alt' */}
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        {/* Renderiza el nombre del cóctel */}
        <h3>{name}</h3>
        {/* Renderiza el tipo de vaso */}
        <h4>{glass}</h4>
        {/* Renderiza información sobre el cóctel */}
        <p>{info}</p>
        {/* Crea un enlace (Link) que redirige a la página de detalles del cóctel utilizando el ID */}
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
}

// Exporta el componente 'Cocktail' para que pueda ser utilizado en otros lugares de la aplicación
export default Cocktail;
