const {GraphQLScalarType} = require("graphql/index");

const timeScalar = new GraphQLScalarType({
    name: 'Time',
    description: 'Time custom scalar type',
    serialize(value: string) {
        return value; // Convert outgoing Date to integer for JSON
    },
    parseValue(value: string) {
        return value; // Convert incoming integer to Date
    },
});

module.exports = timeScalar