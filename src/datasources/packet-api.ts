const {RESTDataSource} = require('apollo-datasource-rest');

class PacketAPI extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
    }

    getPackets(params) {
        return this.get('packets', params);
    }

    getPacket(packetId) {
        return this.get(`packets/${packetId}`);
    }
}

module.exports = PacketAPI;
export {};