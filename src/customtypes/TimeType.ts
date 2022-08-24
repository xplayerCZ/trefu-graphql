const {GraphQLScalarType} = require("graphql/index");

const timeScalar = new GraphQLScalarType({
    name: 'Time',
    description: 'Time custom scalar type',
    serialize(value: Date) {
        return value.toISOString().slice(11, 19); // Convert outgoing Date to integer for JSON
    },
    parseValue(value: string) {
        return new Date(value); // Convert incoming integer to Date
    },
});

module.exports = timeScalar