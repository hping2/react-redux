import _ from 'lodash';
import axiosClient from '../apis/jsonPlaceholder';

// action creater is a function, you can call it to generate action, e.g, object.
// The out-of-box redux actioon is just a plain object, for async way, you can
// use middleware such as redux-thunk to customize the redux flow. Remember Authorization
// at index.js, you createStore(reducers, applyMiddleware(thunk)); In actions layer,
// essentially, you wrap the original function body with (dispatch, getState, extraArgument),
// inside the func body, you can dispatch(...) manually which triggers the state
// change and UI update.
//
// https://daveceddia.com/what-is-a-thunk/  # To see how thunk works.
// https://redux.js.org/api/store
export const fetchPosts = () => async dispatch => {
  const response = await axiosClient.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data})
};

export const fetchUser = id => async dispatch => {
  const response = await axiosClient.get(`/users/${id}`);
  dispatch ({ type: 'FETCH_USER', payload: response.data})
};

// getState is a redux function which returns the current state tree of application
// Dispatches an action, it triggers a state change.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    //const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value();
}

// method 1:
// export const fetchUser = (id) => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data})
// };

// method 2:
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data})
// })
//
// export const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);
