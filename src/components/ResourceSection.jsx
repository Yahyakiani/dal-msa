// src/components/ResourceSection.js
import React from 'react';
import '../styles/ResourceSection.css';
import { FaTable } from 'react-icons/fa';

const ResourceSection = ({ section }) => {
    return (
        <div className="resource-section">
            <h2>{section.title}</h2>
            {section.type === 'table' ? (
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
            ) : (
                <>
                    <p>{section.content}</p>
                    {section.image && <img src={section.image} alt={section.title} className="section-image" />}
                </>
            )}
            <hr className="separator" />
        </div>
    );
};

export default ResourceSection;
