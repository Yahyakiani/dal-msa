// src/components/ContactUs.js
import React, { useState } from 'react';
import '../styles/ContactUs.css';
import data from '../data/data.json';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we'll just log the data
        console.log(formData);
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contactus-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <div className="contact-item">
                    <FaMapMarkerAlt /> Prayer Room: Room B09, University Center
                </div>
                <div className="contact-item">
                    <FaEnvelope /> President: president@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Administration: administration@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Communications: communications@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Community: community@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Education: education@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP External: external@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Internal: internal@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Finance: finances@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Prayer: prayer@msadalhousie.ca
                </div>
                <div className="contact-item">
                    <FaEnvelope /> VP Social: social@msadalhousie.ca
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
