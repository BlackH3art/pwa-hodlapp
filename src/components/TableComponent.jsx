import React from 'react';

import TableNoItems from './TableNoItems';
import TableRow from './TableRow';
import TableHead from './TableHead';


const TableComponent = ({cryptoItems}) => {
  
  const handleDelete = (e) => {
    console.log('click');
  }

  const addedItems = cryptoItems.length === 0 ? <TableNoItems /> : cryptoItems.map((item, index) => (
    <TableRow key={index + 1} deleteItem={handleDelete} index={index + 1} symbol={item.symbol} amount={item.amount} balance={item.balance} />
    )
  )

  const tableHead = cryptoItems.length === 0 ? null : <TableHead />


  return ( 
    <>
      <div className="table-container">
        {tableHead}
        {addedItems}
      </div>
    </>
   );
}
 
export default TableComponent;