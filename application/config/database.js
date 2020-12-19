const mysql =require('mysql2');

const pool = mysql.createPool({
    connectionLimit:50,
    host: 'localhost',
    user: 'root',
    password: 'Busterc@1',
    database: 'csc317db',
    connectionLimit:50,
    waitForConnections: true,
    debug: false,
});

const promisePool =pool.promise();

module.exports = promisePool;