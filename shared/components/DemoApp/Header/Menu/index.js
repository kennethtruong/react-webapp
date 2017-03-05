import React from 'react';
import Link from 'react-router-dom/Link';

function Menu() {
  return (
    <ul style={{ marginTop: '1rem' }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  );
}

export default Menu;
