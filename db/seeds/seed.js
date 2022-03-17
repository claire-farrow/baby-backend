const format = require("pg-format");
const db = require("../connection");
const {dropTables, createTables} = require("../data/manage-tables");

const seed = async ({userData}) => {
    await dropTables();
    await createTables();

    const insertUsersQueryStr = format(
        "INSERT INTO users (username, email) VALUES %L RETURNING *;",
        userData.map(({username, email}) => [
            username,
            email
        ])
    );
    const usersPromise = db.query(insertUsersQueryStr)
    .then((result) => result.rows);

    await Promise.all([usersPromise])
}

module.exports = seed;