import BaseRepository from './BaseRepository';
import Sequelize from 'sequelize';

class VisitorRepositry extends BaseRepository {
  constructor(schema) {
    super(schema);
  }

  mostVisited(count) {
    return this.schema.findAll({
      attributes: ['id',
                    [Sequelize.literal('count(*)'), 'count']],
      group: ['id'],
      order: 'count DESC',
      limit: count
    });
  }
}

module.exports = VisitorRepositry;