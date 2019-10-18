import axios from 'axios';

export default {
  getAll: () => axios.get('/coup.json'),
};