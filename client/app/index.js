import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

// CSS
require('bootstrap/dist/css/bootstrap.css');
require('../assets/bootstrap/superhero.min.css');
require('../assets/styles.scss');

import Article from './pages/article';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import Main from './pages/main';
import FileNotFound from './pages/error/fileNotFound';
import Login from './pages/login';
import ArticleForm from './pages/forms/articleForm';
import ProjectForm from './pages/forms/projectForm';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='about' component={About} />
        <Route path='article/:id' component={Article} />
        <Route path='admin' component={Admin} />
        <Route path='404' component={FileNotFound} />
        <Route path='login' component={Login} />
        <Route path='forms/article' component={ArticleForm} />
        <Route path='forms/project' component={ProjectForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
