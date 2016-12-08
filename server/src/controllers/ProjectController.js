import HttpStatus from './HttpStatus';
import ProjectService from '../services/ProjectService';

module.exports = {

  readAll: (req, res) => {
    const fields = ['id', 'title', 'description', 'startDate', 'endDate'];
    new ProjectService().readAll(null, null, fields).then((results) => {
      return res.send(results);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });  
  },
};