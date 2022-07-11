const { RESTDataSource } = require('apollo-datasource-rest');

class LineAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getLines(params) {
    return this.get('lines', params);
  }

  getLine(lineId) {
    return this.get(`lines/${lineId}`);
  }
}

module.exports = LineAPI;
