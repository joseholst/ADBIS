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
        <div class="top-row">
          <strong>${chat.Title}</strong><br>
          <span>${chat.Description && chat.Description.length > 100 
  ? chat.Description.substring(0, 100) + '...' 
  : chat.Description || ''}</span> 
        <span> Kategori: ${chat.Category}</span>
        </div>
        <div class="right-column">
          <span class="status">${chat.MessageStatus || ''}</span>
          <button class="openChat" onclick="alert('Du har åbnet chat: ${chat.Title}')">Gå til chat</button>
        </div>
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