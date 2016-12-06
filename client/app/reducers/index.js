import {combineReducers} from 'redux';
import ArticleReducer from './articleReducer';
import ArticlesReducer from './articlesReducer';

const allReducers = combineReducers({
  article: ArticleReducer,
  articles: ArticlesReducer
});

export default allReducers;
