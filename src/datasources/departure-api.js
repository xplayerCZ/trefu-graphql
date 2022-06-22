const { RESTDataSource } = require('apollo-datasource-rest');

class DepartureAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getDepartures() {
    return this.get('departures');
  }

  getDeparture(departureId) {
    return this.get(`departures/${departureId}`);
  }
}

module.exports = DepartureAPI;
