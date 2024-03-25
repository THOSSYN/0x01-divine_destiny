import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const DATABASE = process.env.DATABASE;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

class DBClient {
    constructor() {
        const url = `mongodb://${DB_HOST}:${DB_PORT}`;
        this.client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.connect();
    }

    async connect() {
        try {
            await this.client.connect();
            console.log("Connected to DB");
        } catch (error) {
            console.error('Could not connect to DB:', error);
        }
    }

    db() {
        return this.client.db(DATABASE);
    }
}

const dbClient = new DBClient();
export default dbClient;