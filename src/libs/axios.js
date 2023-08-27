import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://be30-production.up.railway.app',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  });
  

  
  

  export default instance;