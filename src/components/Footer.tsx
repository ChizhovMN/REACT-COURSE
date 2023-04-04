import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link to="https://github.com/ChizhovMN?tab=repositories" target="_blank">
      github
    </Link>
    {'  '}
    2023 year{'  '}
    <Link to="https://rs.school/" target="_blank">
      rss school
    </Link>
  </footer>
);

export default Footer;
