// src/components/ResourceSection.js
import React from 'react';
import '../styles/ResourceSection.css';
import { FaMapMarkerAlt, FaClock, FaMosque } from 'react-icons/fa';

const ResourceSection = ({ section }) => {
    return (
        <div className="resource-section">
            <h2>{section.title}</h2>
            {section.date && <p className="section-date">{section.date}</p>}
            {section.description && <p className="section-description">{section.description}</p>}

            {section.type === 'table' && (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                {section.headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {section.data.map((row, index) => (
                                <tr key={index}>
                                    {row.map((cell, idx) => (
                                        <td key={idx}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {section.jumuah && (
                <div className="jumuah-section">
                    <h3>Jum'uah on Campus</h3>
                    {section.jumuah.map((entry, index) => (
                        <div key={index} className="jumuah-entry">
                            <h4>{entry.location}</h4>
                            <p><FaClock /> {entry.time}</p>
                            <p><FaMapMarkerAlt /> {entry.room}</p>
                            {entry.note && <p className="note">{entry.note}</p>}
                        </div>
                    ))}
                </div>
            )}

            {section.availablePrayerSpaces && (
                <div className="available-prayer-spaces">
                    <h3>Available Prayer Spaces for Daily Use</h3>
                    <ul>
                        {section.availablePrayerSpaces.map((space, index) => (
                            <li key={index}><FaMosque /> {space}</li>
                        ))}
                    </ul>
                </div>
            )}

            {section.button && (
                <div className="feedback-button-container">
                    <a href={section.button.link} className="feedback-button">
                        {section.button.text}
                    </a>
                </div>
            )}

            <hr className="separator" />
        </div>
    );
};

export default ResourceSection;
