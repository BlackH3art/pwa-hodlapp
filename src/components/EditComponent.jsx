import React from 'react';
import { Form, Field } from 'react-final-form';

import './style/EditComponent.css';

const subscribeTo = {
  value: true,
  active: true,
  error: true,
  touched: true
}

// const required = value => (value ? undefined : 'Required')

const EditComponent = ({ handleEditItem, editingItem, crypto, cryptoAmount, setCrypto, setCryptoAmount, cancel }) => {
  
  return ( 
    <>
      <div className="edit-popup">
        <Form onSubmit={handleEditItem} subscription={{
          submitting: true
        }}>
          { ({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>

              <Field name="asset" placeholder="Asset" /*validate={required}*/ subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field input-container" : "input-container"}>
                    <label> Editing item: {editingItem.symbol} </label>
                    <input className="search" {...input} placeholder={placeholder} value={crypto} onChange={setCrypto} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="amount" placeholder="Amount" /*validate={required}*/ subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field input-container" : "input-container"}>
                    <label> Current amount: {editingItem.amount} </label>
                    <input className="search" {...input} placeholder={placeholder} value={cryptoAmount} onChange={setCryptoAmount} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="button-container">
                <button className="btn btn-success" type="submit" disabled={submitting}> submit </button>
                <button className="btn btn-danger" onClick={cancel}> cancel </button>
              </div>
            </form>
          )} 
        </Form>
      </div>
    </>
   );
}
 
export default EditComponent;