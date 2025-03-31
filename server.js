const express = require('express');
const { sendMessage } = require('/app');

const app = express();
const PORT = 3000; 

app.use(express.json()); 

app.post('/sendMessage', insertMessageToDatabase);

app.listen(PORT, () => {
    console.log(`Server kører på http://localhost:${PORT}`);
});
