// Importa las bibliotecas necesarias de React y useEffect
import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// Define la URL de la API de cócteles que utilizarás para buscar cócteles
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// Crea un contexto de la aplicación
const AppContext = React.createContext();

// Crea un componente llamado AppProvider que envolverá a toda tu aplicación
const AppProvider = ({ children }) => {
  // Define estados iniciales
  const [loading, setLoading] = useState(true); // Indica si la aplicación está cargando datos
  const [searchTerm, setSearchTerm] = useState('a'); // Almacena el término de búsqueda del cóctel
  const [cocktails, setCocktails] = useState([]); // Almacena la lista de cócteles recuperados

  // Define una función asincrónica para buscar cócteles
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  // Utiliza useEffect para llamar a fetchDrinks cuando cambia searchTerm o fetchDrinks
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  // Proporciona el contexto y los estados a los componentes secundarios
  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// Exporta una función personalizada para utilizar el contexto en otros componentes
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// Exporta el contexto y el componente AppProvider
export { AppContext, AppProvider };
