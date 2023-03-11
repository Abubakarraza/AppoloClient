import { gql } from 'apollo-server';
const typeDefs = gql`
  type Query {
    users: [User!]!
    quotes: [Quote]
    user(id: ID): User
    quote(by: ID): [Quote]
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotess: [Quote]
  }
  type Quote {
    by: ID
    name: String
  }
  type Mutation {
    createUser(newUser: UserInput): User
    delUser(id: ID): User
  }
  input UserInput {
    firstName: String
    lastName: String
    email: String
    id: String
    password: String
  }
`;
export default typeDefs;
