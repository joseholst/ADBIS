const sql = require('mssql');
const config = require ('../config');

async function createChat(name){
    try {
        await sql.connect(config);
        const request = new sql.Request();

        await request.query(`INSERT INTO Chat (Title, UserID) VALUES ('${name}', '1')`);
        
        console.log(`Message inserted into database "${name}"`);
    } catch (error) {
        console.error('Error inserting message:', error);
        throw error;
    }
}


async function showChats(){
    try {
        await sql.connect(config);
        const request = new sql.Request();

        const result = await request.query('SELECT Title FROM Chat WHERE UserID = 1');

        console.log('Chat view:', result.recordset);
        return result.recordset;
    } catch (error) {
        console.error('Error fetching chats:', error);
        throw error;
    }
}



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
module.exports.createChat = createChat;
module.exports.showChats = showChats;
