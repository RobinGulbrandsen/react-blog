import HttpStatus from './HttpStatus';
import ArticleService from '../services/ArticleService';

module.exports = {

  create: (req, res) => {
    res.send('create');
  },

  read: (req, res) => {
    const id = req.params.id;

    new ArticleService().read(id).then((result) => {
      if (result) {
        return res.send(result);  
      }
      return HttpStatus.NOT_FOUND(res);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  readAll: (req, res) => {
    new ArticleService().readAll().then((results) => {
      return res.send(results);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  update: (req, res) => {
    res.send('update');
  },

  destroy: (req, res) => {
    res.send('delete');
  }

};