import { data, quote } from './data.js';

const resolvers = {
  Query: {
    users: () => data,
    quotes: () => quote,
    user: (_, usr) => data.find((da) => da.id == usr.id),
    quote: (_, quo) => quote.filter((qo) => qo.by == quo.by),
  },
  User: {
    quotess: (user) => quote.filter((quo) => quo.by == user.id),
  },
  Mutation: {
    createUser: (_, { newUser }) => {
      const id = Math.floor(Math.random() * 1000000);
      data.push({ id, ...newUser });
      return data.find((user) => user.id == id);
    },
    delUser: (_, { id }) => {
      data.filter((user) => user.id !== id);
      return 'deleted';
    },
  },
};
export default resolvers;
