// Importa la biblioteca React y el componente Link de React Router DOM, así como la imagen de tu logotipo
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

// Crea un componente funcional llamado 'Navbar'
const Navbar = () => {
  return (
    // Renderiza la barra de navegación
    <nav className='navbar'>
      <div className='nav-center'>
        {/* Crea un enlace que redirige a la página de inicio ('/') */}
        <Link to="/">
          {/* Renderiza la imagen del logotipo con la clase 'logo' */}
          <img src={logo} alt='cocktail logo' className='logo'></img>
        </Link>
        {/* Renderiza una lista de enlaces de navegación */}
        <ul className='nav-links'>
          {/* Enlace a la página de inicio */}
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          {/* Enlace a la página 'About' */}
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Exporta el componente 'Navbar' para que pueda ser utilizado en otros lugares de la aplicación
export default Navbar;
