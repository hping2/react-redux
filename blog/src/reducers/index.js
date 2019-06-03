import { combineReducers } from 'redux';  // redux uses named export, thus {};
import postsReducer from './postsReducer';
import userReducer from './userReducer';


export default combineReducers({
  posts: postsReducer,
  users: userReducer
});
