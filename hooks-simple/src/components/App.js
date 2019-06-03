import React, { useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    // array destruction, e.g, the useState(initial_value) function returns an array 
    // which should have two elelements .
    // When the jsx code calls setResource(xxx), it updates the value of resource, and
    // caused re-render
    const [resource, setResource] = useState('posts');

    return (
      <div>
        <UserList />
        <div>
          <button onClick={ () => setResource('posts')}> Posts </button>
          <button onClick={ () => setResource('todos')}> Todos </button>
        </div>
        <ResourceList resource={resource} />
      </div>
    )
}

export default App;

