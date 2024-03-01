const fs = require('fs');

const readDataFromJsonFile = (filePath) => {
    try {
        const jsonData = fs.readFileSync(filePath, {
            encoding: 'utf-8',
            flag: 'r',
        });
        const data = JSON.parse(jsonData);
        return data;
    } catch (err) {
        throw err;
    }
};

const writeDataToJsonFile = (filePath, data) => {
    try {
        const dataFromFile = readDataFromJsonFile(filePath);
        const newId = dataFromFile[dataFromFile.length - 1].id + 1;
        const newData = {
            id: newId,
            ...data,
        };
        fs.writeFileSync(
            filePath,
            JSON.stringify([...dataFromFile, newData], 0, 4)
        );
        return newData;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    readDataFromJsonFile,
    writeDataToJsonFile,
};
