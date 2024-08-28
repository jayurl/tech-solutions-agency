import React from 'react';
import './About.css';

const About = () => (
    <div className="about-page">
        <h1>About Me</h1>
        <p>Welcome to my personal portfolio! I'm a passionate software developer with a interest in creating innovative solutions. Here are a few things about me:</p>
        <h2>Background</h2>
        <p>I am a student at the University of Maryland-College Park pursuing a B.S. in Computer Science in addition to a Business Minor.</p>

        <div className="about-content">

            <div className="about-section">
                <h2>Coding Languages</h2>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C</li>
                    <li>MySQL</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Swift</li>
                    <li>Kotlin</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Frameworks & Libraries</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                    <li>Tailwind</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Developer Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>Tableau</li>
                    <li>Eclipse</li>
                    <li>Visual Studio</li>
                    <li>Canva</li>
                    <li>Figma</li>
                    <li>Adobe</li>
                    <li>Microsoft 365</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Relevant Courses</h2>
                <ul>
                    <li>Object-Oriented Programming I/II</li>
                    <li>Operating Systems</li>
                    <li>Programming Languages</li>
                    <li>Algorithms</li>
                    <li>Discrete Structures</li>
                    <li>Statistics</li>
                    <li>Linear Algebra</li>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Network Security</li>
                    <li>Data Science</li>
                    <li>Database Management</li>
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                </ul>
            </div>
        </div>
    </div>
);

export default About;
