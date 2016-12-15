import axios from 'axios';
import { hashHistory } from 'react-router';

export const login = (user) => {
  axios.post('/api/login', user).then((res) => {
    //On Success, we'll get a redirect with cookie
  }).catch((error) => {
    console.log('error on login', error);
  });
}