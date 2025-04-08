
const Chat = require ("../model/classes/Chat");


const createChatIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const messageStatus = 'open';// messageStatus


        let mediaType = null;
        let mediaData = null;
    
        if (req.file) {
          mediaType = req.file.mimetype;   // fx "image/jpeg"
          mediaData = req.file.buffer;    // binary data fra multer (memoryStorage)
        }


        const msg = new Chat(
            null,         // chatID
            title,
            description,
            mediaType,
            mediaData,
        ); 

        // Her kalder vi createChat, som nu også skal tage højde for mediaType og filePath
        await msg.createChat();

        res.redirect('/chatOversigt');
    } catch (error) {
        console.error(error);
        res.status(500).send('Noget gik galt.');
    }
};
module.exports.createChatIntoDatabase = createChatIntoDatabase;



const insertMessageToDatabase = async (req, res) => {
    try {
        const message = req.body.message;
        await App.sendMessage(message);
        res.status(200).send('Message sent!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};

module.exports.insertMessageToDatabase = insertMessageToDatabase;
