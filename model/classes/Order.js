const sql = require('mssql');
const config = require ('../../config');


class Order {
    constructor(
        orderID, title, description, trainer, category, mediaType, mediaData, create_at)
    {
        this.orderID = orderID;
        this.title = title;
        this.description = description;
        this.trainer = trainer; //baseret på klassen Trainer
        this.category = category //baseret på klassen Category/Product
        this.mediaType = mediaType;
        this.mediaData = mediaData;
        this.created_at = create_at;
        this.status = 'afventer svar';
    }

    async createOrder(){
        try {
            await sql.connect(config);
            const request = new sql.Request();
    
            request.input("MediaData", sql.VarBinary(sql.MAX), this.mediaData);

            await request.query(`INSERT INTO Chat (Title, Description, Trainer, Category, MediaType, MediaData, MessageStatus, UserID) VALUES ('${this.title}', '${this.description}', '${this.trainer}', '${this.category}', '${this.mediaType}', @MediaData, '${this.status}','1')`);
            
            console.log(`Message inserted into database "${this.title}"`);
        } catch (error) {
            console.error('Error inserting message:', error);
            throw error;
        }
    }


    async showOrders(){
        try {
            await sql.connect(config);
            const request = new sql.Request();
    
            const result = await request.query('SELECT ChatID, Title, Description, Trainer, Category, MessageStatus FROM Chat WHERE UserID = 1');
    
            console.log('Chat view:', result.recordset);
            return result.recordset;
        } catch (error) {
            console.error('Error fetching chats:', error);
            throw error;
        }
    }

    async uploadVideo(){


    };
};

module.exports = Order;
