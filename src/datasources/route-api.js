const { RESTDataSource } = require('apollo-datasource-rest');

class RouteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getRoutes() {
    return this.get('routes');
  }

  getRoute(routeId) {
    return this.get(`routes/${routeId}`);
  }
}

module.exports = RouteAPI;
