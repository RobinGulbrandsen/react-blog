import ArticleRepository from '../repositories/ArticleRepository';
import ArticleModel from '../models/ArticleModel';

class ArticleService {
  constructor() {
    this.repo = new ArticleRepository(ArticleModel);
  }

  read(id) {
    return this.repo.read(id);
  }

  readAll(page, count) {
    return this.repo.readAll(page, count);
  }
}

module.exports = ArticleService;