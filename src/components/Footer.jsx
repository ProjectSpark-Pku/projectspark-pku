import React from 'react';

function Footer() {
  return (
    <nav className="footer">
      <div className="footdiv">
        <a href="https://www.instagram.com/projectspark.pku/">
          <img src="/Images/PNG/Instagram Logo.png" alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com/@projectspark.pku">
          <img src="/Images/PNG/Tiktok Logo.png" alt="TikTok" />
        </a>
      </div>
      <div>
        <p style={{ color: 'white' }}>
          <strong>Contact Us: <a style={{ color: 'white' }} href="https://mail.google.com/mail/?view=cm&fs=1&to=projectspark.pku@gmail.com">projectspark.pku@gmail.com</a></strong>
        </p>
      </div>
    </nav>
  );
}

export default Footer;
