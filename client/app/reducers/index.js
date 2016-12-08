import {combineReducers} from 'redux';
import ArticleReducer from './articleReducer';
import ArticlesReducer from './articlesReducer';
import TopArticles from './topArticlesReducer';
import ProjectReducer from './projectReducer';

const allReducers = combineReducers({
  article: ArticleReducer,
  articles: ArticlesReducer,
  topArticles: TopArticles,
  projects: ProjectReducer
});

export default allReducers;
