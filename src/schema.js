const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    stops: [Stop!]!
    stop(id: ID!): Stop!
    routes: [Route!]!
    route(id: ID!): Route!
    packets: [Packet!]!
    packet(id: ID!): Packet!
    lines: [Line!]!
    line(id: ID!): Line!
    connections: [Connection!]!
    connection(id: ID!): Connection!
    departures: [Departure!]!
    departure(id: ID!): Departure!
    rules: [Rule!]!
    rule(id: ID!): Rule!
  }
  
  type Stop {
    id: ID!
    name: String!
    latitude: String!
    longitude: String!
    code: Int!
    routeStops: [RouteStop!]!
  }
  
  type Route {
    id: ID!
    length: Int!
    direction: Int!
    routeStops: [RouteStop!]!
    connections: [Connection!]!
    line: Line!
  }
  
  type RouteStop {
    route: Route!
    stop: Stop!
    index: Int!
    served: [RouteStop!]!
  }
  
  type Packet {
    id: ID!
    validFrom: Int!
    validTo: Int!
    code: Int!
    lines: [Line!]!
  }
  
  type Line {
    id: ID!
    shortCode: String!
    fullCode: Int!
    packet: Packet!
    routes: [Route!]!
  } 
  
  type Connection {
    id: ID!
    route: [Route!]!
    number: Int!
    departures: [Departure!]!
    connectionRules: [ConnectionRule!]!
  }
  
  type Departure {
    id: ID!
    time: String
    connection: Connection!
  }
  
  type ConnectionRule {
    connection: Connection!
    rule: Rule!
  }
  
  type Rule {
    id: ID!
    description: String!
    connectionRules: [ConnectionRule!]!
  }
`;

module.exports = typeDefs;
