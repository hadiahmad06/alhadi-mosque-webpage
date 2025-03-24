
import React, { useEffect, useState } from 'react';
import EventCard from '@/components/EventCard';
import fetchFacebookEvents from '@/hooks/fetch-facebook-events';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Facebook events when the component mounts
  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      try {
        const events = await fetchFacebookEvents();
        
        // Split the events into upcoming and past events based on the date
        const currentDate = new Date();
        const upcoming = events.filter(event => new Date(event.date) > currentDate);
        const past = events.filter(event => new Date(event.date) <= currentDate);

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="section-container" id="events">
      <SectionHeading 
        title="Community Events" 
        subtitle="Stay updated with our latest events and activities"
      />

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-pulse-slow">Loading events...</div>
        </div>
      ) : (
        <>
          <div className="mb-12">
            <h3 className="text-2xl font-medium mb-6 border-l-4 border-primary pl-3">Upcoming Events</h3>
            
            {upcomingEvents.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {upcomingEvents.map((event, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <EventCard
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      description={event.description}
                      imageUrl={event.imageUrl}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="text-muted-foreground italic">No upcoming events scheduled at this time. Check back later!</p>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6 border-l-4 border-secondary pl-3">Past Events</h3>
            
            {pastEvents.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {pastEvents.map((event, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <EventCard
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      description={event.description}
                      imageUrl={event.imageUrl}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="text-muted-foreground italic">No past events available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
