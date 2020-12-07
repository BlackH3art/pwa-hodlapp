import React from 'react';
import { motion } from 'framer-motion';

const TableHead = () => {
  return ( 
    <>
      <motion.div className="tablehead" layout>
        <div className="col-num"></div>
        <div className="col-asset">
          <h2>Asset</h2>
        </div>
        <div className="col-value">
          <h2>Value</h2>
        </div>
      </motion.div>
    </>
   );
}
 
export default TableHead;