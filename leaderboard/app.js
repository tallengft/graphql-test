var express = require('express');
var { graphqlHTTP } = require('express-graphql');

var mongoose = require('mongoose');
var server = "mongodb://127.0.0.1:27017/my_database"

var schema = require ('./graphql/schema');

console.info(`Connecting to Mongo: ${server}`);
mongoose.connect(server, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));