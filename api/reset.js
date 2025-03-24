require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');

// Read the FB environment variables
const { FB_PAGE_ID, FB_PAGE_ACCESS_TOKEN, FB_APP_ID, FB_APP_SECRET, LAST_RESET_TIMESTAMP } = process.env;

// Calculate the timestamp of 30 days ago
const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;  // 30 days in milliseconds

// Check if the LAST_RESET_TIMESTAMP is older than 30 days
if (!LAST_RESET_TIMESTAMP || parseInt(LAST_RESET_TIMESTAMP) < thirtyDaysAgo) {
    console.log('Reset required: Last reset was more than 30 days ago.');

    // Call the API to refresh the token (assuming you're using a short-lived token)
    const refreshTokenUrl = `https://graph.facebook.com/v11.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&fb_exchange_token=${FB_PAGE_ACCESS_TOKEN}`;

    fetch(refreshTokenUrl)
        .then(response => response.json())
        .then(data => {
            if (data.access_token) {
                // Save the new long-lived token to your environment
                const newAccessToken = data.access_token;

                console.log('Token refreshed successfully!');

                // Save the new token and update LAST_RESET_TIMESTAMP
                process.env.FB_PAGE_ACCESS_TOKEN = newAccessToken;
                process.env.LAST_RESET_TIMESTAMP = Date.now().toString();

                // Update .env file (Note: You should never commit this file to GitHub)
                fs.appendFileSync('.env', `\nFB_PAGE_ACCESS_TOKEN=${newAccessToken}`);
                fs.appendFileSync('.env', `\nLAST_RESET_TIMESTAMP=${Date.now()}`);

                console.log('Environment variables updated successfully!');
            } else {
                console.error('Failed to refresh the token:', data.error.message);
            }
        })
        .catch(error => {
            console.error('Error during token refresh:', error);
        });
} else {
    console.log('No reset needed: Last reset was within the last 30 days.');
}