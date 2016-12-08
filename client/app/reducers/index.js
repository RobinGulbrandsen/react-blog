import {combineReducers} from 'redux';
import ArticleReducer from './articleReducer';
import ArticlesReducer from './articlesReducer';
import TopArticles from './topArticlesReducer';

const allReducers = combineReducers({
  article: ArticleReducer,
  articles: ArticlesReducer,
  topArticles: TopArticles
});

export default allReducers;
