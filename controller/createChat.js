const Message = require ("../model/classes/Message");


const createChatIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        console.log(title);

        const msg = new Message(
            null,         // messageID
            title,        // title
            null,         // assignedTrainer
            null,         // description
            null,         // user
            new Date(),   // date
            'open'        // messageStatus
        ); 
        await msg.createChat(title);


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
