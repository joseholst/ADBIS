const Chat = require ("../model/classes/Chat");


const createChatIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        console.log(description);
        console.log(title);

        const msg = new Chat(
            null,         // messageID
            title,        // title
            description,  // description
            null,         // user
            new Date(),   // date
            'open'        // messageStatus
        ); 
        await msg.createChat(title, description);


        res.redirect('/chatOversigt')
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
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
