const {RESTDataSource} = require('apollo-datasource-rest');

class LineAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getLines(params) {
        return this.get('lines', params);
    }

    getLine(lineId) {
        return this.get(`lines/${lineId}`);
    }
}

module.exports = LineAPI;
export {};