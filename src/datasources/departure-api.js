const { RESTDataSource } = require('apollo-datasource-rest');

class DepartureAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getDepartures(params) {
    return this.get('departures', params);
  }

  getDeparture(departureId) {
    return this.get(`departures/${departureId}`);
  }
}

module.exports = DepartureAPI;
