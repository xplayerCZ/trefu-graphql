const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const RouteAPI = require('./datasources/route-api');
const StopAPI = require('./datasources/stop-api');
const RouteStopAPI = require("./datasources/route-stop-api");
const PacketAPI = require("./datasources/packet-api");
const LineAPI = require("./datasources/line-api");
const ConnectionAPI = require("./datasources/connection-api");
const ConnectionRuleAPI = require("./datasources/connection-rule-api");
const DepartureAPI = require("./datasources/departure-api");
const RuleAPI = require("./datasources/rule-api");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
        return {
            packetAPI: new PacketAPI(),
            lineAPI: new LineAPI(),
            routeAPI: new RouteAPI(),
            routeStopAPI: new RouteStopAPI(),
            stopAPI: new StopAPI(),
            connectionAPI: new ConnectionAPI(),
            connectionRuleAPI: new ConnectionRuleAPI(),
            departureAPI: new DepartureAPI(),
            ruleAPI: new RuleAPI(),
        };
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
});