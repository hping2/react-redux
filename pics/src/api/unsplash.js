import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
   Authorization: 'Client-ID 0093549877e4c859474ed8bf468dc65441a3283b398005bf3c793b2a6c739c09',
  } 
});

