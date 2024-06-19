// src/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';
import robot from './assets/robot.gif'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                <img src={robot} alt="Robot" />
                {!isOpen && <div className="chatbot-message">How can I help you?</div>}
            </div>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h4>Chatbot</h4>
                        <button onClick={toggleChat}>X</button>
                    </div>
                    <div className="chatbot-body">
                        {/* Chat messages will go here */}
                    </div>
                    <div className="chatbot-footer">
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
