const express = require('express');
const env = require('dotenv');
//const port = 2000;
const app = express();
const mongoose = require('mongoose');

//routes
//const userRoutes = require('./routes/user');


//environment variables or constants
env.config();

// mongodb connection
// mongodb+srv://emmanuelonyinyeo:<password>@cluster0.fdghy9e.mongodb.net/
//mongoose.connect(
//    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${MONGO_DB_DATABASE}.fdghy9e.mongodb.net/`
//).then(() => {
//    console.log('Database connected!');
//});

//app.use(express.json());
//app.use('/api', userRoutes);


const uri = 'mongodb+srv://emmanuelonyinyeo:suLTan1485@cluster0.fdghy9e.mongodb.net/'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(error);
    }
}

connect()


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});