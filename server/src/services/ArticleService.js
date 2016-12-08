import ArticleRepository from '../repositories/ArticleRepository';
import VisitorRepository from '../repositories/VisitorRepository';
import ArticleModel from '../models/ArticleModel';
import VisitorModel from '../models/VisitorModel';

class ArticleService {
  constructor() {
    this.articleRepo = new ArticleRepository(ArticleModel);
    this.visitorRepo = new VisitorRepository(VisitorModel);
  }

  read(id) {
    return this.articleRepo.read(id);
  }

  readAll(page, count, fields, orderBy) {
    return Promise.all([this.articleRepo.size(),
                        this.articleRepo.readAll(page, count, fields, orderBy)])
    .then((results) => {
      return Promise.resolve({
        totalSize: results[0],
        articles: results[1]
      });
    });
  }

  mostVisited(count) {
    return this.visitorRepo.mostVisited(count);
  }
}

module.exports = ArticleService;