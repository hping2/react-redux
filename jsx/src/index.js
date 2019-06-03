// import the react and reactDOM libraries
// variable 'React' can be something else, in old days, it is const React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';

function getFunctionText() {
  return "Click on me!"
}

// Create a react component
const App = () => {
    //const buttonText = 'Click me';

    return (
        <div>
            <label className='label' htmlFor='name'>Enter name:</label>
            <input id='name' type='text'/>
            <button style={{ backgroundColor: 'blue', color: 'white' }} >
              {getFunctionText()}
            </button>
        </div>
      )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
