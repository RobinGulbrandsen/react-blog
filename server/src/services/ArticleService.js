import ArticleRepository from '../repositories/ArticleRepository';
import VisitorRepository from '../repositories/VisitorRepository';
import ArticleModel from '../models/ArticleModel';
import VisitorModel from '../models/VisitorModel';

class ArticleService {
  constructor() {
    this.articleRepo = new ArticleRepository(ArticleModel);
    this.visitorRepo = new VisitorRepository(VisitorModel);
  }

  registerGet(ip, articleId) {
    this.visitorRepo.create({id: articleId, visitor: ip}).catch((error) => {
      //Returning visitor, ignores the constraint error of duplicate rows
    });
  }

  read(id) {
    return this.articleRepo.read(id);
  }

  readAll(page, count, fields, orderBy, where) {
    return Promise.all([this.articleRepo.size(where),
                        this.articleRepo.readAll(page, count, fields, orderBy, where)])
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