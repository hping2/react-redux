import _ from 'lodash';

// streamsReducers returns a object with array inside.
export default (state = {}, action) => {
  switch (action.type) {

    case "ERROR_DELETE_STREAM": {
      console.log("At reducer for ERROR_DELETE")
      return {...state, id: action.payload};
    }

    default:
      return state;
  }
};
