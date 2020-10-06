import React, { useState } from 'react';

import { fetchPrices } from './api/fetchPrices';
import { fetchBtcPrice } from './api/fetchPrices';

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [price, setPrice] = useState({});
  const [btcPrice, setBtcPrice] = useState('');

  // tablica i pojedyncze krypto
  const [cryptoItems, setCryptoItems] = useState([]);
  const [crypto, setCrypto] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchPrices(query)

      setPrice(data);

      setQuery('');
    }
  }

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
      name: crypto,
      amount: cryptoAmount,
      balance: cryptoAmount * price,
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
      <header>
        <h1 className="title"> BTC price is now:</h1>
        <h2 className="price"> {btcPrice} $ </h2>
      </header>
      <div className="main-container">
        <section className="whole-section">
          <div className="form-container">

            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">What crypto are you hodling?</label> <br/>
              <span className="additional-info">( Use symbol of a crypto like BTC for Bitcoin, ETH for Ethereum etc. )</span> <br/>
              <input type="text" className="search" placeholder="Search..."value={crypto} onChange={(e) => setCrypto(e.target.value.toUpperCase())}  /><br/>

              <label htmlFor=""> Amount</label> <br/>
              <span className="additional-info">( Number )</span> <br/>
              <input type="number" className="search" placeholder="Number"value={cryptoAmount} onChange={(e) => setCryptoAmount(e.target.value)} /><br/>

              <button onClick={() => handleSubmit} onKeyPress={handleSubmit}>send</button>
            </form>

          </div>
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
              <div className="tablerow">
                <div className="col-num">
                  <h2> {index + 1}. </h2>
                </div>
                  <div className="col-asset">
                    <h1>{item.name}</h1>
                    <span className="amount"> ({`${item.amount} ${item.name}`})</span>
                  </div>
                  <div className="col-value">
                    <h2>{item.balance}$</h2>
                  </div>
              </div>
              )
            )}

          </div>
        </section>

      </div>
    </>
  );
};

export default App;