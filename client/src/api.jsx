import axios from 'axios';

export default {
  user: {
    login: (credentials) => 
    axios.post('/api/auth', { credentials }).then(res => res.data.user)
  }
};
// check crediential in chroms for now: Network - auth - Headers - Request Payload