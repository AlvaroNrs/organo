import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*Renderizando um componente
  Em execução, o StrictMode não faz nada. Mas, em ambiente de desenvolvimento, ajuda a prevenir erros
  e também a se terem mensagens de erro mais amigáveis  (através do Console do Navegador) */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
