const { RESTDataSource } = require('apollo-datasource-rest');

class ConnectionRuleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://192.168.1.21:8080/';
    }

    getConnectionRules(params) {
        return this.get('connection-rules', params);
    }
}

module.exports = ConnectionRuleAPI;
