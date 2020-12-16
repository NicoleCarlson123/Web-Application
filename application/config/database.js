const mysql =require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'Busterc@1',
    database: 'csc317db',
    connectionLimit:50,
    debug: false,
});



module.exports = pool;