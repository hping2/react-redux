import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

// streamsReducers returns a object with array inside.
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM: {
      return {...state, [action.payload.id]: action.payload};
    }

    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};

    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};

    // powerful lodash function
    case DELETE_STREAM:
      return _.omit(state, action.payload);

    //hmm. why I need {...state, ...}?
    case FETCH_STREAMS:
      return _.mapKeys(action.payload, 'id');

    default:
      return state;
  }
};
