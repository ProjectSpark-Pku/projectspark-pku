import React from 'react';

function AboutUs() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="AU-hero">
        <div className="AU-hero-content">
          <h1>
            <span style={{ color: '#ffd95e' }}>Igniting</span> Minds,<br />
            Lighting <span style={{ color: '#ffd95e' }}>Futures</span>
          </h1>
          <p className="AU-hero-sub">A youth-led movement turning potential into possibility — one child at a time.</p>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="AU-section AU-mission">
        <div className="AU-section-inner">
          <p className="AU-label">Our Mission</p>
          <h2 className="AU-headline">Pekanbaru's children don't lack potential. They lack opportunity.</h2>
          <p className="AU-body">
            In a city full of bright, curious, ambitious young people, thousands are growing up in adoption centers with limited access to quality education, mentorship, or a reason to dream big. The gap between where they are and where they could be isn't about ability — it's about access. Project SPARK exists to close that gap. Not with a one-time donation. Not with a single event. But with a long-term, sustainable commitment to education, empowerment, and transformation.
          </p>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="AU-section AU-origin">
        <div className="AU-origin-inner">
          <div className="AU-origin-text">
            <p className="AU-label">How It Started</p>
            <h2 className="AU-headline-sm">We walked in expecting to help. We left knowing we had to.</h2>
            <p className="AU-body">
              Project SPARK began with a visit. A small group of friends from Pekanbaru stepped into a local adoption center — not with a plan, but with curiosity. What they found stayed with them. The conditions were difficult. Resources were scarce. But the children? The children were something else entirely. Bright eyes. Quick laughs. An eagerness to learn that no circumstance had managed to dim.
            </p>
            <p className="AU-body">
              It was that contradiction — so much potential in such limited surroundings — that made walking away impossible. Within weeks, the group had a name, a mission, and their first program on the calendar. Project SPARK was born not out of obligation, but out of the belief that these children deserved better, and that a group of young people could actually do something about it.
            </p>
          </div>
          <div className="AU-origin-accent">
            <blockquote className="AU-pullquote">
              "The conditions were difficult.<br />But the children?<br />The children were something else."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="AU-stats-section">
        <div className="AU-stats-inner">
          <div className="AU-stat">
            <span className="AU-stat-number">100+</span>
            <span className="AU-stat-label">Children Reached</span>
            <span className="AU-stat-desc">Across adoption centers in Pekanbaru through hands-on education and donations.</span>
          </div>
          <div className="AU-stat-divider"></div>
          <div className="AU-stat">
            <span className="AU-stat-number">5+</span>
            <span className="AU-stat-label">Orphanages Supported</span>
            <span className="AU-stat-desc">Active partnerships with orphanages across the city.</span>
          </div>
          <div className="AU-stat-divider"></div>
          <div className="AU-stat">
            <span className="AU-stat-number">7</span>
            <span className="AU-stat-label">Programs Run</span>
            <span className="AU-stat-desc">From science experiments to English classes, each designed to inspire.</span>
          </div>
          <div className="AU-stat-divider"></div>
          <div className="AU-stat">
            <span className="AU-stat-number">34</span>
            <span className="AU-stat-label">Members Strong</span>
            <span className="AU-stat-desc">A growing team of students who believe in the power of showing up.</span>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ── */}
      <section className="AU-section AU-approach">
        <div className="AU-section-inner">
          <p className="AU-label">The Long Game</p>
          <h2 className="AU-headline">We're not here for a photo. We're here for the long run.</h2>
          <p className="AU-body">
            A lot of charitable work is built around moments — a day of giving, a one-time event, a donation that gets forgotten by the following month. We respect that. But it's not what drives us. Project SPARK was designed from the start around sustainability. We return to the same centers, build relationships with the same children, and design programs that compound over time. Chemistry experiments that spark a love of science. English lessons that open up a world of opportunity. Computer skills that make a child employable years before they'd otherwise have had the chance.
          </p>
          <p className="AU-body">
            Our vision of success isn't a great event recap. It's a child from a Pekanbaru adoption center walking into a university ten years from now — and knowing that a spark helped get them there.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="AU-values-section">
        <div className="AU-values-inner">
          <p className="AU-label" style={{ textAlign: 'center', marginBottom: '50px' }}>What We Stand For</p>
          <div className="AU-values-grid">
            <div className="AU-value-card">
              <div className="AU-value-icon">
                <img src="/Images/PNG/school.png" alt="Educate" />
              </div>
              <h3 className="AU-value-title">Educate</h3>
              <p className="AU-value-desc">We share knowledge that inspires curiosity, growth, and awareness — helping children unlock their potential to build a brighter future.</p>
            </div>
            <div className="AU-value-card">
              <div className="AU-value-icon">
                <img src="/Images/PNG/empowerment.png" alt="Empower" />
              </div>
              <h3 className="AU-value-title">Empower</h3>
              <p className="AU-value-desc">We encourage individuals and communities to take action with confidence, turning compassion and creativity into real, sustainable change.</p>
            </div>
            <div className="AU-value-card">
              <div className="AU-value-icon">
                <img src="/Images/PNG/transform.png" alt="Transform" />
              </div>
              <h3 className="AU-value-title">Transform</h3>
              <p className="AU-value-desc">We believe every spark of effort can reshape lives and communities — creating lasting impact through collaboration, kindness, and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="AU-cta-section">
        <div className="AU-cta-inner">
          <h2 className="AU-cta-heading">Be part of the story.</h2>
          <p className="AU-cta-body">
            Whether you volunteer, donate, or simply share what we do — you become part of something that outlasts any single event. The children we work with will remember the people who showed up. Be one of them.
          </p>
          <div className="AU-cta-buttons">
            <a href="/our-work" className="AU-btn AU-btn--primary">See Our Work →</a>
            <a href="/members" className="AU-btn AU-btn--secondary">Meet the Team →</a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutUs;
