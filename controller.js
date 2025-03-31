const App = require ("./app");


const createChatToDatabase = async (req, res) => {
    try {
        const name = req.body.name;
        await App.createChat(name);
        res.status(200).send('Chat created!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};

module.exports.createChatToDatabase = createChatToDatabase;

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
