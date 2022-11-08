const dateScalar = require("./customtypes/DateType");
const timeScalar = require("./customtypes/TimeType");

const resolvers = {
    Query: {
        stops: (_, {filter}, {dataSources}) => {
            if (filter.forDate !== null) {
                let formattedDate = filter.forDate
                return dataSources.packetAPI.getPackets({
                    activeAfter: formattedDate,
                    activeBefore: formattedDate,
                    valid: true
                }).then((value) => {
                    filter.packetId = value[0].id
                    delete filter.forDate
                    return dataSources.stopAPI.getStops({...filter});
                });
            } else {
                return dataSources.stopAPI.getStops({...filter});
            }
        },

        stop: (_, {id}, {dataSources}) => {
            return dataSources.stopAPI.getStop(id);
        },

        routes: (_, {filter}, {dataSources}) => {
            return dataSources.routeAPI.getRoutes({...filter});
        },

        route: (_, {id}, {dataSources}) => {
            return dataSources.routeAPI.getRoute(id);
        },

        packets: (_, {filter}, {dataSources}) => {
            return dataSources.packetAPI.getPackets({...filter});
        },

        packet: (_, {id}, {dataSources}) => {
            return dataSources.packetAPI.getPacket(id);
        },

        lines: (_, {filter}, {dataSources}) => {
            return dataSources.lineAPI.getLines({...filter});
        },

        line: (_, {id}, {dataSources}) => {
            return dataSources.lineAPI.getLine(id);
        },

        connections: (_, {filter}, {dataSources}) => {
            return dataSources.connectionAPI.getConnections({...filter});
        },

        connection: (_, {id}, {dataSources}) => {
            return dataSources.connectionAPI.getConnection(id);
        },

        departures: (_, {filter}, {dataSources}) => {
            if (filter.forDate !== null) {
                let formattedDate = filter.forDate
                return dataSources.packetAPI.getPackets({
                    activeAfter: formattedDate,
                    activeBefore: formattedDate,
                    valid: true
                }).then((validPackets) => {
                    filter.packetId = validPackets[0].id
                    return dataSources.ruleAPI.getRules({
                        date: filter.forDate
                    }).then((validRules) => {
                        filter.ruleId = validRules[0].id
                        delete filter.forDate
                        return dataSources.departureAPI.getDepartures({...filter});
                    });
                });
            } else {
                return dataSources.departureAPI.getDepartures({...filter});
            }
        },

        departure: (_, {id}, {dataSources}) => {
            return dataSources.departureAPI.getDeparture(id);
        },

        rules: (_, {filter}, {dataSources}) => {
            return dataSources.ruleAPI.getRules({...filter});
        },

        rule: (_, {id}, {dataSources}) => {
            return dataSources.ruleAPI.getRule(id);
        },

    },
    Date: dateScalar,
    Time: timeScalar,
    Stop: {
        routeStops: ({id}, _, {dataSources}) => {
            return dataSources.routeStopAPI.getRouteStops({
                stopId: id
            });
        },
    },
    Route: {
        line: ({lineId}, _, {dataSources}) => {
            return dataSources.lineAPI.getLine(lineId);
        },
        routeStops: ({id}, _, {dataSources}) => {
            return dataSources.routeStopAPI.getRouteStops({
                routeId: id
            });
        },
        connections: ({id}, _, {dataSources}) => {
            return dataSources.connectionAPI.getConnections({
                routeId: id
            });
        },
        firstRouteStop: ({id}, _, {dataSources}) => {
            return dataSources.routeStopAPI.getRouteStops({
                routeId: id,
                index: 0
            });
        },
        lastRouteStop: ({id, length}, _, {dataSources}) => {
            return dataSources.routeStopAPI.getRouteStops({
                routeId: id,
                index: length - 1
            });
        },
    },
    RouteStop: {
        route: ({routeId}, _, {dataSources}) => {
            return dataSources.routeAPI.getRoute(routeId);
        },
        stop: ({stopId}, _, {dataSources}) => {
            return dataSources.stopAPI.getStop(stopId);
        },
    },
    Packet: {
        lines: ({id}, _, {dataSources}) => {
            return dataSources.lineAPI.getLines({
                packetId: id
            });
        },
    },
    Line: {
        packet: ({packetId}, _, {dataSources}) => {
            return dataSources.packetAPI.getPacket(packetId);
        },
        routes: ({id}, _, {dataSources}) => {
            return dataSources.routeAPI.getRoutes({
                lineId: id
            });
        },
    },
    Connection: {
        route: ({routeId}, _, {dataSources}) => {
            return dataSources.routeAPI.getRoute(routeId);
        },
        departures: ({id}, _, {dataSources}) => {
            return dataSources.departureAPI.getDepartures({
                connectionId: id
            });
        },
        connectionRules: ({id}, _, {dataSources}) => {
            return dataSources.connectionRuleAPI.getConnectionRules({
                connectionId: id
            });
        },
    },
    Departure: {
        connection: ({connectionId}, _, {dataSources}) => {
            return dataSources.connectionAPI.getConnection(connectionId);
        },
    },
    ConnectionRule: {
        connection: ({connectionId}, _, {dataSources}) => {
            return dataSources.connectionAPI.getConnection(connectionId);
        },
        rule: ({ruleId}, _, {dataSources}) => {
            return dataSources.ruleAPI.getRule(ruleId);
        },
    },
    Rule: {
        connectionRules: ({id}, _, {dataSources}) => {
            return dataSources.connectionRuleAPI.getConnectionRules({
                ruleId: id
            });
        },
    }
};

module.exports = resolvers;
export {};