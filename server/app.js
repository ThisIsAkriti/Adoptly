const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000' , 'http://localhost:5173'] 
}));

app.use(express.json());

connectDB().then(() => {
    console.log("Database connection established!");

    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
}).catch(err => {
    console.error("Database connection failed : ", err);
})