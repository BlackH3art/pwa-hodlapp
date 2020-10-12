import React, { useEffect, useRef } from 'react';


const FormComponent = (props) => {

  const cryptoInputRef = useRef();

  useEffect(
    () => { 
      cryptoInputRef.current.focus()
    } , []
  )


  const { handleSubmit, crypto, cryptoAmount, setCrypto, setCryptoAmount } = props;

  return ( 
    <>
      <div className="form-container">

        <form action="" onSubmit={handleSubmit}>

          <label htmlFor="">What crypto are you hodling?</label> <br/>
          <span className="additional-info">( Use symbol of a crypto like BTC for Bitcoin, ETH for Ethereum etc. )</span> <br/>
          <input ref={cryptoInputRef} htmlFor="symbol" type="text" className="search" placeholder="Search..."value={crypto} onChange={setCrypto}  /><br/>

          <label htmlFor=""> Amount</label> <br/>
          <span className="additional-info">( Number )</span> <br/>
          <input htmlFor="amount" type="number" className="search" placeholder="Number"value={cryptoAmount} onChange={setCryptoAmount} /><br/>

          <button className="btn btn-primary" onClick={() => handleSubmit} onKeyPress={handleSubmit}>add</button>
        </form>

      </div> 
    </>
   );
}
 
export default FormComponent;