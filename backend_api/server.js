import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path'; // Import path module for handling file paths
import routes from './routes/index';

dotenv.config();
const port = process.env.PORT || 5000; // Set default port if PORT environment variable is not defined

const app = express();

app.use(express.json());
app.use(cors());

// Define the path to the directory containing your poster images
const posterDirectory = path.join(__dirname, 'posters');

// Serve the poster images using express.static middleware
app.use('/posters', express.static(posterDirectory));

app.use('/', routes); // Use correct path for the imported routes

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});

export default app;



// import express from "express";
// import dotenv from 'dotenv';
// import cors from 'cors';
// import routes from './routes/index';

// //console.log(redisClient);

// dotenv.config();
// const port = process.env.PORT || 5000; // Set default port if PORT environment variable is not defined

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use('/', routes); // Use correct path for the imported routes

// app.listen(port, () => {
//     console.log(`App is listening on ${port}`);
// });

// export default app;