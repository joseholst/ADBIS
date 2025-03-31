const sql = require('mssql');

const config = {
    user: 'ccgolf1234!@ccgolff',
    password: 'StærkKode123!',
    server: 'ccgolff.database.windows.net',
    database: 'CCGolf1234!',
    options: {
        encrypt: true, // Enable encryption
        trustServerCertificate: false, // Do not trust the server certificate
        enableArithAbort: true // Enable ArithAbort option
    }
}; 


module.exports = config;