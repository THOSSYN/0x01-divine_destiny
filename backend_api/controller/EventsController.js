import dbClient from "../utils/mongodb";
import redisClient from "../utils/redisdb";

function addTimestamps(event) {
    const currentDate = new Date();
    event.updated_at = currentDate;
    if (!event.created_at) {
        event.created_at = currentDate;
    }
}

class EventsController {
    static async createEvent(req, res) {
        const { name, type, description } = req.body;

        // Validate event data against schema properties
        if (!name || !type || !description || theme || imageUrl) {
            return res.status(400).json({ error: "name, type,  description, theme, imageUrl are required for an event" });
        }

        try {
            const eventData = { name, type, description, theme, imageUrl };
            
            // Connect to the database
            const db = await dbClient.db();

            // Add timestamps to the event data
            addTimestamps(eventData);

            // Insert the event into the collection
            const event = await db.collection("occasions").insertOne(eventData);

            return res.status(201).json({ eventId: event.insertedId, name });
        } catch (error) {
            console.error("Could not create event:", error);
            return res.status(500).json({ error: "Server error" });
        }
    }

    static async getEvents(req, res) {
        const { search, filters } = req.query;
        const eventsArray = ["Devotional", "Prayer", "Bible Study", "Community", "Worship"];
        let searchFilter = {};

        // Check if search string is provided
        if (search) {
            // Add regex pattern to perform case-insensitive search
            searchFilter.name = { $regex: new RegExp(search, 'i') };
        }

        // Check if filters are provided
        if (filters && Array.isArray(filters)) {
            // Filter out invalid event types
            const validFilters = filters.filter(event => eventsArray.includes(event));
            // Add valid filters to the search filter
            if (validFilters.length > 0) {
                searchFilter.type = { $in: validFilters };
            }
        }

        try {
            // Connect to the database
            const db = await dbClient.db();
            // Find events based on search filter
            const searchResult = await db.collection('occasions').find(searchFilter).toArray();

            // Accumulate response objects into an array
            const responseArray = searchResult.map(result => {
                const posterImage = `/posters/${result.imageUrl}`;
                return {
                    name: result.name,
                    type: result.type,
                    description: result.description,
                    theme: result.theme,
                    poster: posterImage,
                };
            });

            // Send the response array to the client
            return res.status(200).json(responseArray);
        } catch (error) {
            console.log("Error fetching search result:", error);
            return res.status(500).json({ error: "Internal server error; can't fetch search result" });
        }
    }
    
}

export default EventsController;
