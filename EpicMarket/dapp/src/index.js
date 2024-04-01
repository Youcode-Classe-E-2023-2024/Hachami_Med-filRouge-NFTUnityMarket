import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";

import { Web3ReactProvider } from "@web3-react/core";
import { ethers , Web3Provider } from 'ethers';
// import Web3 from 'web3'


import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));


// ...

function getLibrary(provider) {
  const library = new ethers.BrowserProvider(provider);
  library.pollingInterval = 8000;
  return library;
}





root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <React.Fragment>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </React.Fragment>
    </Web3ReactProvider>
  </Provider>

);

