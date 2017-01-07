import {combineReducers} from 'redux';
import ArticleReducer from './articleReducer';
import ArticlesReducer from './articlesReducer';
import TopArticles from './topArticlesReducer';
import ProjectReducer from './projectReducer';
import ProjectsReducer from './projectsReducer';

const allReducers = combineReducers({
  article: ArticleReducer,
  articles: ArticlesReducer,
  topArticles: TopArticles,
  project: ProjectReducer,
  projects: ProjectsReducer
});

export default allReducers;
