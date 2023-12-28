import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/Store';
import { persistor } from './redux/Store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
