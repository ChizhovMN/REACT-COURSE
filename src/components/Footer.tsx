import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <footer className="footer">
        <div>
          <Link to="https://github.com/ChizhovMN?tab=repositories" target="_blank">
            github
          </Link>
          {'  '}
          2023 year{'  '}
          <Link to="https://rs.school/" target="_blank">
            rss school
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
