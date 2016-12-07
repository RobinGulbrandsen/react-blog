class BaseRepository {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    return this.schema.findOne({where: {id: id}});
  }

  readAll(page, count) {
    page = page - 1;
    if (page > 0) {
      page = page * count;
    }
    return this.schema.findAll({offset: page, limit: count});
  }

  size() {
    return this.schema.count({});
  }

}

module.exports = BaseRepository;