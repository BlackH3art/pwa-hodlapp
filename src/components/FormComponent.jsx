import React from 'react';


const FormComponent = (props) => {

  const { handleSubmit, crypto, cryptoAmount, setCrypto, setCryptoAmount } = props;

  return ( 
    <>
      <div className="form-container">

        <form action="" onSubmit={handleSubmit}>

          <label htmlFor="">What crypto are you hodling?</label> <br/>
          <span className="additional-info">( Use symbol of a crypto like BTC for Bitcoin, ETH for Ethereum etc. )</span> <br/>
          <input type="text" className="search" placeholder="Search..."value={crypto} onChange={setCrypto}  /><br/>

          <label htmlFor=""> Amount</label> <br/>
          <span className="additional-info">( Number )</span> <br/>
          <input type="number" className="search" placeholder="Number"value={cryptoAmount} onChange={setCryptoAmount} /><br/>

          <button onClick={() => handleSubmit} onKeyPress={handleSubmit}>send</button>
        </form>

      </div> 
    </>
   );
}
 
export default FormComponent;