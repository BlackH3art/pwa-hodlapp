import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Form, Field } from 'react-final-form';

import './style/EditComponent.css';

const subscribeTo = {
  value: true,
  active: true,
  error: true,
  touched: true
}

const initialObject = {
  opacity: 0,
  scale: 0.2,
  x: 100
}
const finalObject = {
  opacity: 1,
  scale: 1,
  x: 0
}
const exitObject = {
  opacity: 0,
  scale: 0.2,
  x: 100
}
const transitionObject = {
  ease: "easeOut", 
  duration: 2,
  delay: .2
}

// const required = value => (value ? undefined : 'Required')

const EditComponent = ({ isEditComponentActive, handleEditItem, editingItem, crypto, cryptoAmount, setCrypto, setCryptoAmount, cancel }) => {
  console.log('render editcompo');
  const crypotInputRef = useRef()

  useEffect(() => {
    crypotInputRef.current.focus()
  }, [])

  return ( 
    <>
      <motion.div className="edit-popup" 
        key="edit-popup"
        initial={initialObject} 
        animate={finalObject} 
        exit={exitObject} 
        transition={transitionObject}
      >

        <Form onSubmit={handleEditItem} subscription={{
          submitting: true
        }}>
          { ({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>

              <Field name="asset" placeholder="Asset" /*validate={required}*/ subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field input-container" : "input-container"}>
                    <label> Editing item: {editingItem.symbol} </label>
                    <input ref={crypotInputRef} className="search" {...input} placeholder={placeholder} value={crypto} onChange={setCrypto} />
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
      </motion.div>

    </>
   );
}
 
export default EditComponent;