const express = require ('express');
const multer = require('multer');
const upload = multer(); // bruger memoryStorage


const {createOrderIntoDatabase } = require ('./controller/createOrder');
const { showOrdersFromDatabase } = require ('./controller/orderOversigt');


const app = express();
const PORT = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //denne skal være her for at kunne sende data fra html til serveren
app.use(express.static('view', { index: 'app.html' })); //dette kører til forsiden



//routes
app.post('/createChat', upload.single("file"),createOrderIntoDatabase);
app.get('/chatOversigt', showOrdersFromDatabase);


//start server
app.listen(PORT, () => {
    console.log(`Server kører på port:${PORT}`);
});
