import axios from 'axios';
import {hashHistory} from 'react-router';

export const getArticle = (id) => {

  return (dispatch) => {

    return axios.get('/api/articles/' + id).then((res) => {
      dispatch({
        type: 'GET_ARTICLE',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response.status === 404) {
        hashHistory.push('404');
      }
    });
  }
}

export const getArticles = () => {
  
  return (dispatch) => {

    return axios.get('/api/articles').then((res) => {
      dispatch({
        type: 'GET_ARTICLES',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response.status === 404) {
        //hashHistory.push('404');
      }
    });
  }
}