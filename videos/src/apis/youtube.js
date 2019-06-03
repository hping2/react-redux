import axios from 'axios';

const KEY = 'AIzaSyAoVuCjcDYWSHhGpdETgotO4DHz2z984gY';

// see how KEY variable is used, there is no $, {} etc.
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
