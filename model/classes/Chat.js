const sql = require('mssql');
const config = require ('../../config');


class Chat {
    constructor(
        chatID, title, description, mediaType, mediaData, date
    ){
        this.chatID = chatID;
        this.title = title;
        this.description = description;
        this.mediaType = mediaType;
        this.mediaData = mediaData;
        this.date = date;
        this.messageStatus = 'active';
    }

    async createChat(){
        try {
            await sql.connect(config);
            const request = new sql.Request();
    
            request.input("MediaData", sql.VarBinary(sql.MAX), this.mediaData);

            await request.query(`INSERT INTO Chat (Title, Description, MediaType, MediaData, MessageStatus, UserID) VALUES ('${this.title}', '${this.description}', '${this.mediaType}', @MediaData, '${this.messageStatus}','1')`);
            
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
    
            const result = await request.query('SELECT Title, Description, MessageStatus FROM Chat WHERE UserID = 1');
    
            console.log('Chat view:', result.recordset);
            return result.recordset;
        } catch (error) {
            console.error('Error fetching chats:', error);
            throw error;
        }
    }


};

module.exports = Chat;
