import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className='App'>
      <h1>Hi, Im a react app</h1>
      <p>Will this work?</p>
      <Person name='Max' age='28' />
      <Person name='Manu' age='29'>
        My Hobbies: Racing
      </Person>
    </div>
  );
}

export default App;
