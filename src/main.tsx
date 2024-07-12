import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
