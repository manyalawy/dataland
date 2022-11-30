import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app-container">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
