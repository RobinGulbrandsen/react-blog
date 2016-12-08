class BaseRepository {

  constructor(schema) {
    this.schema = schema;
  }

  create(object) {
    return this.schema.create(object);
  }

  read(id) {
    return this.schema.findOne({where: {id: id}});
  }

  readAll(page, count, fields, orderBy, where = {}) {
    page = (page === null) ? 0 : page - 1;
    if (page > 0) {
      page = page * count;
    }
    return this.schema.findAll({
      where: where,
      attributes: fields,
      offset: page,
      limit: count,
      order: orderBy + ' DESC'
    });
  }

  size(where) {
    return this.schema.count({where : where});
  }

}

module.exports = BaseRepository;