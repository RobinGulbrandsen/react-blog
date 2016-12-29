import axios from 'axios';
import { hashHistory } from 'react-router';

export const getArticles = () => {
  return (dispatch) => {
    return axios.get('/api/articles?type=admin&count=' + Number.MAX_SAFE_INTEGER)
    .then((res) => {
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