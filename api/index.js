// index.js

const express = require('express');
const dotenv = require('dotenv');
const fetchFacebookEvents = require('./fetchFacebookEvents'); // Assuming the event-fetching function is in this file
const app = express();

// Load environment variables from .env file
dotenv.config();

// Define the port
const PORT = process.env.PORT || 3000;

// Create an endpoint for the Facebook events fetch
app.get('/api/fetchFacebookEvents', async (req, res) => {
  try {
    // Call the fetchFacebookEvents function
    const events = await fetchFacebookEvents();
    res.status(200).json(events); // Send the events as JSON response
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch Facebook events' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});