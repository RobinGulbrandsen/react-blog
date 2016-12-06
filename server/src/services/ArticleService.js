import ArticleRepository from '../repositories/ArticleRepository';
import ArticleModel from '../models/ArticleModel';

class ArticleService {
  constructor() {
    this.repo = new ArticleRepository(ArticleModel);
  }

  readAll() {
    return this.repo.readAll();
  }
}

module.exports = ArticleService;