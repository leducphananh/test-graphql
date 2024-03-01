const {
    readDataFromJsonFile,
    writeDataToJsonFile,
} = require('../utils/helpers');
const authorPath = './mocks/authors.json';

const getAllAuthors = () => {
    return readDataFromJsonFile(authorPath);
};

const getAuthorById = (id) => {
    return getAllAuthors().find((author) => author.id === Number(id));
};

const createAuthor = ({ name, age }) => {
    return writeDataToJsonFile(authorPath, {
        name,
        age,
    });
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
};
