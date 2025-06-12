import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import FooterT from "./components/Footer/FooterT.jsx";
// import Navigation from "./components/Navigation/Navigation.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
      <FooterT/>
    </BrowserRouter>
  </React.StrictMode>
);
