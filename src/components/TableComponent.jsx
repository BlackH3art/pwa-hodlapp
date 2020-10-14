import React from 'react';

import TableNoItems from './TableNoItems';
import TableRow from './TableRow';
import TableHead from './TableHead';


const TableComponent = ({cryptoItems, toggleEditComponent, deleteItem}) => {
  


  const addedItems = cryptoItems.length === 0 ? <TableNoItems /> : cryptoItems.map((item, index) => (
    <TableRow key={index + 1} toggleEditComponent={toggleEditComponent} deleteItem={deleteItem.bind(null, item)} index={index + 1} symbol={item.symbol} amount={item.amount} balance={item.balance} />
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