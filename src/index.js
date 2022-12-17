import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "@fontsource/roboto";

import App from './App';
import {store} from "./store";

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
