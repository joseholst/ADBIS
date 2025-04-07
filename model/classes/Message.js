const sql = require('mssql');
const config = require ('../../config');

class Message {
    constructor(
        messageID, title, assignedTrainer, description, user, date, messageStatus
    ){

        this.messageID = messageID;
        this.title = title;
        this.assignedTrainer = assignedTrainer;
        this.description = description;
        this.user = user;
        this.date = date;
        this.messageStatus = messageStatus;
    }

    async createChat(title){
        try {
            await sql.connect(config);
            const request = new sql.Request();
    
            await request.query(`INSERT INTO Chat (Title, UserID) VALUES ('${title}', '1')`);
            
            console.log(`Message inserted into database "${title}"`);
        } catch (error) {
            console.error('Error inserting message:', error);
            throw error;
        }
    }

};

module.exports = Message;
