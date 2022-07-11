const { RESTDataSource } = require('apollo-datasource-rest');

class RuleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getRules(params) {
    return this.get('rules', params);
  }

  getRule(ruleId) {
    return this.get(`rules/${ruleId}`);
  }
}

module.exports = RuleAPI;
