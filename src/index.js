// Importa las bibliotecas necesarias de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa tu hoja de estilo principal y el componente 'App' que creaste
import './index.css';
import App from './App';

// Importa el contexto de la aplicación desde './context' (puede ser un archivo de contexto personalizado)
import { AppProvider } from './context';

// Utiliza el método 'createRoot' de ReactDOM para crear un punto de entrada en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en el elemento con el ID 'root' en el DOM
root.render(
  // Utiliza 'React.StrictMode' para habilitar el modo estricto de React
  <React.StrictMode>
    {/* Envuelve tu aplicación con el contexto proporcionado por 'AppProvider' */}
    <AppProvider>
      {/* Renderiza el componente 'App', que es el componente principal de tu aplicación */}
      <App />
    </AppProvider>
  </React.StrictMode>
);
