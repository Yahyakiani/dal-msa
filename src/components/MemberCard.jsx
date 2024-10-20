// src/components/MemberCard.js
import React from 'react';
import '../styles/MemberCard.css';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-details">
                <h3>{member.name}</h3>
                <p>Year: {member.year}</p>
                <p>Program: {member.program}</p>
                <p>Responsibility: {member.responsibility}</p>
                <p>
                    <FaEnvelope /> {member.email}
                </p>
            </div>
        </div>
    );
};

export default MemberCard;
