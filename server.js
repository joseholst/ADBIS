const express = require ('express');
const multer = require('multer');

const {insertMessageToDatabase, createChatIntoDatabase } = require ('./controller/createChat');
const { showChatsFromDatabase } = require ('./controller/chatOversigt');

// Konfigurer multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/videos/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });


const app = express();
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //denne skal være her for at kunne sende data fra html til serveren
app.use(express.static('view', { index: 'ChatOprettelse.html' })); //dette kører til forsiden



//routes
app.post('/sendMessage', insertMessageToDatabase);
app.post('/createdChat', upload.single('media'),createChatIntoDatabase);
app.get('/chatOversigt', showChatsFromDatabase);


//start server
app.listen(PORT, () => {
    console.log(`Server kører på port:${PORT}`);
});
