const App = require ("../model/model1");


const showChatsFromDatabase = async (req, res) => {
    try {
        const chats = await App.showChats();
        console.log(chats)
        res.send(`
            <ul>
              ${chats.map(chat => `<li>${chat.Title}</li>`).join('')}
            </ul>
          `)
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};


module.exports.showChatsFromDatabase = showChatsFromDatabase;