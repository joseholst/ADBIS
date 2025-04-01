const App = require ("../model/model1");


const showChatsFromDatabase = async (req, res) => {
    try {
        const chats = await App.showChats();
        res.status(200).send(chats);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};


module.exports.showChatsFromDatabase = showChatsFromDatabase;