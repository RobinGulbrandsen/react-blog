class BaseRepository {

  constructor(schema) {
    this.schema = schema;
  }

  readAll() {
    return this.schema.all();
  }

}

module.exports = BaseRepository;