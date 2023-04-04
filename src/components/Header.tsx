import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderNav from './HeaderNav';

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <HeaderNav />
      <div>Current Page:{location.pathname}</div>
    </header>
  );
};

export default Header;
