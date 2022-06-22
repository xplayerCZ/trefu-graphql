const { RESTDataSource } = require('apollo-datasource-rest');

class ConnectionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getConnections() {
    return this.get('connections');
  }

  getConnection(connectionId) {
    return this.get(`connections/${connectionId}`);
  }
}

module.exports = ConnectionAPI;
