const { RESTDataSource } = require('apollo-datasource-rest');

class ConnectionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getConnections(params) {
    return this.get('connections', params);
  }

  getConnection(connectionId) {
    return this.get(`connections/${connectionId}`);
  }
}

module.exports = ConnectionAPI;
