import { Authous, Books } from '../../data';

export const resolvers = {
  Query: {
    getBooks: (_parent: any, _args: any, _context: any, _info: any) => {
      return Books;
    },
    getAuthors: (_parent: any, _args: any, _context: any, _info: any) => {
      return Authous;
    },
  },

  Book: {
    author: (_parent: any, _args: any, _context: any, _info: any) => {
      const {author: authorId } = _parent;
      const [author] = Authous.filter(author => author.id == authorId);
      return author;
    },
  },

  Author: {
    books: (_parent: any, _args: any, _context: any, _info: any) => {
      const { id } = _parent;
      return Books.filter(book => book.author == id);
    },
  },



  Mutation: {
    createBook: () => {},
    createAuthor: () => {}
  }
}