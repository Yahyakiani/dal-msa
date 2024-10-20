// src/components/Timeline.js
import React from 'react';
import '../styles/Timeline.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline-section">
            <h2 className="timeline-title">Our Programs</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p className="term">{event.term}</p>
                            <p>{event.description}</p>
                            <a href={event.link} className="read-more-link">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
