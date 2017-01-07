import ArticleController from './controllers/ArticleController';
import ProjectController from './controllers/ProjectController';
import UserController from './controllers/UserController';

import passport from 'passport';

module.exports = (app) => {

  //////// ARTICLES ////////////
  app.get('/api/articles',        ArticleController.readAll);
  app.get('/api/articles/:id',    ArticleController.read);
  app.post('/api/articles',       ArticleController.createOrUpdate);

  //////// PROJECTS ////////////
  app.get('/api/projects',        ProjectController.readAll);
  app.get('/api/projects/:id',    ProjectController.read);
  app.post('/api/projects',       ProjectController.createOrUpdate);

  //////// USERS ////////////
  app.post('/api/logout',         UserController.logout);
  app.post('/api/signup',         UserController.signup);
  app.post('/api/login', passport.authenticate('local'), UserController.login);
};