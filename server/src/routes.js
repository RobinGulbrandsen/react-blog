import ArticleController from './controllers/ArticleController';
import ProjectsController from './controllers/ProjectController';
import UserController from './controllers/UserController';

import passport from 'passport';

module.exports = (app) => {

  //////// ARTICLES ////////////
  app.get('/api/articles',          ArticleController.readAll);
  app.get('/api/articles/:id',      ArticleController.read);
  app.post('/api/articles',         ArticleController.create);
  app.put('/api/articles',          ArticleController.update);
  app.delete('/api/articles/:id',   ArticleController.destroy);

  //////// ARTICLES ////////////
  app.get('/api/projects',          ProjectsController.readAll);

  //////// USERS ////////////
  app.post('/api/logout',           UserController.logout);
  app.post('/api/signup',           UserController.signup);
  app.post('/api/login', passport.authenticate('local', { successRedirect: '/#/admin',
                                                          failureRedirect: '/#/login' }));
};