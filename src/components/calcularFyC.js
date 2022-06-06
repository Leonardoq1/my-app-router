import React from 'react';
import Menu from './menu';

export default function SumaResta() {
  //hook defined
  const [input, setInput] = React.useState({
    num1: "",
    num2: "",
  });

  const [result, setResult] = React.useState();

  //handle input change

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };


  //suma Celsius

  const Celsius = function () {
    setResult(((+input.num1) - 32) * 0.5556 + 'C');
  };

  //multi Fahrenheit

  const Fahrenheit = function () {
    setResult(((+input.num1) * 1.8) + 32 + 'F');
  };
  return (

    <div className='fondo'>
      <Menu />
        <div className='sumaMul CalcularFyC sombra container bg borde-blue marginTop'>
          <div className='contenido'>
            <h2 className='contenido__text neon'>Ingrese una temperatura (númerica)</h2>
            <div className='center_div marginTop borde-green'>
              <input className='bold-tamaño'
                onChange={handleInput}
                name="num1"
                value={input.num1}
                type="text"
              ></input>
            </div>

          </div>
          <h3 className='centerText centerText'>Opciones</h3>
          <div className='center_div'>
            <button onClick={Celsius}>Celsius</button>
            <button onClick={Fahrenheit}>Fahrenheit</button>
          </div>
          <div>
            <h4 className='result'>El resultado es: <span className='result-color'> {result} </span> </h4>
          </div>

        </div>
    </div>

  );



}

