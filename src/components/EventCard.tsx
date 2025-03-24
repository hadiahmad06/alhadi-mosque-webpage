// EventCard.tsx
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string; // Added image URL prop
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  description,
  imageUrl,
}) => {
  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-card-image" />
      <div className="event-card-content">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;