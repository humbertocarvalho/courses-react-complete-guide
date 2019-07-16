import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [personsState, setPersonsState] = useState({
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
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: 'Humberto',
          age: 28
        },
        {
          name: 'Luiza',
          age: 29
        }
      ]
    });
  };

  return (
    <div className='App'>
      <h1>Hi, Im a react app</h1>
      <p>Will this work?</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
    </div>
  );
};

export default app;
