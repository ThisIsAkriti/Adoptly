const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: ['http://localhost:3000' , 'http://localhost:5173'] 
}));
app.use(express.json());

app.get('/' , (req , res) => res.send('server is up and running'));
app.get('/api/test' , (req , res) => res.json({message: 'Hello from server testing!'}))

app.listen(process.env.PORT , () => console.log(`Server is running on port ${process.env.PORT}`));