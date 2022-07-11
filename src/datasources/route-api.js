const { RESTDataSource } = require('apollo-datasource-rest');

class RouteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getRoutes(params) {
    return this.get('routes', params);
  }

  getRoute(routeId) {
    return this.get(`routes/${routeId}`);
  }
}

module.exports = RouteAPI;
