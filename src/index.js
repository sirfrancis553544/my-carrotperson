import React from "react";
import ReactDOM from "react-dom";
import "./Navbar/navbar.css";
import "./Collection/styles.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from "./Pages/Mint";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="mint" element={<Mint />} />
          <Route
            path="*"
            element={
              <index style={{ padding: "1rem" }}>
                <p
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "5%",
                    width: "30em",
                    padding: 100,
                    borderRadius: 24,
                  }}
                >
                  404 | Page could not be found!
                </p>
              </index>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
