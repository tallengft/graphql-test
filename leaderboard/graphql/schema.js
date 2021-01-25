var {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

// Importing queries
var { user, users } = require('./queries/user-queries');

// Importing mutations
var {
  createUser,
  updateUser,
  deleteUser,
} = require('./mutations/user-mutations');

// Listing all queries available
const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root for all queries available.',
  fields: {
    users,
    user,
  },
});

// Listing all mutations available
const mutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root for all mutations available.',
  fields: {
    createUser,
    updateUser,
    deleteUser,
  },
});

// Creating schema
const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = schema;
