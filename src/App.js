import React, { useState } from 'react';

import EditComponent from './components/EditComponent';
import FormComponent from './components/FormComponent';
import Header from './components/Header';
import TableComponent from './components/TableComponent';


import { fetchPrices } from './api/fetchPrices';
import { fetchBtcPrice } from './api/fetchPrices';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const [btcPrice, setBtcPrice] = useState('');

  // array and single crypto
  const [cryptoItems, setCryptoItems] = useState([]);
  const [crypto, setCrypto] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');

  const [editComponent, setEditComponent] = useState(false)



  const fetchForBtcPrice = async () => {
    const response = await fetchBtcPrice();
    const currentBtcPrice = Number(response.price)
    
    setBtcPrice(currentBtcPrice.toFixed(2))
  }
  fetchForBtcPrice()

  const handleSubmit = async (e) => {
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
  }

  const handleDelete = (itemToDelete) => {

    let newCryptoItems = cryptoItems.filter((items) => {
      return items !== itemToDelete;
    });

    setCryptoItems(newCryptoItems)
  }

  const toggleEditComponent = () => {

    setEditComponent(!editComponent)
    console.log(editComponent ,'click edit');
  }

  

  return (
    <>
      <div className="main-container">
        <Header btcPrice={btcPrice} />
        <section className="whole-section">

          <FormComponent  
            handleSubmit={handleSubmit}
            crypto={crypto}
            cryptoAmount={cryptoAmount}
            setCrypto={(e) => setCrypto(e.target.value.toUpperCase())}
            setCryptoAmount={(e) => setCryptoAmount(e.target.value)}
          />

          <TableComponent cryptoItems={cryptoItems} toggleEditComponent={toggleEditComponent} deleteItem={handleDelete.bind(this)} />

          {/* <EditComponent handleSubmit={handleSubmit} /> */}


        </section>

      </div>
    </>
  );
};

export default App;