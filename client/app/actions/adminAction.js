import axios from 'axios';
import { hashHistory } from 'react-router';

export const getArticles = () => {
  console.log('fetching articles as admin');

  return (dispatch) => {
    return axios.get('/api/articles?type=admin').then((res) => {
      dispatch({
        type: 'GET_ARTICLES',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
      if (error.response && error.response.status === 401) {
        hashHistory.push('login');
      }
    });
  }
}