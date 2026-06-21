import React from 'react';
import { Link } from 'react-router-dom';

function StellaBazaar() {
  return (
    <main>
      <div className="GradientBackground">
        <div>
          <div className="HeadingStatementText">
            <Link to="/our-work" className="HeadingStatementText-Label">Events</Link>

            <div className="HeadingStatementText-Contents">
              <div className="HeadingStatementText-Heading">
                <div>Where Every Bite Made a Difference</div>
                <img src="/Images/Events/event3.png" alt="Stella Bazaar" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  Our first fundraiser. A school bazaar. The moment Project SPARK proved it could turn an idea into real impact.
                </div>
                <div className="HeadingStatementText-Text">
                  Stella Bazaar was held at Stella Gracia school — a one-day food bazaar where Project SPARK members sold homemade cookies, takoyaki, and matcha drinks to raise funds for the children we were preparing to help. It was nerve-wracking, exciting, and exactly the kind of first step that makes everything else possible.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">12 April 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Stella Gracia School</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Customers</span>
                    <span className="event-detail-value">100+</span>
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
                <img src="/Images/Icons/Events/Stella Bazaar/food.png" alt="Food Stall" />
              </div>
              <div className="item-heading">The Food Stall</div>
              <div className="item-text">
                Cookies, takoyaki, and matcha — made and sold by SPARK members. Simple food, but every sale carried a purpose behind it.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Stella Bazaar/community.png" alt="Community" />
              </div>
              <div className="item-heading">Community First</div>
              <div className="item-text">
                Stella Bazaar brought together students, teachers, and supporters under one shared goal — proving that a community willing to show up can move things forward.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Stella Bazaar/mission.png" alt="Mission" />
              </div>
              <div className="item-heading">Driven by Purpose</div>
              <div className="item-text">
                Every item sold wasn't just a transaction — it was a contribution to something bigger. The funds raised went directly toward the children we set out to help.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Stella Bazaar/start.png" alt="First Step" />
              </div>
              <div className="item-heading">The First Spark</div>
              <div className="item-text">
                As our very first public event, Stella Bazaar gave the team something no plan could — the confidence that we could actually pull it off.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Our First Step</h2>
          <p>Before we could give, we had to build. Stella Bazaar was Project SPARK's answer to that challenge — a grassroots fundraiser run entirely by student volunteers at Stella Gracia school.</p>
          <p>Setting up the stall, managing the crowd, handling sales — none of us had done it before. But by the end of the day, we had raised a meaningful sum and, more importantly, proven to ourselves that we could make things happen.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Why It Mattered</h3>
            <p>Stella Bazaar wasn't just a fundraiser — it was the moment Project SPARK became real. The funds we raised went directly toward supporting the children we would later visit through our Pintar and Shine programs. Every cookie sold, every cup of matcha poured, was a small act that added up to something much larger. It gave our team the confidence to dream bigger and the resources to start delivering on that dream.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default StellaBazaar;
