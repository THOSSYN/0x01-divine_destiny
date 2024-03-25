import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index';

//console.log(redisClient);

dotenv.config();
const port = process.env.PORT || 5000; // Set default port if PORT environment variable is not defined

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', routes); // Use correct path for the imported routes

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});

export default app;