import HttpStatus from './util/HttpStatus';
import Validator from './util/Validator.js';
import ProjectService from '../services/ProjectService';

module.exports = {

  createOrUpdate: (req, res) => {
    if (!req.user || req.user.role !== 'admin') {
      return res.sendStatus(401);
    }

    const project = req.body;
    if (project === undefined ||
        Validator.stringIsEmpty(project.title) ||
        Validator.stringIsEmpty(project.description) ||
        Validator.stringIsEmpty(project.startDate) ||
        Validator.stringIsEmpty(project.endDate)) {
      return HttpStatus.BAD_REQUEST(res, 'object must have the following structure: {' +
        'title: STRING,' +
        'description: STRING,' +
        'startDate: DATE (yyyy-mm-dd),' +
        'endDate: DATE (yyyy-mm-dd)}');
    }

    new ProjectService().createOrUpdate(project).then((result) => {
      return res.send(result);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  read: (req, res) => {
    const id = req.params.id;

    new ProjectService().read(id).then((result) => {
      if (result) {
        return res.send(result);  
      }
      return HttpStatus.NOT_FOUND(res);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  readAll: (req, res) => {
    const fields = ['id', 'title', 'description', 'startDate', 'endDate'];
    new ProjectService().readAll(null, null, fields, 'end').then((results) => {
      return res.send(results);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });  
  },
};