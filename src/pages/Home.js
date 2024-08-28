import React from 'react';
import './Home.css';

const Home = () => (
    <div className="home">
        <h1>Welcome to J.P. Innovations</h1>
        <p>We can build anything from iOS Apps, Chrome Extentions, Automating Bots, and Web Apps</p>
        <div className="services">
            <div className="service">
                <h2>iOS Apps</h2>
                <p>We develop high-quality iOS applications tailored to your needs.</p>
            </div>
            <div className="service">
                <h2>Chrome Extensions</h2>
                <p>Enhance your browser experience with our custom Chrome extensions.</p>
            </div>
            <div className="service">
                <h2>Automated Bots</h2>
                <p>Automate tasks and secure limited edition drops with our advanced bots.</p>
            </div>
            <div className="service">
                <h2>Web Apps</h2>
                <p>We build responsive and interactive web applications.</p>
            </div>
        </div>
    </div>
);

export default Home;
