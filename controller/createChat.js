const App = require ("../model/classes/Message");


const createChat = async (req, res) => {
    try {
        const title = req.body.title;
        console.log(title);
        await App.createChat(title);
        res.redirect('/chatOversigt')
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};

module.exports.createChat = createChat;



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
