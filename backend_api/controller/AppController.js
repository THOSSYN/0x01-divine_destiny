import { dbClient } from '../utils/mongodb';
import axios from 'axios';

class AppController {
    static async getHome(req, res) {
        try {
            const response = await axios.get('http://localhost:5173/');
            if (response.status !== 200) { // Corrected condition
                throw new Error('Failed to fetch home page');
            }
            
            const html = response.data;
            res.send(html);
        } catch (error) {
            console.error('Error fetching home page:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default AppController;
