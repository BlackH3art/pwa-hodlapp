import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'

import EditComponent from './components/EditComponent';
import FormComponent from './components/FormComponent';
import Header from './components/Header';
import TableComponent from './components/TableComponent';


import { fetchPrices } from './api/fetchPrices';
import { fetchBtcPrice } from './api/fetchPrices';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


const dataArray = [
  {symbol: "BTC", amount: "2", balance: "22730.22", price: "11365.11"},
  {symbol: "ETH", amount: "2", balance: "749.32", price: "374.66"},
  {symbol: "CHZ", amount: "41201", balance: "436.85", price: "0.01"}
]


const App = () => {

  const [btcPrice, setBtcPrice] = useState('');

  // array and single crypto
  const [cryptoItems, setCryptoItems] = useState(dataArray);
  const [crypto, setCrypto] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');

  const [editComponent, setEditComponent] = useState(false)
  const [editingItem, setEditingItem] = useState({})

  const fetchForBtcPrice = async () => {
    const response = await fetchBtcPrice();
    const currentBtcPrice = Number(response.price)
    
    setBtcPrice(currentBtcPrice.toFixed(2))
  }
  
  useEffect(() => {
    fetchForBtcPrice()
  }, [])
  

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    let response = await fetchPrices(crypto);
    let price = Number(response.price)

    let cryptoObject = {
      symbol: crypto,
      amount: cryptoAmount,
      balance: (cryptoAmount * price).toFixed(2),
      price: price.toFixed(2),
    }

    let newCryptoItems = [...cryptoItems];
    newCryptoItems.push(cryptoObject);

    setCryptoItems(newCryptoItems)
    setCrypto('');
    setCryptoAmount('');
  }, [crypto, cryptoAmount, cryptoItems])

  const findItem = useCallback((itemToLookFor) => {
    let item = cryptoItems.find((itm) => {
      return itm === itemToLookFor
    })
    return item
  }, [cryptoItems])

  const toggleEditComponent = useCallback((itemToEdit) => {
    setEditComponent(!editComponent)
    let item = findItem(itemToEdit)
    setEditingItem(item)
  }, [editComponent, findItem])

  const handleEditItem = useCallback(async () => {

    let response = await fetchPrices(crypto);
    let price = Number(response.price)
    let indexOfEditingItem = cryptoItems.indexOf(editingItem)

    cryptoItems[indexOfEditingItem] = {
      symbol: crypto,
      amount: cryptoAmount,
      balance: (cryptoAmount * price).toFixed(2),
      price: price.toFixed(2),
    }

    setCrypto('');
    setCryptoAmount('');
    setEditingItem('')
    toggleEditComponent();
  }, [crypto, cryptoAmount, cryptoItems, editingItem, toggleEditComponent])

  const handleDelete = useCallback((itemToDelete) => {


    let newCryptoItems = cryptoItems.filter((items) => {
      return items !== itemToDelete;
    });

    setCryptoItems(newCryptoItems)
  }, [cryptoItems])

  const cancelEdit = useCallback(() => {
    setEditComponent(!editComponent);
    setCrypto('');
    setCryptoAmount('');
  }, [editComponent])

  const showEditComponent = editComponent 
    ? <EditComponent 
        isEditComponentActive={editComponent}
        handleEditItem={handleEditItem} 
        editingItem={editingItem}
        crypto={crypto}
        cryptoAmount={cryptoAmount}
        setCrypto={(e) => setCrypto(e.target.value.toUpperCase())}
        setCryptoAmount={(e) => setCryptoAmount(e.target.value)}
        cancel={cancelEdit}
      /> 
    :  null;

  return (
    <>
      <AnimatePresence>

      <div className="main-container">
        <Header btcPrice={btcPrice} />
        <section className="whole-section">

          <FormComponent  
            handleSubmit={handleSubmit}
            crypto={editComponent ? '' : crypto}
            cryptoAmount={editComponent ? '' : cryptoAmount}
            setCrypto={(e) => setCrypto(e.target.value.toUpperCase())}
            setCryptoAmount={(e) => setCryptoAmount(e.target.value)}
          />

          <TableComponent 
            cryptoItems={cryptoItems} 
            deleteItem={handleDelete.bind(this)} 
            toggleAndGetEditItem={toggleEditComponent.bind(this)}
          />

          {showEditComponent}

        </section>

      </div>

      </AnimatePresence>
    </>
  );
};

export default App;