// src/components/EventCard.js
import React from 'react';
import '../styles/EventCard.css';
import { FaTag } from 'react-icons/fa';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="tags">
                    {event.tags.map((tag, index) => (
                        <span className="tag" key={index}>
                            <FaTag /> {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
