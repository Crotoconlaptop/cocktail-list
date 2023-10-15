// Importa la biblioteca React y la función 'useGlobalContext' desde el contexto
import React from 'react';
import { useGlobalContext } from '../context';

// Crea un componente funcional llamado 'SearchForm'
const SearchForm = () => {
  // Utiliza 'useGlobalContext' para obtener acceso a la función 'setSearchTerm' desde el contexto
  const { setSearchTerm } = useGlobalContext();

  // Crea una referencia a la entrada de búsqueda para enfocarla automáticamente al cargar la página
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // Define la función 'searchCocktail' que actualiza 'setSearchTerm' con el valor de búsqueda
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  // Define la función 'handleSubmit' que previene la recarga de la página al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // Renderiza el formulario de búsqueda en la sección de búsqueda
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your cocktail</label>
          {/* Renderiza un input de tipo texto que captura el valor de búsqueda y se refiere a la entrada de búsqueda */}
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
}

// Exporta el componente 'SearchForm' para que pueda ser utilizado en otros lugares de la aplicación
export default SearchForm;
