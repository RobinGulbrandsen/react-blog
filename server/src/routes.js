import ArticleController from './controllers/ArticleController';
//var UserController = require('./controllers/UserController');

module.exports = function (app) {

  //////// ARTICLES ////////////
  app.get('/api/articles',          ArticleController.readAll);
  app.get('/api/articles/:id',      ArticleController.read);
  app.post('/api/articles',         ArticleController.create);
  app.put('/api/articles',          ArticleController.update);
  app.delete('/api/articles/:id',   ArticleController.destroy);

/*
  ///////// USERS //////////////
  app.post('/api/users/login',  UserController.login);
  app.post('/api/users/signup', UserController.signup);

  app.get('/api/users',         UserController.readAll);
*/
};