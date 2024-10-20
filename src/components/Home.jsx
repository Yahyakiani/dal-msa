// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import { FaMapMarkedAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import data from '../data/data.json';

const Home = () => {
    const insights = [
        {
            icon: <FaMapMarkedAlt size={30} color="#80a1d4" />,
            title: 'Prayer Map & Times',
            description: 'Discover prayer spaces and prayer times across campus.',
            image: data.home.insights[0].image,
        },
        {
            icon: <FaClock size={30} color="#80a1d4" />,
            title: 'Chaplaincy Program',
            description: 'Offering spiritual and mental support through our chaplaincy program.',
            image: data.home.insights[1].image,
        },
        {
            icon: <FaUserFriends size={30} color="#80a1d4" />,
            title: 'Community Engagement',
            description: 'Join our social events and community activities to connect.',
            image: data.home.insights[2].image,
        },
    ];

    return (
        <div className="home-container">
            <h1>Welcome to MSA Dalhousie</h1>
            <div className="cards-container">
                {insights.map((insight, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">{insight.icon}</div>
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                        <img src={insight.image} alt="Insight" className="card-image" />
                        <div className="card-buttons">
                            <button className="btn">Learn More</button>
                            <button className="btn">Join Us</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
