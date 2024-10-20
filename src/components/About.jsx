// src/components/About.js
import React from 'react';
import '../styles/About.css';
import MemberCard from './MemberCard';
import data from '../data/data.json';
import { FaUsers, FaTasks } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-container">
            <h1>Who We Are</h1>
            <p>
                The Muslim Students Association (MSA) brings together Muslim students to provide resources, essential services, and educational tools needed to enhance their university experience.
            </p>
            <div className="services">
                <h2>Our Services</h2>
                <ul>
                    {data.about.services.map((service, index) => (
                        <li key={index}><FaTasks /> {service}</li>
                    ))}
                </ul>
            </div>
            <div className="events">
                <h2>Past & Recurring Events</h2>
                <ul>
                    {data.about.events.map((event, index) => (
                        <li key={index}><FaUsers /> {event}</li>
                    ))}
                </ul>
            </div>
            <div className="shura-council">
                <h2>Our Shura Council</h2>
                <p>
                    Our team works as a "Shura Council" - Shura (شُورَى) is an Arabic word that means consultation and as an Islamic principle, calls upon Muslims to gather under mutual consultation and articulate with each other upon sound reason to form productive opinions and strategies.
                </p>
                <p>
                    Allah ﷻ revealed in Ayah 38 of Surah Ash-Shura: "[Those] who respond to their Lord, establish prayer, conduct their affairs by mutual consultation, and donate from what We have provided for them;"
                </p>
            </div>
            <div className="members">
                <h2>Current Members</h2>
                <div className="members-cards-container">
                    {data.about.members.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
            <div className="get-involved">
                <h2>Get Involved & Become a Volunteer!</h2>
                <button className="btn">Sign Up</button>
                <h2>Sign Up for our Weekly Newsletter!</h2>
                <button className="btn">Subscribe</button>
            </div>
        </div>
    );
};

export default About;
