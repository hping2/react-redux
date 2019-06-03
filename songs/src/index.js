import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // named export
import { createStore } from 'redux';
import App from './components/App';
import combineReducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(combineReducers)} >
      <App />
    </Provider>,
    document.querySelector("#root")
);
