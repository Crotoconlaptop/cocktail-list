// Importa la biblioteca React y los componentes 'CocktailList' y 'SearchForm'
import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

// Crea un componente funcional llamado 'Home'
const Home = () => {
  return (
    // Renderiza la página principal de tu aplicación
    <main>
      {/* Renderiza el componente 'SearchForm', que es utilizado para realizar búsquedas de cócteles */}
      <SearchForm />
      {/* Renderiza el componente 'CocktailList', que mostrará la lista de cócteles */}
      <CocktailList />
    </main>
  );
}

// Exporta el componente 'Home' para que pueda ser utilizado en otros lugares de la aplicación
export default Home;
