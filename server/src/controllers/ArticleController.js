import HttpStatus from './util/HttpStatus';
import Validator from './util/Validator';
import ArticleService from '../services/ArticleService';

module.exports = {

  createOrUpdate: (req, res) => {
    if (!req.user || req.user.role !== 'admin') {
      return res.sendStatus(401);
    }

    const article = req.body;
    //Validate Article
    if (article === undefined ||
        Validator.isStringEmpty(article.id) ||
        Validator.isStringEmpty(article.title) ||
        Validator.isStringEmpty(createdAt) ||
        Validator.isStringEmpty(intro) ||
        Validator.isStringEmpty(content)) {
      return HttpStatus.BAD_REQUEST(res, 'object must have the following structure: {' +
        'id: STRING,' +
        'title: STRING,' +
        'reatedAt: DATE (yyyy-mm-dd),' +
        'intro: STRING,' +
        'content: STRING}');
    }

    new ArticleService().createOrUpdate(article).then((result) => {
      return res.send(result);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  read: (req, res) => {
    const id = req.params.id;

    new ArticleService().read(id).then((result) => {
      if (result) {
        new ArticleService().registerGet(req.connection.remoteAddress, result.id);
        return res.send(result);  
      }
      return HttpStatus.NOT_FOUND(res);
    }).catch((error) => {
      return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
    });
  },

  /**
    Type: visited, admin
  */
  readAll: (req, res) => {
    const type = req.query.type || 'all';
    const page = Number(req.query.page) || 1;
    const count = Number(req.query.count) || 3;

    if (type === 'all') {
      const fields = ['id', 'title', 'createdAt', 'intro'];
      new ArticleService().readAll(page, count, fields, 'createdAt', { visible: true})
      .then((results) => {
        return res.send(results);
      }).catch((error) => {
        return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
      });  
    }

    if (type === 'visited') {
      new ArticleService().mostVisited(count).then((result) => {
        return res.send(result);
      }).catch((error) => {
        return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
      });
    }

    if (type === 'admin') {
      if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
      }
      const fields = ['id', 'title', 'createdAt', 'visible'];
      new ArticleService().readAll(page, count, fields, 'createdAt', {})
      .then((results) => {
        return res.send(results);
      }).catch((error) => {
        return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
      }); 
    }
    
  }
};