import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="container center-nav mt-5">
            <div className=" btn-group">
               <Link to='/' className="btn btn-primary btn-lg tamaño" >Inicio</Link> 
               <Link to='/calculadora' className="btn btn-secondary btn-lg tamaño" >Calculadora</Link> 
               <Link to='/calcularFyC' className="btn btn-secondary btn-lg tamaño" >CalcularFyC</Link> 
               <Link to='/formulario' className="btn btn-success btn-lg tamaño" >Formuario</Link> 
            </div>
        </div>
    )
};