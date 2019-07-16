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

  nameChangedHandler = event => {
    console.log('event', event);
    this.setState({
      persons: [
        {
          name: 'Humberto',
          age: 28
        },
        {
          name: event.target.value,
          age: 29
        }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className='App'>
        <h1>Hi, Im a react app</h1>
        <p>Will this work?</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Arrow function')}
        >
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
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
