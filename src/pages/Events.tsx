// Events.tsx
import React, { useEffect, useState } from 'react';
import EventCard from '@/components/EventCard';
import fetchFacebookEvents from '@/hooks/fetch-facebook-events'; // Import the fetch function

const Events: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // Fetch Facebook events when the component mounts
  useEffect(() => {
    const getEvents = async () => {
      const events = await fetchFacebookEvents();
      
      // Split the events into upcoming and past events based on the date
      const currentDate = new Date();
      const upcoming = events.filter(event => new Date(event.date) > currentDate);
      const past = events.filter(event => new Date(event.date) <= currentDate);

      setUpcomingEvents(upcoming);
      setPastEvents(past);
    };

    getEvents();
  }, []);

  return (
    <div className="section-container">
      <h2>Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        upcomingEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            description={event.description}
            imageUrl={event.imageUrl}
          />
        ))
      ) : (
        <p>No upcoming events available.</p>
      )}

      <h2>Past Events</h2>
      {pastEvents.length > 0 ? (
        pastEvents.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            description={event.description}
            imageUrl={event.imageUrl}
          />
        ))
      ) : (
        <p>No past events available.</p>
      )}
    </div>
  );
};

export default Events;