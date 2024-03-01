const {
    getAllAuthors,
    getAuthorById,
    createAuthor,
} = require('../services/authors');
const {
    getAllBooks,
    getBookById,
    getBooksByAuthorId,
    createBook,
} = require('../services/books');

const resolvers = {
    // Query
    Query: {
        books: getAllBooks,
        authors: getAllAuthors,
        book: (parent, args) => getBookById(args.id),
        author: (parent, args) => getAuthorById(args.id),
    },

    Book: {
        author: (parent) => getAuthorById(parent.authorId),
    },

    Author: {
        books: (parent) => getBooksByAuthorId(parent.id),
    },

    // Mutation
    Mutation: {
        createAuthor: (parent, args) => createAuthor(args),
        createBook: (parent, args) => createBook(args),
    },
};

module.exports = resolvers;
