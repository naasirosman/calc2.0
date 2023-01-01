import './App.css';
import { useMemo, useState } from 'react';

function App() {
//   const calculate = useMemo((first, second) => {

// }, [first, second]);
const [display, setDisplay] = useState('0')
const buttonClick = (event) => {
  const value = event.target.innerText
  setDisplay(display + value)
}
    return (
      <div className='calculator'>
      <div className="calculator-display">{display}</div>
      <div className="calculator-keypad">
        <button className="calculator-key">AC</button>
        <button className="calculator-key">+/-</button>
        <button className="calculator-key">%</button>
        <button className="calculator-key">÷</button>
        <button className="calculator-key" onClick={buttonClick}>7</button>
        <button className="calculator-key" onClick={buttonClick}>8</button>
        <button className="calculator-key" onClick={buttonClick}>9</button>
        <button className="calculator-key">x</button>
        <button className="calculator-key" onClick={buttonClick}>4</button>
        <button className="calculator-key" onClick={buttonClick}>5</button>
        <button className="calculator-key" onClick={buttonClick}>6</button>
        <button className="calculator-key" onClick={buttonClick}>-</button>
        <button className="calculator-key" onClick={buttonClick}>1</button>
        <button className="calculator-key" onClick={buttonClick}>2</button>
        <button className="calculator-key" onClick={buttonClick}>3</button>
        <button className="calculator-key" onClick={buttonClick}>+</button>
        <button className="calculator-key" onClick={buttonClick}>0</button>
        <button className="calculator-key" onClick={buttonClick}>.</button>
        <button className="calculator-key">=</button>
      </div>
    </div>
    );
}

export default App;
