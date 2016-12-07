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
    return Promise.all([this.repo.size(), this.repo.readAll(page, count)])
    .then((results) => {
      return Promise.resolve({
        totalSize: results[0].count,
        articles: results[1]
      });
    });
  }
}

module.exports = ArticleService;