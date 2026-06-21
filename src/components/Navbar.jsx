import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const highlight = highlightRef.current;
    
    if (!nav || !highlight) return;

    const links = nav.querySelectorAll('a');

    const handleMouseEnter = (e) => {
      const link = e.currentTarget;
      const rect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      highlight.style.width = `${rect.width + 12}px`;
      highlight.style.left = `${rect.left - navRect.left - 6}px`;
    };

    const handleMouseLeave = () => {
      highlight.style.width = '0';
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    nav.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
      nav.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/Images/SVG/project_spark_logo.svg" alt="Project Spark Logo" />
          </Link>
        </div>

        <div className="nav-right">
          <nav className="nav-links" ref={navRef}>
            <div className="highlight" ref={highlightRef}></div>
            <Link to="/about">About Us</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/transparency">Transparency</Link>
            <Link to="/members">Members</Link>
            <button className="btn-donate">Donate</button>
          </nav>
          
          <button className="hamburger">&#9776;</button>
        </div>
      </header>

      <div className="dropdown-menu">
        <Link to="/about">About</Link>
        <Link to="/our-work">Our Work</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/transparency">Transparency</Link>
        <Link to="/members">Members</Link>

        <div className="menu-actions">
          <button className="btn-donate">Donate</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
