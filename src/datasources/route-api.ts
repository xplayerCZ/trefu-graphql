const {RESTDataSource} = require('apollo-datasource-rest');

class RouteAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getRoutes(params) {
        return this.get('routes', params);
    }

    getRoute(routeId) {
        return this.get(`routes/${routeId}`);
    }
}

module.exports = RouteAPI;
export {};