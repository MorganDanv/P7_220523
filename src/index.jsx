import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import AppRoutes from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);
