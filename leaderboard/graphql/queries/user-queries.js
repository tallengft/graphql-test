var { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
var { UserType } = require('../types/user-type');
var { getUsersDB, getUserByIdDB } = require('../../models/user');

exports.user = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of the user that you wanna get',
    },
  },
  resolve: (_, args) => getUserByIdDB(args.id),
};

exports.users = {
  type: new GraphQLList(UserType),
  resolve: () => getUsersDB(),
};
