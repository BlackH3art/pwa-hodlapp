import React, { useState } from 'react';

import FormComponent from './components/FormComponent';
import Header from './components/Header';
import TableRow from './components/TableRow';

import { fetchPrices } from './api/fetchPrices';
import { fetchBtcPrice } from './api/fetchPrices';

import './App.css';

const App = () => {

  const [btcPrice, setBtcPrice] = useState('');

  // array and single crypto
  const [cryptoItems, setCryptoItems] = useState([]);
  const [crypto, setCrypto] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');



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

    price.toFixed(2);


    let cryptoObject = {
      symbol: crypto,
      amount: cryptoAmount,
      balance: (cryptoAmount * price).toFixed(2),
      price: price,
    }

    let newCryptoItems = [...cryptoItems];
    newCryptoItems.push(cryptoObject);

    setCryptoItems(newCryptoItems)

    console.log(newCryptoItems);
    setCrypto('');
    setCryptoAmount('');
  }

  return (
    <>
      <Header btcPrice={btcPrice} />
      <div className="main-container">
        <section className="whole-section">

          <FormComponent  
            handleSubmit={handleSubmit}
            crypto={crypto}
            cryptoAmount={cryptoAmount}
            setCrypto={(e) => setCrypto(e.target.value.toUpperCase())}
            setCryptoAmount={(e) => setCryptoAmount(e.target.value)}
          />


          <div className="table-container">
            <div className="tablehead">
              <div className="col-num"></div>
              <div className="col-asset">
                <h2>Asset</h2>
              </div>
              <div className="col-value">
                <h2>Value</h2>
              </div>
            </div>
            {cryptoItems.map((item, index) => (
              <TableRow key={index + 1} index={index + 1} symbol={item.symbol} amount={item.amount} balance={item.balance} />
              )
            )}

          </div>
        </section>

      </div>
    </>
  );
};

export default App;