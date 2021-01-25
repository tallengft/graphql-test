var {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLNonNull,
  } = require('graphql');
  var { getISOStringFromDate } =  require('../../../services/date-formatter');

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The id of the user',
      },
      name: {
        type: GraphQLString,
        description: 'The name of the user',
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'User email',
      },
      createdAt: {
        type: GraphQLString,
        description: 'Created date in ISO format',
        resolve: user => getISOStringFromDate(user.createdAt),
      },
      updatedAt: {
        type: GraphQLString,
        description: 'Updated date in ISO format',
        resolve: user => getISOStringFromDate(user.updatedAt),
      },
    },
  });
  
  const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'Defines all the arguments that are needed to create or update a user',
    fields: {
      name: {
        type: GraphQLString,
        description: 'The name of the user',
      },
      email: {
        type: GraphQLString,
        description: 'User email',
      },
    },
  });
  
  module.exports.UserType = UserType;
  module.exports.UserInputType = UserInputType;