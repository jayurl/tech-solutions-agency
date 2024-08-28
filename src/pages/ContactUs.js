import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q0hvhja', 'template_7bgk60d', form.current, 'tsusELyEVW-hdsMis')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="service-page">
            <h1>Contact Us</h1>
            <p>Get in contact with our developers to make your dream application.</p>
            <div className="content">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Services Needed</label>
                    <select name="services" required>
                        <option value="iOS App Development">iOS App Development</option>
                        <option value="Chrome Extension Development">Chrome Extension Development</option>
                        <option value="Automated Bot Development">Automated Bot Development</option>
                        <option value="Web App Development">Web App Development</option>
                    </select>
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
