const { RESTDataSource } = require('apollo-datasource-rest');

class StopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getStops() {
    return this.get('stops');
  }

  getStop(stopId) {
    return this.get(`stops/${stopId}`);
  }
}

module.exports = StopAPI;
