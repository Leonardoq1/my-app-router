import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculadora from "./components/calculadora";
import CalcularFyC from "./components/calcularFyC";
import Formulario from "./components/formulario";
import App from "./App";


export default function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/calcularFyC" element={<CalcularFyC />} />
                <Route path="/formulario" element={<Formulario />} />
            </Routes>
        </Router>
    )
}