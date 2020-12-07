import React from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'; 




const TableRow = (props) => {

  const {index, deleteItem, toggleAndGetEditItem, symbol, amount, balance} = props;

  return ( 
    <motion.div className="tablerow" layout
      key={index}
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{}}
    >
      <div className="col-num">
        <h2> {index}. </h2>
      </div>
      <div className="col-asset">
        <h1>{symbol}</h1>
        <span className="amount"> ({`${amount} ${symbol}`})</span>
      </div>
      <div className="col-value">

          <span>
            <button onClick={deleteItem} className="btn btn-sm btn-outline-danger" alt="delete">
              <FontAwesomeIcon icon={faTrashAlt} /> 
            </button>
            <button onClick={toggleAndGetEditItem} className="btn btn-sm btn-outline-warning" alt="edit">
              <FontAwesomeIcon icon={faPen} /> 
            </button>
          </span>

        <h2>{balance}$</h2>

      </div>
    </motion.div>
  );
}

export default TableRow;