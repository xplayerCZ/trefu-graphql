const { RESTDataSource } = require('apollo-datasource-rest');

class RuleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getRules() {
    return this.get('rules');
  }

  getRule(ruleId) {
    return this.get(`rules/${ruleId}`);
  }
}

module.exports = RuleAPI;
