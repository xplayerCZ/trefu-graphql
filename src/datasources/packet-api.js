const { RESTDataSource } = require('apollo-datasource-rest');

class PacketAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://192.168.1.21:8080/';
  }

  getPackets(params) {
    return this.get('packets', params);
  }

  getPacket(packetId) {
    return this.get(`packets/${packetId}`);
  }
}

module.exports = PacketAPI;
