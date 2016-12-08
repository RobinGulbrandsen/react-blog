import BaseRepository from './BaseRepository';
import Sequelize from 'sequelize';

import ArticleModel from '../models/ArticleModel';

class VisitorRepositry extends BaseRepository {
  constructor(schema) {
    super(schema);
  }

  mostVisited(count) {
    return this.schema.findAll({
      include: [{
        model: ArticleModel,
        attributes: ['title']
      }],
      attributes: ['id',
                    [Sequelize.literal('count(*)'), 'count']],
      group: ['id'],
      order: 'count DESC',
      limit: count
    });
  }
}

module.exports = VisitorRepositry;