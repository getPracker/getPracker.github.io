import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './src/app/App';
import store from './src/app/store';
import {BrowserRouter} from "react-router-dom";
import '../public/index.css';


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


