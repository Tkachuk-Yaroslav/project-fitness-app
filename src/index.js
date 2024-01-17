import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import GlobalStyle from 'components/styles/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
// import Loader from 'components/Loader';
import { Toaster } from 'react-hot-toast';
// import Error from 'components/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-fitness-app">
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          {/* <Error /> */}
          <Toaster />
          {/* <Loader /> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
