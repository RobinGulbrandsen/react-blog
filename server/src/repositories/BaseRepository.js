class BaseRepository {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    return this.schema.findOne({where: {id: id}});
  }

  readAll(page, count, fields, orderBy) {
    page = (page === null) ? 0 : page - 1;
    if (page > 0) {
      page = page * count;
    }
    return this.schema.findAll({
      attributes: fields,
      offset: page,
      limit: count,
      order: orderBy + ' DESC'
    });
  }

  size() {
    return this.schema.count({});
  }

}

module.exports = BaseRepository;