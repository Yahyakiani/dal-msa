// src/components/Events.js
import React from 'react';
import '../styles/Events.css';
import EventCard from './EventCard';
import data from '../data/data.json';

const Events = () => {
    return (
        <div className="events-container">
            <h1>Upcoming Events</h1>
            <div className="events-cards-container">
                {data.events.upcoming.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
            <hr className="separator" />
            <h2>Past Events</h2>
            <div className="events-cards-container">
                {data.events.past.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
