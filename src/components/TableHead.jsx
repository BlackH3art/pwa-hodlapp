import React from 'react';

const TableHead = () => {
  return ( 
    <>
      <div className="tablehead">
        <div className="col-num"></div>
        <div className="col-asset">
          <h2>Asset</h2>
        </div>
        <div className="col-value">
          <h2>Value</h2>
        </div>
      </div>
    </>
   );
}
 
export default TableHead;