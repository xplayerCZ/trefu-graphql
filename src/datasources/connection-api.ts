const {RESTDataSource} = require('apollo-datasource-rest');

class ConnectionAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getConnections(params) {
        return this.get('connections', params);
    }

    getConnection(connectionId) {
        return this.get(`connections/${connectionId}`);
    }
}

module.exports = ConnectionAPI;
export {};