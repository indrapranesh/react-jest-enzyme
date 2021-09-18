import React from 'react';
import logo from '../../assets/spacex-logo.png';
import './header.css'

function Header() {
  return (
    <div className="background">
        <img className="logo" alt="logo" src={logo} />
    </div>
  );
}

export default Header;
 