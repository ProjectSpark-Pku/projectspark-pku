import React from 'react';
import { Link } from 'react-router-dom';

function OurWork() {
  return (
    <main>
      <section className="timeline-section">
        <h2 className="timeline-title">Our Journey</h2>

        <div className="timeline">

          <div className="timeline-item left">
            <div className="timeline-content">
              <p className="event-date">21 February 2025</p>
              <h3 className="event-title">Founding of the Organization</h3>
              <img src="/Images/Events/event1.png" alt="Founding" className="event-image" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dui non justo finibus viverra.</p>
            </div>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/pintar-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">28 March 2025</p>
                <h3 className="event-title">PINTAR 1</h3>
                <img src="/Images/Events/event2.png" alt="PINTAR 1" className="event-image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/stella-bazaar" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">12 April 2025</p>
                <h3 className="event-title">STELLA BAZAAR</h3>
                <img src="/Images/Events/event3.png" alt="Stella Bazaar" className="event-image" />
                <p>Donec sed eros in lectus egestas facilisis. Integer convallis.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/community-clean-up" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">18 May 2025</p>
                <h3 className="event-title">COMMUNITY CLEAN-UP</h3>
                <img src="/Images/Events/event4.png" alt="Clean-up" className="event-image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/pintar-2" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">22 June 2025</p>
                <h3 className="event-title">PINTAR 2</h3>
                <img src="/Images/Events/event5.png" alt="PINTAR 2" className="event-image" />
                <p>Fusce quis libero sit amet justo sodales posuere.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item right">
            <Link to="/events/shine-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">24 August 2025</p>
                <h3 className="event-title">SHINE 1</h3>
                <img src="/Images/Events/event6.png" alt="SHINE 1" className="event-image" />
                <p>Aliquam erat volutpat.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

          <div className="timeline-item left">
            <Link to="/events/grow-1" className="timeline-link">
              <div className="timeline-content">
                <p className="event-date">4 October 2025</p>
                <h3 className="event-title">GROW 1</h3>
                <img src="/Images/Events/event7.png" alt="GROW 1" className="event-image" />
                <p>Nullam vel neque at quam tincidunt vulputate.</p>
              </div>
            </Link>
            <div className="timeline-dot"></div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default OurWork;
