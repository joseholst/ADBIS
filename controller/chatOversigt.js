const Chat = require ("../model/classes/Chat");


const showChatsFromDatabase = async (req, res) => {
    try {
        const msg = new Chat(
            null,         // messageID
            null,        // title
            null,         // assignedTrainer
            null,         // description
            null,         // user
            new Date(),   // date
            'open'        // messageStatus
        ); 

        const chats = await msg.showChats(); 

        console.log(chats);

        res.send(`
            <ul>
              ${chats.map(chat => `<li>${chat.Title}</li>`).join('')}
            </ul>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};

module.exports.showChatsFromDatabase = showChatsFromDatabase;