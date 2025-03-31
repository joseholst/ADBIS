const sql = require('mssql');
const config = require ('./config');

async function sendMessage(message) {
    try {
        await sql.connect(config);
        const request = new sql.Request();

        // Brug parameterisering for sikkerhed mod SQL injection
        request.input('message', sql.VarChar, message);
        await request.query('INSERT INTO Messages (MessageText) VALUES (@message)');
        
        console.log('Message inserted into database');
    } catch (error) {
        console.error('Error inserting message:', error);
        throw error;
    }
}

module.exports.sendMessage = sendMessage;