import HttpStatus from './HttpStatus';
import ArticleService from '../services/ArticleService';

module.exports = {

  createOrUpdate: (req, res) => {
    //Role === admin

    const article = req.body;
    //Validate Article
    if (article === undefined ||
        article.id === undefined || article.id.trim().length === 0 ||
        article.title === undefined || article.title.trim().length === 0 ||
        article.createdAt === undefined || article.createdAt.trim().length === 0 ||
        article.intro === undefined || article.intro.trim().length === 0 ||
        article.content === undefined || article.content.trim().length === 0) {
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
      const fields = ['id', 'title', 'createdAt'];
      new ArticleService().readAll(page, count, fields, 'createdAt', {})
      .then((results) => {
        return res.send(results);
      }).catch((error) => {
        return HttpStatus.INTERNAL_SERVER_ERROR(res, error);
      }); 
    }
    
  },

  update: (req, res) => {
    res.send('update');
  },

  destroy: (req, res) => {
    res.send('delete');
  }
};