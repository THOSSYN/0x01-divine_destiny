// import dbClient from "../utils/mongodb";
const dbClient = require('../utils/mongodb');

const sampleEvents = [
    // Prayer events
    { 
        name: 'Morning Prayer Meeting',
        type: 'prayer event',
        description: 'Join us for a morning prayer meeting to start the day with prayer and devotion.',
        theme: 'Morning Prayer',
        imageUrl: 'prayer1.jpg'
    },
    { 
        name: 'Weekly Prayer Vigil',
        type: 'prayer event',
        description: 'Join us for our weekly prayer vigil as we intercede for our community and nation.',
        theme: 'Prayer Vigil',
        imageUrl: 'prayer2.jpg'
    },
    { 
        name: '24-Hour Prayer Chain',
        type: 'prayer event',
        description: 'Participate in our 24-hour prayer chain to cover our church and members in prayer continuously.',
        theme: 'Prayer Chain',
        imageUrl: 'prayer3.jpg'
    },
    // Devotional events
    { 
        name: 'Daily Devotional Reading',
        type: 'devotional',
        description: 'Join us for a daily devotional reading from the Book of Psalms.',
        theme: 'Daily Devotion',
        imageUrl: 'devotional1.jpg'
    },
    { 
        name: 'Weekly Devotional Study',
        type: 'devotional',
        description: 'Participate in our weekly devotional study as we explore the Gospel of John.',
        theme: 'Weekly Devotion',
        imageUrl: 'devotional2.jpg'
    },
    { 
        name: 'Monthly Devotional Retreat',
        type: 'devotional',
        description: 'Join us for our monthly devotional retreat for a time of spiritual refreshment and reflection.',
        theme: 'Devotional Retreat',
        imageUrl: 'devotional3.jpg'
    },
    // Bible study events
    { 
        name: 'Book of Genesis Study',
        type: 'bible study',
        description: 'Explore the Book of Genesis with us in our weekly Bible study sessions.',
        theme: 'Genesis Study',
        imageUrl: 'N/A'
    },
    { 
        name: 'Women\'s Bible Study Group',
        type: 'bible study',
        description: 'Join our women\'s Bible study group as we delve into the Word of God together.',
        theme: 'Women\'s Bible Study',
        imageUrl: 'N/A'
    },
    { 
        name: 'Men\'s Fellowship and Bible Study',
        type: 'bible study',
        description: 'Participate in our men\'s fellowship and Bible study for a time of spiritual growth and fellowship.',
        theme: 'Men\'s Fellowship',
        imageUrl: 'N/A'
    },
    // Worship events
    { 
        name: 'Sunday Worship Service',
        type: 'worship',
        description: 'Join us for our Sunday worship service as we lift up praises and worship to our God.',
        theme: 'Sunday Worship',
        imageUrl: 'worship1.jpg'
    },
    { 
        name: 'Night of Worship and Prayer',
        type: 'worship',
        description: 'Experience a night of worship and prayer as we seek the presence of God together.',
        theme: 'Night of Worship',
        imageUrl: 'music1.jpg'
    },
    { 
        name: 'Youth Worship Night',
        type: 'worship',
        description: 'Calling all youth to join us for a special worship night designed just for you.',
        theme: 'Youth Worship',
        imageUrl: 'N/A'
    },
    // Community events
    { 
        name: 'Community Clean-Up Day',
        type: 'community event',
        description: 'Join us for our community clean-up day as we come together to beautify our neighborhood.',
        theme: 'Clean-Up',
        imageUrl: 'communityevent.jpg'
    },
    { 
        name: 'Neighborhood Block Party',
        type: 'community event',
        description: 'Celebrate community and fellowship with us at our neighborhood block party event.',
        theme: 'Block Party',
        imageUrl: 'communityevent1.jpg'
    },
    { 
        name: 'Charity Fundraising Event',
        type: 'community event',
        description: 'Support a good cause and make a difference in our community at our charity fundraising event.',
        theme: 'Charity Fundraiser',
        imageUrl: 'communityevent2.jpg'
    }
];

function addTimestamps(events) {
    const currentDate = new Date();
    for (const event of events) {
        event.updated_at = currentDate;
        if (!event.created_at) {
            event.created_at = currentDate;
        }
    }
}

// Function to insert sample events into the database
async function insertSampleEvents() {
    try {
        // Connect to the MongoDB client
        const db = await dbClient.db();

        // Add timestamps to the event data
        addTimestamps(sampleEvents);

        // Insert sample events into the events collection
        await db.collection('occasions').insertMany(sampleEvents);
        console.log('Sample events inserted successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('MongoDB connection closed');
    }
}

// Call the function to insert sample events into the database
insertSampleEvents();