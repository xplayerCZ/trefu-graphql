const {RESTDataSource} = require('apollo-datasource-rest');

class RuleAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getRules(params) {
        return this.get('rules', params);
    }

    getRule(ruleId) {
        return this.get(`rules/${ruleId}`);
    }
}

module.exports = RuleAPI;
export {};