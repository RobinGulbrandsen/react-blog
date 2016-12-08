import ProjectRepository from '../repositories/ProjectRepository';
import ProjectModel from '../models/ProjectModel';
class ArticleService {
  constructor() {
    this.repo = new ProjectRepository(ProjectModel);
  }

  readAll(page, count, fields, orderBy) {
    return this.repo.readAll(page, count, fields, orderBy);
  }

  mostVisited(count) {
    return this.visitorRepo.mostVisited(count);
  }
}

module.exports = ArticleService;
