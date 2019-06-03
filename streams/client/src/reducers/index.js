import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';
import streamsStateReducer from './streamsStateReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
  streamsState: streamsStateReducer
})
