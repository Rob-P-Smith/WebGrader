import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import TitleBar from "./Components/TitleBar/TitleBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TitleBar />
    <App />
  </React.StrictMode>
);
