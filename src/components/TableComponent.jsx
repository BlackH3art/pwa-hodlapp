import React from 'react';
import { AnimateSharedLayout , motion} from 'framer-motion';

import TableNoItems from './TableNoItems';
import TableRow from './TableRow';
import TableHead from './TableHead';


const TableComponent = ({ cryptoItems, deleteItem, toggleAndGetEditItem }) => {
  
  const addedItems = cryptoItems.length === 0 ? <TableNoItems /> : cryptoItems.map((item, index) => (
    <TableRow 
      key={index + 1} 
      deleteItem={deleteItem.bind(null, item)} 
      toggleAndGetEditItem={toggleAndGetEditItem.bind(null, item)}
      index={index + 1} 
      symbol={item.symbol} 
      amount={item.amount} 
      balance={item.balance} />
    )
  )

  const tableHead = cryptoItems.length === 0 ? null : <TableHead />

  return ( 
    <>
      <AnimateSharedLayout>
      <motion.div className="table-container" layout>
        {tableHead}
        {addedItems}
      </motion.div>
      </AnimateSharedLayout>
    </>
   );
}
 
export default TableComponent;