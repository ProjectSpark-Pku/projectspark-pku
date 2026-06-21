import React from 'react';
import { Link } from 'react-router-dom';

function Pintar1() {
  return (
    <main>
      <div className="GradientBackground">
        <div>
          <div className="HeadingStatementText">
            <Link to="/our-work" className="HeadingStatementText-Label">
              Events
            </Link>

            <div className="HeadingStatementText-Contents">
              <div className="HeadingStatementText-Heading">
                <div>Learning That Lights The Way</div>
                <img src="/Images/Events/event2.png" alt="Pintar 1" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  We do more than helping children. We create meaningful learning experiences.
                </div>
                <div className="HeadingStatementText-Text">
                  Pintar 1 is Project SPARK's first educational outreach program that brings hands-on, project-based learning directly to orphanages.
                  By learning through projects, children don't just understand concepts, they experience them.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">28 March 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Children Reached</span>
                    <span className="event-detail-value">25+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="MainTopics">
          <div className="MainTopics-inner">

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 1/Chemistry.png" alt="Chemistry" />
              </div>
              <div className="item-heading">
                Chemistry
              </div>
              <div className="item-text">
                We introduce chemistry through exciting hands-on experiments that transform abstract ideas into memorable experiences.
              </div>
              <div className="item-complement">
                Through activites such as simple reaction demonstrations, including projects like the elephant toothpaste, children learn to observe, question, and understand how chemistry works in everyday life.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 1/Physics.png" alt="Physics" />
              </div>
              <div className="item-heading">
                Physics
              </div>
              <div className="item-text">
                Physics sessions invite children to explore fundamental concepts through creative problem-solving and experimentation.
              </div>
              <div className="item-complement">
                By taking part in hands-on challenges such as the egg drop experiment, participants learn about force, motion, and gravity in a fun and intuitive way.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 1/Informatics.png" alt="Informatics" />
              </div>
              <div className="item-heading">
                Informatics
              </div>
              <div className="item-text">
                Our informatics sessions introduce children to technology from the very beginning, creating a safe and supportive first experience with digital tools.
              </div>
              <div className="item-complement">
                Starting from basic computer use, childrens gradually learn essential skills such as document creation, simple data handling, and safe internet browsing, building confidence and independence in using technology.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 1/English.png" alt="English" />
              </div>
              <div className="item-heading">
                English
              </div>
              <div className="item-text">
                English learning is designed to be interactive and engaging, with an emphasis on communication over memorization.
              </div>
              <div className="item-complement">
                Through games, group activities, and conversational practice, children build vocabulary, confidence, and a positive attitude toward using English.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>How Pintar 1 Works</h2>
          <p>Pintar 1 is conducted through on-site visits to orphanages, where student volunteers facilitate small-group learning sessions.</p>
          <p>Instead of traditional classroom teaching, sessions are designed around simple projects and activities that encourage children to explore ideas through doing, not memorizing.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Learning Through Experience</h3>
            <p>Learning at Pintar 1 goes beyond listening and memorizing. Through hands-on activities and collaborative projects, children are encouraged to explore ideas, ask questions, and learn by doing. This approach helps build confidence, curiosity, and a genuine excitement for learning, especially for children who may not always have access to supportive educational environments.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Pintar1;
