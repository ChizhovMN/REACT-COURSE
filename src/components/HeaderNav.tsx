import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className="nav">
      <Link to="/">Main Page</Link>
      <Link to="/about_us">About Us</Link>
      <Link to="/form">Form</Link>
    </nav>
  );
};
export default HeaderNav;
