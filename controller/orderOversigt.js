const Order = require("../model/classes/Order");


const showOrdersFromDatabase = async (req, res) => {
    try {
        const msg = new Order();
        const orders = await msg.showOrders();
        console.log(orders);

        const html = `
        <div class="chat-box">
          <h2>Ordreoversigt</h2>
          <ul>
      ${orders.map(order => `
        <li class="chat-item">
        <div class="top-row">
          <strong>${order.Title}</strong><br>
          <span class ="ordre"> Ordre ID: ${order.OrderID}</span>
        <div class = "mid">
        <span> Træner: ${order.Trainer}</span>
        <span> Kategori: ${order.Category}</span>
        </div>
        </div>
        <div class="right-column">
          <span class="status">${order.Status || ''}</span>
          <button class="openChat" onclick="alert('Du har åbnet chat: ${order.Title}')">Gå til chat</button>
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

module.exports.showOrdersFromDatabase = showOrdersFromDatabase;

