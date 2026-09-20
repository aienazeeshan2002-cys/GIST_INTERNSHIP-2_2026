import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🛡️ CyberHub React</Link>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/threats" className={({ isActive }) => isActive ? 'active' : ''}>Threats</NavLink></li>
        <li><NavLink to="/api-feed" className={({ isActive }) => isActive ? 'active' : ''}>Live API Feed</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}