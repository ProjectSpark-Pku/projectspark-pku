import React from 'react';
import { Link } from 'react-router-dom';

function Pintar2() {
  return (
    <main>
      <div className="GradientBackground">
        <div>
          <div className="HeadingStatementText">
            <Link to="/our-work" className="HeadingStatementText-Label">Events</Link>

            <div className="HeadingStatementText-Contents">
              <div className="HeadingStatementText-Heading">
                <div>A New Place. The Same Spark.</div>
                <img src="/Images/Events/event5.png" alt="Pintar 2" className="hero-event-img" />
              </div>
              <div className="Content-right">
                <div className="HeadingStatementText-Statement">
                  We took everything we learned from Pintar 1 and brought it somewhere new — with a fresh set of subjects and a brand new group of children to inspire.
                </div>
                <div className="HeadingStatementText-Text">
                  Pintar 2 expanded Project SPARK's reach to a new orphanage in Pekanbaru. With a redesigned program built around chemistry, art, physics, and math, we pushed further into what hands-on learning could look like — and the children pushed right back with curiosity and energy we didn't expect.
                </div>
                <div className="event-details-strip">
                  <div className="event-detail">
                    <span className="event-detail-label">Date</span>
                    <span className="event-detail-value">22 June 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Location</span>
                    <span className="event-detail-value">Pekanbaru, Indonesia</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-detail-label">Children Reached</span>
                    <span className="event-detail-value">20+</span>
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
                <img src="/Images/Icons/Events/Pintar 2/Chemistry.png" alt="Chemistry" />
              </div>
              <div className="item-heading">Chemistry</div>
              <div className="item-text">
                Children explored the science of color through a mesmerizing oil color-changing experiment — watching chemistry come alive right in front of them.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 2/Art.png" alt="Art" />
              </div>
              <div className="item-heading">Art</div>
              <div className="item-text">
                Through origami, children discovered the intersection of creativity and precision — folding paper into shapes that taught patience, focus, and artistic expression.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 2/Physics.png" alt="Physics" />
              </div>
              <div className="item-heading">Physics</div>
              <div className="item-text">
                Teams competed to build the strongest bridge using only sticks, learning about structural forces, balance, and engineering through playful hands-on challenge.
              </div>
            </div>

            <div className="MainTopics-item">
              <div className="item-icon">
                <img src="/Images/Icons/Events/Pintar 2/Math.png" alt="Math" />
              </div>
              <div className="item-heading">Math</div>
              <div className="item-text">
                Bubble geometry turned abstract mathematics into something tangible and beautiful — children explored shapes, angles, and spatial reasoning through soap bubbles.
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="detail-container">
        <div className="detail-block">
          <h2>Building on What We Started</h2>
          <p>Pintar 2 wasn't just a repeat — it was an evolution. Taking our experience from the first program, we redesigned the curriculum around subjects that were even more visual and tactile, making abstract concepts impossible to ignore.</p>
          <p>Reaching a new orphanage meant introducing ourselves all over again, building trust with a new group of children, and adapting on the fly. It reminded us that every center is different, and that flexibility is just as important as preparation.</p>
        </div>

        <div className="detail-block complement">
          <div className="GradientBackground">
            <h3>Learning That Sticks</h3>
            <p>When a child watches oil change color in their hands, or holds up a bridge they built themselves, something clicks that no textbook can replicate. Pintar 2 was designed around that moment — the moment curiosity turns into understanding. By expanding to a new center, we didn't just reach more children. We learned more about what it takes to truly connect with them, and that made every program after this one stronger.</p>
          </div>
        </div>
      </div>
      <div className="detail-bottom-bar"></div>
    </main>
  );
}

export default Pintar2;
