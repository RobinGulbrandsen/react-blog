class BaseRepository {

  constructor(schema) {
    this.schema = schema;
  }

  read(id) {
    return this.schema.findOne({where: {id: id}});
  }

  readAll() {
    return this.schema.all();
  }

}

module.exports = BaseRepository;