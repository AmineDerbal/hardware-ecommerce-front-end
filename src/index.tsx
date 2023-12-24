import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import App from './App';
import store from './redux/Store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
);
