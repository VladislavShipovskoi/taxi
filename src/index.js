import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {store} from "./store/store";
import "@fontsource/roboto";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
