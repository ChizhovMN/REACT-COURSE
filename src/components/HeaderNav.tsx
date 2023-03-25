import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">Main Page</Link>
        <Link to="/about_us">About Us</Link>
        <Link to="/form">Form</Link>
      </nav>
    );
  }
}

export default HeaderNav;
