const {RESTDataSource} = require('apollo-datasource-rest');

class StopAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getStops(params) {
        return this.get('stops', params);
    }

    getStop(stopId) {
        return this.get(`stops/${stopId}`);
    }
}

module.exports = StopAPI;
export {};