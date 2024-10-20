// src/components/Resources.js
import React from 'react';
import '../styles/Resources.css';
import ResourceSection from './ResourceSection';
import data from '../data/data.json';
import { FaMapMarkerAlt, FaClock, FaUserFriends } from 'react-icons/fa';

const Resources = () => {
    return (
        <div className="resources-container">
            {data.resources.sections.map((section, index) => (
                <ResourceSection key={index} section={section} />
            ))}
        </div>
    );
};

export default Resources;
