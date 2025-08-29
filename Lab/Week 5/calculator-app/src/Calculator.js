import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(''); // To store the current input value
  const [result, setResult] = useState(null); // To store the result of calculations

  // Function to handle number and operator button clicks
  const handleButtonClick = (value) => {
    setInput(input + value); // Append the clicked button's value to the input string
  };

  // Function to handle clear button click
  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  // Function to handle the calculation and show the result
  const handleEvaluate = () => {
    try {
      setResult(eval(input)); // Evaluate the input string and set the result
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        {result !== null && <div className="result">Result: {result}</div>}
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
