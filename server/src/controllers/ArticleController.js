import HttpStatus from './HttpStatus';
import ArticleService from '../services/ArticleService';

module.exports = {

  create: (req, res) => {
    res.send('create');
  },

  read: (req, res) => {
    res.send('read one');
  },

  readAll: (req, res) => {
    new ArticleService().readAll().then((results) => {
      return res.send(results);
    }).catch((error) => {
      return res.send(error);
    });
  },

  update: (req, res) => {
    res.send('update');
  },

  destroy: (req, res) => {
    res.send('delete');
  }

};