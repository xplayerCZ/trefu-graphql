const {RESTDataSource} = require('apollo-datasource-rest');

class DepartureAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getDepartures(params) {
        return this.get('departures', params);
    }

    getDeparture(departureId) {
        return this.get(`departures/${departureId}`);
    }
}

module.exports = DepartureAPI;
export {};