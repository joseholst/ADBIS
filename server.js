const express = require ('express');
const {insertMessageToDatabase, createChatToDatabase } = require ('./controller/createChat');
const { showChatsFromDatabase } = require ('./controller/chatOversigt');

const app = express();
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //denne skal være her for at kunne sende data fra html til serveren
app.use(express.static('view', { index: 'forside.html' })); //dette kører til forsiden



//routes
app.post('/sendMessage', insertMessageToDatabase);
app.post('/createdChat', createChatToDatabase);
app.get('/chatOversigt', showChatsFromDatabase);


//start server
app.listen(PORT, () => {
    console.log(`Server kører på port:${PORT}`);
});
