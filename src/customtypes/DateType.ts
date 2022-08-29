const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: string) {
        return value; // Convert outgoing Date to integer for JSON
    },
    parseValue(value: string) {
        return value; // Convert incoming integer to Date
    },
});

module.exports = dateScalar