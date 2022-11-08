require('dotenv').config();

const {ApolloServer} = require('apollo-server');
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

const API_URL = process.env.API_URL || 'http://localhost:8080/'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
        return {
            packetAPI: new PacketAPI(API_URL),
            lineAPI: new LineAPI(API_URL),
            routeAPI: new RouteAPI(),
            routeStopAPI: new RouteStopAPI(API_URL),
            stopAPI: new StopAPI(API_URL),
            connectionAPI: new ConnectionAPI(API_URL),
            connectionRuleAPI: new ConnectionRuleAPI(API_URL),
            departureAPI: new DepartureAPI(API_URL),
            ruleAPI: new RuleAPI(API_URL),
        };
    },
});

// The `listen` method launches a web server.
server.listen().then(({url}: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
});