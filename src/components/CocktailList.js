// Importa la biblioteca React, los componentes 'Cocktail' y 'Loading', y la función 'useGlobalContext' desde el contexto
import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

// Crea un componente funcional llamado 'CocktailList'
const CocktailList = () => {
  // Utiliza 'useGlobalContext' para obtener acceso al estado de 'cocktails' y 'loading' desde el contexto
  const { cocktails, loading } = useGlobalContext();

  // Si se está cargando, muestra el componente de carga 'Loading'
  if (loading) {
    return <Loading />;
  }

  // Si no hay cócteles para mostrar, muestra un mensaje
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  // Renderiza la sección de lista de cócteles
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {/* Mapea la lista de cócteles y renderiza un componente 'Cocktail' para cada uno */}
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

// Exporta el componente 'CocktailList' para que pueda ser utilizado en otros lugares de la aplicación
export default CocktailList;
