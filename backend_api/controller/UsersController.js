import dbClient from '../utils/mongodb';
import redisClient from '../utils/redisdb';
import { v4 as uuidv4 } from 'uuid';
import sha1 from 'sha1';
import dotenv from 'dotenv';

dotenv.config();

const timeOut = parseInt(process.env.TIMEOUT_24_HOURS);

class UsersController {
    static async newUser(req, res) {
        const { name, email, password } = req.body;

        try {
            const db = dbClient.db();
            
            // Check if user with email already exists
            const foundUser = await db.collection('users').findOne({ email });

            if (foundUser) {
                return res.status(400).json({ error: "Email already exists" });
            }

            // Hash the password
            const hashPwd = sha1(password);

            // Insert new user into the database
            const newUser = await db.collection('users').insertOne({ name, email, hashPwd });

            return res.status(201).json({ id: newUser.insertedId, email });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    static async getUser(req, res) {
        try {
            const userCredentials = req.headers['authorization'];
    
            if (!userCredentials) {
                return res.status(400).json({ error: "Authorization header missing" });
            }
    
            // Get Basic authentication from Authorization header
            const basicAuth = userCredentials.split(' ')[1];
    
            // Decode base64 string and split into username and password
            const decodedAuth = Buffer.from(basicAuth, 'base64').toString('utf-8');

            const [username, password] = decodedAuth.split(':');
    
            const db = dbClient.db();
            
            // Find user by email (assuming username is actually email)
            const foundUser = await db.collection('users').findOne({ name: username });
    
            if (!foundUser) {
                return res.status(400).json({ error: "Invalid username and password" });
            }
    
            // Compare hashed passwords
            const hashedPassword = sha1(password);
            
            if (hashedPassword !== foundUser.hashPwd) {
                return res.status(400).json({ error: "Invalid usernames or passwords" });
            }
    
            // Generate session token
            const sessToken = uuidv4();
    
            // Set token in Redis
            const key = `auth_${sessToken}`
            await redisClient.setCache(key, foundUser._id.toString(), 100000);
            // await redisClient.setCache('session', foundUser._id.toString(), 5000);
    
            return res.status(200).json({ token: sessToken, name: foundUser.name });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    static async endSession(req, res) {
        const sessToken = req.headers['x-token'];

        console.log(sessToken);
    
        if (!sessToken) {
            return res.status(400).json({ error: "Session header missing" });
        }
    
        try {
            const cacheUser = await redisClient.getCache(`auth_${sessToken}`);

            console.log(cacheUser);
    
            if (!cacheUser) {
                return res.status(400).json({ error: "No user found in cache" });
            }
    
            await redisClient.delCache(`auth_${sessToken}`);
            return res.status(201).json({ message: "Successfully ended session. Call back again" });
        } catch (error) {
            console.error("Error ending session:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    
}

export default UsersController;
