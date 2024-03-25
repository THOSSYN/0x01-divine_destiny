import redis from 'redis';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

const DBR_HOST = process.env.DBR_HOST;
const DBR_PORT = process.env.DBR_PORT;
const TIMEOUT_24_HOURS = process.env.TIMEOUT_24_HOURS; // Assuming the timeout is in seconds

class RedisClient {
    constructor() {
        this.client = redis.createClient({
            host: DBR_HOST,
            port: DBR_PORT,
            connect_timeout: TIMEOUT_24_HOURS * 1000, // Convert seconds to milliseconds
        });

        this.client.on('connect', () => {
            console.log('Redis is connected');
        });
        
        this.client.on('error', (error) => {
            console.log('Redis connection error:', error);
        });
    }

    async setCache(key, value, duration) {
        try {
            const asyncCacheSet = promisify(this.client.set).bind(this.client);
            await asyncCacheSet(key, value, 'EX', duration);
            console.log('Key set successfully');
        } catch(error) {
            console.log('Error setting key:', error);
        }
    }

    async getCache(key) {
        try {
            const asyncCacheGet = promisify(this.client.get).bind(this.client);
            const value = await asyncCacheGet(key);
            console.log('Value retrieved:', value);
            return value;
        } catch(error) {
            console.log('Error getting value for key:', error);
            return null;
        }
    }

    async delCache(key) {
        try {
            const asyncCacheDel = promisify(this.client.del).bind(this.client);
            const deletedCount = await asyncCacheDel(key);
            console.log('Number of keys deleted:', deletedCount);
            return deletedCount;
        } catch(error) {
            console.log('Error deleting key:', error);
            return 0;
        }
    }
}

const redisClient = new RedisClient();
export default redisClient;
