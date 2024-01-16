import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalStyle from 'components/styles/GlobalStyles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-fitness-app">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
