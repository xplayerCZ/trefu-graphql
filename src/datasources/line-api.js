const { RESTDataSource } = require('apollo-datasource-rest');

class LineAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getLines() {
    return this.get('lines');
  }

  getLine(lineId) {
    return this.get(`lines/${lineId}`);
  }
}

module.exports = LineAPI;
