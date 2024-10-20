// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import { FaMapMarkedAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import data from '../data/data.json';
import Timeline from './Timeline';

const Home = () => {
    const { heroSection, insights, timeline } = data.home;

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <img
                    src={heroSection.heroImage}
                    alt="MSA Dalhousie Banner"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h1>{heroSection.title}</h1>
                    <h2>{heroSection.subtitle}</h2>
                    <div className="bismillah">
                        <p className="arabic">{heroSection.bismillahText}</p>
                        <p className="translation">{heroSection.bismillahTranslation}</p>
                    </div>
                    <div className="welcome-message">
                        <h3>{heroSection.welcomeMessage.heading}</h3>
                        <p>{heroSection.welcomeMessage.description}</p>
                    </div>
                </div>
            </section>

            {/* Insights Cards Section */}
            <section className="cards-section">
                <hr className="thick-separator" />
                <div className="cards-container">
                    {insights.map((insight, index) => (
                        <div className="card" key={index}>
                          <div className="card-icon">
                              {index === 0 ? <FaMapMarkedAlt size={30} color="#80a1d4" /> :
                                  index === 1 ? <FaClock size={30} color="#80a1d4" /> :
                                      <FaUserFriends size={30} color="#80a1d4" />}
                          </div>
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
            </section>

            {/* Programs Timeline Section */}
            <section className="timeline-section">
                <hr className="thick-separator" />
                <Timeline events={timeline} />
            </section>
        </div>
    );
};

export default Home;
