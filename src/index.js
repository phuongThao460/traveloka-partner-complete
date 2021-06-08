import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from "react-redux";
//import store from "./app/store";
//import ListApartment from './components/pages/ListApartment'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
