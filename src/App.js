// Importa las bibliotecas necesarias de React y React Router DOM
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa las páginas de tu aplicación
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

// Importa el componente Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    // Utiliza React Router DOM para configurar las rutas de tu aplicación
    <Router>
      {/* Renderiza el componente Navbar, que será mostrado en la parte superior de todas las páginas */}
      <Navbar />
      <Routes>
        {/* Define las rutas y sus componentes asociados */}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
