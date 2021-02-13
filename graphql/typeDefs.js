const { gql } = require('apollo-server');

module.exports = gql`
  type Posts {
    id: ID!,
    body: String!,
    createdAt: String!,
    username: String!
  }
  type Query {
    getPosts: [Posts]
  }
`