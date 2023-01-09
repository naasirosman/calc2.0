import './App.css';
import { useMemo, useState } from 'react';

function App() {

 // displays
    const [display, setDisplay] = useState('0');
    const buttonClick = (event) => {
        const value = event.target.innerText;
        display === '0' 
        ? setDisplay(value) 
        : display === '-0'
        ? setDisplay('-' + value)
        : setDisplay(display + value)
    };
    const decimalButtonClick = () => {
        display.includes('.') 
        ? setDisplay(display)
        : setDisplay(display + '.')
    };
    const clear = () => {
        setDisplay('0');
        setFirstNumber('')
        setSecondNumber('')
    };
    const isNegative = () => {
        display === '0'
            ? setDisplay('-0')
            : parseInt(display) < 0
            ? setDisplay(display.slice(1))
            : parseInt(display) > 0
            ? setDisplay(`-${display}`)
            : setDisplay(display);
    };
// operations
const [firstNumber, setFirstNumber] = useState('0')
const [secondNumber, setSecondNumber] = useState('0')
const [operator, setOperator] = useState()
const operatorButton = (event) => {
    setFirstNumber(display)
    setDisplay('0')
    setOperator(event.target.innerText)
    console.log(operator)
}
const equalsButton = () => {
    setSecondNumber(display)
    setDisplay(
        operator === 'x' 
        ? firstNumber * secondNumber
        : operator === '+'
        ? firstNumber + secondNumber
        : operator === '-'
        ? firstNumber - secondNumber
        : operator === '÷'
        ? firstNumber / secondNumber
        : operator === '%'
        ? (firstNumber / secondNumber) * 100
        : 'N/A'

    )
    setFirstNumber(display)
}
    return (
        <div className="calculator">
            <div className="calculator-display">{display}</div>
            <div className="calculator-keypad">
                <button className="calculator-key" onClick={clear}>
                    AC
                </button>
                <button className="calculator-key" onClick={isNegative}>
                    +/-
                </button>
                <button className="calculator-key" onClick={operatorButton}>%</button>
                <button className="calculator-key" onClick={operatorButton}>÷</button>
                <button className="calculator-key" onClick={buttonClick}>
                    7
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    8
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    9
                </button>
                <button className="calculator-key" onClick={operatorButton}>x</button>
                <button className="calculator-key" onClick={buttonClick}>
                    4
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    5
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    6
                </button>
                <button className="calculator-key" onClick={operatorButton}>
                    -
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    1
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    2
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    3
                </button>
                <button className="calculator-key" onClick={operatorButton}>
                    +
                </button>
                <button className="calculator-key" onClick={buttonClick}>
                    0
                </button>
                <button className="calculator-key" onClick={decimalButtonClick}>
                    .
                </button>
                <button className="calculator-key" onClick={equalsButton} >=</button>
            </div>
        </div>
    );
}

export default App;
