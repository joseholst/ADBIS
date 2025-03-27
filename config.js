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

// Forbind og hent data
sql.connect(config).then(() => {
    return sql.query('SELECT * FROM [User] WHERE [UserID] = 1');
  }).then(result => {
    console.log('Data fra tabellen user:');
    console.log(result.recordset);
    sql.close();
  }).catch(err => {
    console.log('Fejl:', err.message);
  });


module.exports = config;