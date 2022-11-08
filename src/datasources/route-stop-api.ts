const {RESTDataSource} = require('apollo-datasource-rest');

class RouteStopAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getRouteStops(params) {
        return this.get('route-stops', params);
    }
}

module.exports = RouteStopAPI;
export {};