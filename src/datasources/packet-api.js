const { RESTDataSource } = require('apollo-datasource-rest');

class PacketAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080/';
  }

  getPackets() {
    return this.get('packets');
  }

  getPacket(packetId) {
    return this.get(`packets/${packetId}`);
  }
}

module.exports = PacketAPI;
