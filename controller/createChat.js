
const Chat = require ("../model/classes/Chat");


const createChatIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;

        // Her tjekker vi om der er uploadet en fil
        let mediaType = null;
        let filePath = null;

        if (req.file) {
            mediaType = req.file.mimetype;   // fx "video/mp4"
            filePath = req.file.path;        // fx "uploads/videos/1712573982394-video.mp4"
        }

        const msg = new Chat(
            null,         // chatID
            title,
            description,
            mediaType,
            filePath,
            messageStatus = 'open', // messageStatus
            new Date()    // date
        ); 

        // Her kalder vi createChat, som nu også skal tage højde for mediaType og filePath
        await msg.createChat(title, description, mediaType, filePath, messageStatus);

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
