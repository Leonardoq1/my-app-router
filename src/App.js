// import {Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <body className="fondo">
      <div>
        <div className="sombra borde-blue">
          <h1 className="titulo">Brayan Leonardo Alvarez Reyes - TI51BIS</h1>
        </div>
        <Menu />
      </div>     
    </body>
    
  );
}

export default App;
