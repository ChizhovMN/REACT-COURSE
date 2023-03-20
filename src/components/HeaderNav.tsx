import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/about_us">About Us</NavLink>
        <NavLink to="/form">Form</NavLink>
      </nav>
    );
  }
}

export default HeaderNav;
