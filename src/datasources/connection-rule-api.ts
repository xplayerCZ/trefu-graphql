const {RESTDataSource} = require('apollo-datasource-rest');

class ConnectionRuleAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getConnectionRules(params) {
        return this.get('connection-rules', params);
    }
}

module.exports = ConnectionRuleAPI;
export {};