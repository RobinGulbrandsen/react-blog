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
    console.log(page, count);
    return this.schema.all({offset: page, limit: count});
  }

  size() {
    return this.schema.findAndCountAll({}, 1, 1);
  }

}

module.exports = BaseRepository;