import React from 'react';

import logo from './images/logo-rectangle.png'
import './style/header.css';

const Header = (props) => {

  const { btcPrice } = props;

  return ( 
    <>
      <header>
        <div className="nav-container">
          <nav className="navbar navbar-dark">
            <img src={logo} alt=""/>
          </nav>
        </div>
        <h1 className="title"> BTC price is now:</h1>
        <h2 className="price"> {btcPrice} $ </h2>
      </header>
    </>
  );
}
 
export default Header;

