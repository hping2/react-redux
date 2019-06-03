export default (state = [], action) => {
  // Should never reach 'out of itself'
  // bad
  // return document.querySelector('input');
  // bad
  // return axois.get('/posts');
  // good
  // return state + actions


  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;

    default:
      return state;
  }
}
