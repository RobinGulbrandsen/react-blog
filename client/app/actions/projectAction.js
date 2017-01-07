import axios from 'axios';
import { hashHistory } from 'react-router';

export const getProject = (id) => {
  return (dispatch) => {
    return axios.get('/api/projects/' + id).then((res) => {
      dispatch({
        type: 'GET_PROJECT',
        payload: res.data
      });
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        hashHistory.push('404');
      }
    })
  }
}

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

export const addProject = (project) => {
  return axios.post('/api/projects', project).catch((error) => {
    if (error.response && error.response.status === 401) {
      hashHistory.push('login');
    }
  });
}