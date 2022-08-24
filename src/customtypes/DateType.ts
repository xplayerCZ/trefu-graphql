const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
        return value.toISOString().slice(0, 10); // Convert outgoing Date to integer for JSON
    },
    parseValue(value: string) {
        return new Date(value); // Convert incoming integer to Date
    },
});

module.exports = dateScalar