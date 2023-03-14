import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className="header">
        <nav className="nav">
          <Link to="/">Main Page</Link>
          <Link to="/about_us">About Us</Link>
        </nav>
        <div>Current Page</div>
      </header>
    );
  }
}

export default Header;
