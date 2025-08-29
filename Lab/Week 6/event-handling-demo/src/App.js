import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the paragraph text
  const [text, setText] = useState("Click the button to change the text.");
  const [inputText, setInputText] = useState("");

  // Function to handle the button click event
  const handleButtonClick = () => {
    setText("Welcome to VJIT,Hyd!");
  };

  // Function to handle input field change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
	 <div className="header">
      <h1>Event Handling in React</h1>

      {/* Button click event */}
      <button onClick={handleButtonClick}>Change Text</button>
      
      {/* Paragraph text that changes on button click */}
      <p><font size="4" color="red">{text}</font></p>

      {/* Input field event */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}  // On change event updates input text
        placeholder="Type something"
      />
      
      {/* Displaying input text */}
      <p>You Typed: <font size="4" color="red">{inputText}</font></p>
	  </div>
    </div>
  );
}

export default App;
