import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import AppRoutes from "./routes";
import "./index.css";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <PageContainer>
        <Header />
        <AppRoutes />
      </PageContainer>
      <Footer />
    </Router>
  </React.StrictMode>
);
