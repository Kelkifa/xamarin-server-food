import './index.css';
import './components/customScss/index.scss';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Anime from './views/Anime.js';
import App from './App';
import Document from './views/Document.js';
import Home from './views/Home.js';
import Navbar from './components/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './views/Test.js';
import reportWebVitals from './reportWebVitals';

// Views






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
