import React from 'react';

function Home() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-image">
          {/* Points directly to your public folder layout seamlessly! */}
          <img src="/Images/PNG/Hero photo.png" alt="Project Spark Hero" />
        </div>
        <div className="hero-text">
          <h2>
            <span className="mission-highlight">Project Spark</span> has been working to inspire creativity and collaboration through technology.
          </h2>
          <p>
            We aim to empower students and communities to use innovation for solving real-world problems.
          </p>
          <a href="/about" className="btn-about">About Us →</a>
        </div>
      </section>

      {/* ========== MISSION SECTION ========== */}
      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-label">Our Mission</div>
          <h2 className="mission-heading">
            We believe every child deserves the chance to <span className="mission-highlight">learn, grow, and thrive.</span>
          </h2>
          <p className="mission-body">
            Project SPARK is a youth-led organization based in Pekanbaru, Indonesia. Through education, sustainability, and community empowerment, we work directly with underprivileged children in adoption centers, bringing hands-on learning, creative programs, and meaningful human connection to those who need it most.
          </p>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="stats-strip">
        <div className="stat-item">
          <span className="stat-number">100+</span>
          <span className="stat-label">Children Helped</span>
        </div>
        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-number">5+</span>
          <span className="stat-label">Orphanages Supported</span>
        </div>
        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-number">7</span>
          <span className="stat-label">Events Held</span>
        </div>
        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-number">34</span>
          <span className="stat-label">Members</span>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-heading">Ready to make a difference?</h2>
          <p className="cta-body">
            Every contribution, big or small, helps us bring more programs, more learning, and more hope to children across Pekanbaru.
          </p>
          <div className="cta-buttons">
            <a href="/donate" className="cta-btn">Donate →</a>
            <a href="/work" className="cta-btn">See Our Work →</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;