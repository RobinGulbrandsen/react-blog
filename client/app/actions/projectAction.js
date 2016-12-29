import axios from 'axios';
import { hashHistory } from 'react-router';

export const getProjects = () => {

  return (dispatch) => {
    return axios.get('/api/projects').then((res) => {
      dispatch({
        type: 'GET_PROJECTS',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
    });
  }
}