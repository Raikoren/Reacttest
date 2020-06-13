import React from 'react';
import logo from './logo.svg';

import './TopNav.css';

function TopNav() {
  return (
    <nav className="navbar bg-dark justify-content-between">
          <img src={logo} className="logo" alt="logo" />
      <input className="btn btn-primary" type="button" value="Mon compte" />
    </nav>

  );
}

export default TopNav;