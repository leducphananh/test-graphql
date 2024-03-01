const {
    readDataFromJsonFile,
    writeDataToJsonFile,
} = require('../utils/helpers');
const bookPath = './mocks/books.json';

const getAllBooks = () => {
    return readDataFromJsonFile(bookPath);
};

const getBookById = (id) => {
    return getAllBooks().find((book) => book.id === Number(id));
};

const getBooksByAuthorId = (authorId) => {
    return getAllBooks().filter((book) => book.authorId === authorId);
};

const createBook = ({ name, genre, authorId }) => {
    return writeDataToJsonFile(bookPath, {
        name,
        genre,
        authorId,
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    getBooksByAuthorId,
    createBook,
};
