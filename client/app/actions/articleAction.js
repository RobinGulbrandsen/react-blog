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
      console.log(error);
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
    });
  }
}

export const getArticles = (page = 1) => {

  return (dispatch) => {
    return axios.get('/api/articles?count=3&page=' + page).then((res) => {
      dispatch({
        type: 'GET_ARTICLES',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
    });
  }
}

export const getTopArticles = () => {

  return (dispatch) => {
    return axios.get('/api/articles?type=visited&count=5').then((res) => {
      dispatch({
        type: 'GET_TOP_ARTICLES',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
    });
  }
}