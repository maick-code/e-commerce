import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext'

// Créez un root avec ReactDOM.createRoot et utilisez render pour rendre votre application
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, passez une fonction pour enregistrer les résultats
reportWebVitals(console.log);

// Vous n'avez pas besoin de reportWebVitals(console.log) si vous ne voulez pas mesurer les performances
// Vous pouvez également commenter cette ligne si elle n'est pas nécessaire pour votre application
