const resolvers = {
  Query: {
    stops: (_, __, { dataSources }) => {
      return dataSources.stopAPI.getStops();
    },

    stop: (_, { id }, { dataSources }) => {
      return dataSources.stopAPI.getStop(id);
    },

    routes: (_, { id }, { dataSources }) => {
      return dataSources.routeAPI.getRoutes();
    },

    route: (_, { id }, { dataSources }) => {
      return dataSources.routeAPI.getRoute(id);
    },

    packets: (_, { id }, { dataSources }) => {
      return dataSources.packetAPI.getPackets();
    },

    packet: (_, { id }, { dataSources }) => {
      return dataSources.packetAPI.getPacket(id);
    },

    lines: (_, { id }, { dataSources }) => {
      return dataSources.lineAPI.getLines();
    },

    line: (_, { id }, { dataSources }) => {
      return dataSources.lineAPI.getLines(id);
    },

    connections: (_, { id }, { dataSources }) => {
      return dataSources.connectionAPI.getConnections();
    },

    connection: (_, { id }, { dataSources }) => {
      return dataSources.connectionAPI.getConnection(id);
    },

    departures: (_, { id }, { dataSources }) => {
      return dataSources.departureAPI.getDepartures();
    },

    departure: (_, { id }, { dataSources }) => {
      return dataSources.departureAPI.getDeparture(id);
    },

    rules: (_, { id }, { dataSources }) => {
      return dataSources.ruleAPI.getRules();
    },

    rule: (_, { id }, { dataSources }) => {
      return dataSources.ruleAPI.getRule(id);
    },

  },
  Stop: {
    routeStops: ({ id }, _, { dataSources }) => {
      return dataSources.routeStopAPI.getRouteStops({
        stopId: id
      });
    },
  },
  Route: {
    routeStops: ({ id }, _, { dataSources }) => {
      return dataSources.routeStopAPI.getRouteStops({
        routeId: id
      });
    },
    connections: ({ id }, _, { dataSources }) => {
      return dataSources.connectionAPI.getConnections({
        routeId: id
      });
    },
  },
  RouteStop: {
    route: ({ routeId }, _, { dataSources })  => {
      return dataSources.routeAPI.getRoute(routeId);
    },
    stop: ({ stopId }, _, { dataSources })  => {
      return dataSources.stopAPI.getStop(stopId);
    },
  },
  Packet: {
    lines: ({ id }, _, { dataSources })  => {
      return dataSources.lineAPI.getLines({
        packetId: id
      });
    },
  },
  Line: {
    packet: ({ packetId }, _, { dataSources })  => {
      return dataSources.packetAPI.getPacket(packetId);
    },
    routes: ({ id }, _, { dataSources })  => {
      return dataSources.routeAPI.getRoutes({
        lineId: id
      });
    },
  },
  Connection: {
    departures: ({ id }, _, { dataSources })  => {
      return dataSources.departureAPI.getDepartures({
        connectionId: id
      });
    },
    connectionRules: ({ id }, _, { dataSources })  => {
      return dataSources.connectionRuleAPI.getConnectionRules({
        connectionId: id
      });
    },
  },
  Departure: {
    connection: ({ connectionId }, _, { dataSources })  => {
      return dataSources.connectionAPI.getConnection(connectionId);
    },
  },
  ConnectionRule: {
    connection: ({ connectionId }, _, { dataSources })  => {
      return dataSources.connectionAPI.getConnection(connectionId);
    },
    rule: ({ ruleId }, _, { dataSources })  => {
      return dataSources.ruleAPI.getRule(ruleId);
    },
  },
  Rule: {
    connectionRules: ({ id }, _, { dataSources })  => {
      return dataSources.connectionRuleAPI.getConnectionRules({
        ruleId: id
      });
    },
  }
};

module.exports = resolvers;
