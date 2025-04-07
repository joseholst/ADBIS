const sql = require('mssql');
const config = require ('../../config');

class Chat {
    constructor(
        chatID, title, description, userID, date
    ){
        this.chatID = chatID;
        this.title = title;
        this.description = description;
        this.userID = userID;
        this.date = date;
        this.messageStatus = 'active';
    }

    async createChat(){
        try {
            await sql.connect(config);
            const request = new sql.Request();
    
            await request.query(`INSERT INTO Chat (Title, Description, UserID) VALUES ('${this.title}', '${this.description}', '1')`);
            
            console.log(`Message inserted into database "${this.title}"`);
        } catch (error) {
            console.error('Error inserting message:', error);
            throw error;
        }
    }


    async showChats(){
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


};

module.exports = Chat;
