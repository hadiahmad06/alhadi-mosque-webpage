import secrets from '../../config/secrets.json'; // might break later

const fetchFacebookEvents = async () => {
  const pageId = secrets.pageId;
  const accessToken = secrets.accessToken;
  const url = `https://graph.facebook.com/${pageId}/events?access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Process and return the events data
    return data.data.map((event) => ({
      title: event.name,
      date: new Date(event.start_time).toLocaleDateString(),
      time: new Date(event.start_time).toLocaleTimeString(),
      description: event.description || "No description available",
      imageUrl: event.cover?.source || "",
    }));
  } catch (error) {
    console.error("Error fetching Facebook events:", error);
    return [];
  }
};

export default fetchFacebookEvents;