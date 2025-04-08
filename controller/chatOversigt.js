const Chat = require("../model/classes/Chat");


const showChatsFromDatabase = async (req, res) => {
    try {
        const msg = new Chat();
        const chats = await msg.showChats();
        console.log(chats);

        const html = `
        <div class="chat-box">
          <h2>Chatoversigt</h2>
          <ul>
      ${chats.map(chat => `
        <li class="chat-item">
          <strong>${chat.Title}</strong><br>
          <span>${chat.Description || ''}</span>
          <span class="status">${chat.MessageStatus || ''}</span>
        </li>
      `).join("")}
    </ul>
        </div>
          `;


        res.send(html);

    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
};

module.exports.showChatsFromDatabase = showChatsFromDatabase;