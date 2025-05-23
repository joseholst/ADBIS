
const Order = require ("../model/classes/Order");


const createOrderIntoDatabase = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const trainer = req.body.trainer;
        const category = req.body.category;

        let mediaType = null;
        let mediaData = null;
    
        if (req.file) {
          mediaType = req.file.mimetype;   // fx "image/jpeg"
          mediaData = req.file.buffer;    // binary data fra multer (memoryStorage)
        }

        const msg = new Order(
            null,         
            title,
            description,
            trainer,
            category,
            mediaType,
            mediaData,
        ); 

        await msg.createOrder();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Noget gik galt.');
    }
};
module.exports.createOrderIntoDatabase = createOrderIntoDatabase;

