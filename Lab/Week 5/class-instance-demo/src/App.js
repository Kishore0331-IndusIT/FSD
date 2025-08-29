import React, { Component } from 'react';
import './App.css';
import Person from './Person';

// Main App component to render the Person component
class App extends Component {
  render() {
    return (
      <div className="App">
	  <div class="container">
        <h1>React Class and Instance Demo</h1>
        {/* Create an instance of the Person component */}
        <Person />
		</div>
      </div>
    );
  }
}

export default App;
