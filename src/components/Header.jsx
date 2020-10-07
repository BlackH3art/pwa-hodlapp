import React from 'react';

const Header = (props) => {

  const { btcPrice } = props;

  return ( 
    <>
      <header>
        <h1 className="title"> BTC price is now:</h1>
        <h2 className="price"> {btcPrice} $ </h2>
      </header>
    </>
  );
}
 
export default Header;

