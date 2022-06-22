const { RESTDataSource } = require('apollo-datasource-rest');

class ConnectionRuleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8080/';
    }

    getConnectionRules(params) {
        return this.get('connection-rules', params);
    }
}

module.exports = ConnectionRuleAPI;
