const { RESTDataSource } = require('apollo-datasource-rest');

class StopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getStops(params) {
    return this.get('stops', params);
  }

  getStop(stopId) {
    return this.get(`stops/${stopId}`);
  }
}

module.exports = StopAPI;
