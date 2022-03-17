const db = require('../connection');

const createTables = async () => {
    const usersTablePromise = db.query(`
    CREATE TABLE users (
        username VARCHAR PRIMARY KEY,
        email VARCHAR NOT NULL
    );`);

    await Promise.all([usersTablePromise]);
}

const dropTables = async () => {
    await db.query(`DROP TABLE IF EXISTS users;`)
};

module.exports = {createTables, dropTables};