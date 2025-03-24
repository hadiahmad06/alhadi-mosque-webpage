// /api/fetchFacebookEvents.ts

import { VercelRequest, VercelResponse } from '@vercel/node';  // Type definitions for Vercel

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const pageId = process.env.FB_PAGE_ID;
  const accessToken = process.env.FB_PAGE_ACCESS_TOKEN;

  // Facebook Graph API endpoint
  const url = `https://graph.facebook.com/${pageId}/events?access_token=${accessToken}`;

  try {
    // Fetch events data from Facebook Graph API
    const response = await fetch(url);
    const data = await response.json();

    // Extract and format event data
    const events = data.data.map((event: any) => ({
      id: event.id,
      title: event.name,
      date: new Date(event.start_time).toLocaleDateString(),
      time: new Date(event.start_time).toLocaleTimeString(),
      description: event.description || "No description available",
      imageUrl: event.cover?.source || "",
      attendingCount: event.attending_count || 0,
      interestedCount: event.interested_count || 0,
    }));

    // Respond with the events data as JSON
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching Facebook events:", error);
    res.status(500).json({ error: "Failed to fetch Facebook events" });
  }
}