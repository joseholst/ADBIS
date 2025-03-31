const express = require('express');
const { insertMessageToDatabase, createChatToDatabase } = require('./controller');

const app = express();
const PORT = 3000; 

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Serveren virker!');
  });
app.post('/sendMessage', insertMessageToDatabase);
app.post('/createdChat', createChatToDatabase);

app.listen(PORT, () => {
    console.log(`Server kører på http://localhost:${PORT}`);
});
