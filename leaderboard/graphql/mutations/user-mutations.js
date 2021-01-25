var { GraphQLNonNull, GraphQLID } = require('graphql');
var { UserType, UserInputType } = require('../types/user-type');
var { createUserDB, updateUserDB, deleteUserDB } = require('../../models/user');

exports.createUser = {
  type: UserType,
  description: 'Create a user on database',
  args: {
    user: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve: (_, args) => createUserDB(args),
};

exports.updateUser = {
  type: UserType,
  description: 'Updates a user on database',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the user that you wanna update',
    },
    user: {
      type: new GraphQLNonNull(UserInputType),
      description: 'User data that you wanna update',
    },
  },
  resolve: (_, args) => updateUserDB(args),
};

exports.deleteUser = {
  type: UserType,
  description: 'Deletes a user on database',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the user that you wanna update',
    },
  },
  resolve: (_, args) => deleteUserDB(args),
};
