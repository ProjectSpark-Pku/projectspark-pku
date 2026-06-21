import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Impact from './pages/Impact';
import Transparency from './pages/Transparency';
import Members from './pages/Members';

import Pintar1 from './pages/events/Pintar1';
import Pintar2 from './pages/events/Pintar2';
import StellaBazaar from './pages/events/StellaBazaar';
import CommunityCleanUp from './pages/events/CommunityCleanUp';
import Shine1 from './pages/events/Shine1';
import Grow1 from './pages/events/Grow1';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Global Stylesheets (App.jsx uses ./CSS because it sits in the src folder)
import './CSS/main.css';
import './CSS/home.css';
import './CSS/navbar.css';
import './CSS/footer.css';
import './CSS/about_us.css';
import './CSS/our_work.css';
import './CSS/members.css';
import './CSS/event_template.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/members" element={<Members />} />

        {/* Event Routes */}
        <Route path="/events/pintar-1" element={<Pintar1 />} />
        <Route path="/events/pintar-2" element={<Pintar2 />} />
        <Route path="/events/stella-bazaar" element={<StellaBazaar />} />
        <Route path="/events/community-clean-up" element={<CommunityCleanUp />} />
        <Route path="/events/shine-1" element={<Shine1 />} />
        <Route path="/events/grow-1" element={<Grow1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;