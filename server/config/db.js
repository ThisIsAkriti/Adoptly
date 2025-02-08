//database
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_ID) {
            throw new Error('MongDB URI is not defined!')
        }
        const conn = await mongoose.connect(process.env.MONGO_ID, {});
         

    }catch(err){
        console.error(`Database connection failed... ${err.message}`)
        process.exit(1);
    }
};
module.exports = connectDB; 