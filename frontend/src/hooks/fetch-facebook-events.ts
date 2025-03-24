const fetchFacebookEvents = async () => {
  const url = `https://alhadi-mosque-webpage.vercel.app/api/fetchFacebookEvents`;  // Frontend hits backend endpoint

  try {
    const response = await fetch(url);  // Makes a request to the backend
    const data = await response.json();  // Parses the data returned from the backend

    // Process the events data here
    return data;
  } catch (error) {
    console.error("Error fetching Facebook events:", error);
    return [];
  }
};

export default fetchFacebookEvents;