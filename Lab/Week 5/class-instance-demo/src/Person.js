import React, { Component } from 'react';

// Class component definition
class Person extends Component {
  // Constructor for initializing state
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rahul',
      age: 35,
    };
  }

  // Method to change the name
  changeName = () => {
    this.setState({ name: 'Rohit Sharma' });
  };

  // Method to increase age
  increaseAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  // Rendering the component
  render() {
    return (
      <div>
        <h4>Person Component</h4>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.increaseAge}>Increase Age</button>
      </div>
    );
  }
}

export default Person;
