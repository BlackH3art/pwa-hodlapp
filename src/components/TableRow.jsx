import React from 'react';




const TableRow = (props) => {

  const {index, symbol, amount, balance} = props;

  return ( 
    <div className="tablerow">
      <div className="col-num">
        <h2> {index}. </h2>
      </div>
      <div className="col-asset">
        <h1>{symbol}</h1>
        <span className="amount"> ({`${amount} ${symbol}`})</span>
      </div>
      <div className="col-value">
        <h2>{balance}$</h2>
      </div>
  </div>
  );
}

export default TableRow;