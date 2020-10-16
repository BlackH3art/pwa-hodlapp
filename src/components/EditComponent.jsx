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
                  <div className={meta.active ? "active-field" : null}>
                    <label> Editing item: {editingItem.symbol} </label>
                    <input {...input} placeholder={placeholder} value={crypto} onChange={setCrypto} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="amount" placeholder="Amount" /*validate={required}*/ subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field" : null}>
                    <label> Current amount: {editingItem.amount} </label>
                    <input {...input} placeholder={placeholder} value={cryptoAmount} onChange={setCryptoAmount} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <button onClick={cancel}> cancel </button>
              <button type="submit" disabled={submitting}> submit </button>
            </form>
          )} 
        </Form>
      </div>
    </>
   );
}
 
export default EditComponent;