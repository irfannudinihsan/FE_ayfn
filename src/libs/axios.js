import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://ayfnfebe29.up.railway.app',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
  });
  

  
  

  export default instance;