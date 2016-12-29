import axios from 'axios';
import { hashHistory } from 'react-router';

export const login = (user) => {
  axios.post('/api/login', user).then((res) => {
    hashHistory.push('admin');
  }).catch((error) => {
    console.log('error on login', error);
  });
}