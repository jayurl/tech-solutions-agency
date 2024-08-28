import React from 'react';
import './ServicePage.css';

const ChromeExtensions = () => (
    <div className="service-page">
        <h1>Chrome Extensions</h1>
        <p>Information about Chrome extensions developed by our agency.</p>
        <div className="content">
            <div className="feature">
                <h2>Email Authication Extentions</h2>
                <p>A Chrome extension that automatically retrieves and handles email verification codes and links.</p>
            </div>
            <div className="feature">
                <h2>Ad Blocker</h2>
                <p>A Chrome extension that blocks unwanted ads and pop-ups on websites, providing a cleaner browsing experience.</p>
            </div>
            <div className="feature">
                <h2>Productivity Tracker</h2>
                <p>A Chrome extension that tracks time spent on different websites and provides analytics and reports to help users improve productivity.</p>
            </div>
        </div>
    </div>
);

export default ChromeExtensions;
