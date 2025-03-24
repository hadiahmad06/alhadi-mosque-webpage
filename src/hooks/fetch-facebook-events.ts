const fetchFacebookEvents = async () => {
  const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
  const accessToken = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
  const url = `https://graph.facebook.com/${pageId}/events?access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Process and return the events data
    return data.data.map((event) => ({
        id: event.id, // Event ID
        title: event.name, // Event title
        date: new Date(event.start_time).toLocaleDateString(), // Event start date
        time: new Date(event.start_time).toLocaleTimeString(), // Event start time
        description: event.description || "No description available", // Event description
        imageUrl: event.cover?.source || "", // Event cover image
        attendingCount: event.attending_count || 0, // Number of people attending
        interestedCount: event.interested_count || 0, // Number of people interested
      }));
  } catch (error) {
    console.error("Error fetching Facebook events:", error);
    return [];
  }
};

export default fetchFacebookEvents;