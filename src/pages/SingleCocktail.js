// Importa la biblioteca React, el componente 'Loading', 'useParams' y 'Link' de React Router DOM
import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

// Define la URL de la API de cócteles para obtener detalles de un cóctel específico
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// Crea un componente funcional llamado 'SingleCocktail'
const SingleCocktail = () => {
  // Utiliza 'useParams' para obtener el parámetro 'id' de la URL
  const { id } = useParams();

  // Define estados para el componente
  const [loading, setLoading] = React.useState(false); // Indica si se están cargando datos
  const [cocktail, setCocktail] = React.useState(null); // Almacena los detalles del cóctel

  // Utiliza 'useEffect' para cargar los detalles del cóctel cuando se monta el componente o cuando cambia 'id'
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  // Renderiza el componente de carga si 'loading' es true
  if (loading) {
    return <Loading />;
  }

  // Renderiza un mensaje si no hay detalles de cócteles para mostrar
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  // Extrae los detalles del cóctel del estado 'cocktail'
  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  // Renderiza los detalles del cóctel en la página
  return (
    <section className='section cocktail-section'>
      {/* Crea un enlace (Link) que redirige a la página de inicio ('/') */}
      <Link to="/" className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

// Exporta el componente 'SingleCocktail' para que pueda ser utilizado en otros lugares de la aplicación
export default SingleCocktail;
