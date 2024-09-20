import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connectdb.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res) =>{
    res.send('Hello from DALL.E!');
});


const startServer = async() => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(3000, () => console.log("Server is listening on port 3000"))
    } catch(error){
        console.log(error);
    }
}

startServer();