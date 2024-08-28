import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IOSApps from './pages/IOSApps';
import ChromeExtensions from './pages/ChromeExtensions';
import AutomatingBots from './pages/AutomatingBots';
import WebApps from './pages/WebApps';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ios-apps" element={<IOSApps />} />
        <Route path="/chrome-extensions" element={<ChromeExtensions />} />
        <Route path="/automating-bots" element={<AutomatingBots />} />
        <Route path="/web-apps" element={<WebApps />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
