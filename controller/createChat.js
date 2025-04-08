
const Chat = require ("../model/classes/Chat");


const createChatIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;

        let mediaType = null;
        let mediaData = null;
    
        if (req.file) {
          mediaType = req.file.mimetype;   // fx "image/jpeg"
          mediaData = req.file.buffer;    // binary data fra multer (memoryStorage)
        }

        const msg = new Chat(
            null,         
            title,
            description,
            mediaType,
            mediaData,
        ); 

        await msg.createChat();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Noget gik galt.');
    }
};
module.exports.createChatIntoDatabase = createChatIntoDatabase;

