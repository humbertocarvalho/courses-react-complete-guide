import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 28
      },
      {
        name: 'Manu',
        age: 29
      }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: 'Luiza',
          age: 29
        }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, Im a react app</h1>
        <p>Will this work?</p>
        <button onClick={() => this.switchNameHandler('Arrow function')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, 'Humberto!!')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
