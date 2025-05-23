import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ className }) {
  return (
    <nav className={className}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reserve</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
