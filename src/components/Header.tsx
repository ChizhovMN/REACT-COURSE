import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, WithRouterProps } from '../hocs/withRouter';

class Header extends React.Component<WithRouterProps> {
  render(): React.ReactNode {
    return (
      <header className="header">
        <nav className="nav">
          <Link to="/">Main Page</Link>
          <Link to="/about_us">About Us</Link>
        </nav>
        <div>Current Page:{this.props.location.pathname}</div>
      </header>
    );
  }
}

export default withRouter(Header);
