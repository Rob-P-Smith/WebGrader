import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import TitleBar from "./Components/TitleBar/TitleBar.jsx";
import FileETL from "./Components/FileETL/FileETL.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TitleBar />
    <FileETL />
    <App />
  </React.StrictMode>
);
