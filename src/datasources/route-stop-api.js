const { RESTDataSource } = require('apollo-datasource-rest');

class RouteStopAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    getRouteStops(params) {
        return this.get('route-stops', params);
    }
}

module.exports = RouteStopAPI;
