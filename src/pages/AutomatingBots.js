import React from 'react';
import './ServicePage.css';

const AutomatingBots = () => (
    <div className="service-page">
        <h1>Automating Bots</h1>
        <p>Information about automated bots developed by our agency.</p>
        <div className="content">
            <div className="feature">
                <h2>Hype Item Drop Bot</h2>
                <p>An automated bot that can help to get in queue at the fastest time securing your spot in the queue which can increase your odds of landing the item.</p>
            </div>
            <div className="feature">
                <h2>Stock Trading Bot</h2>
                <p>An automated bot that analyzes market trends and executes trades based on predefined strategies to maximize profit.</p>
            </div>
            <div className="feature">
                <h2>Customer Support Chatbot</h2>
                <p>A chatbot that can handle common customer inquiries, provide information, and escalate issues to human agents when necessary.</p>
            </div>
        </div>
    </div>
);

export default AutomatingBots;
