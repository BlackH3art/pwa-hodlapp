import React from 'react';
import { Form, Field } from 'react-final-form';

import './style/EditComponent.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}

const subscribeTo = {
  value: true,
  active: true,
  error: true,
  touched: true
}

const required = value => (value ? undefined : 'Required')

const EditComponent = ({ handleSubmit }) => {
  return ( 
    <>
      <div className="edit-popup">
        <Form onSubmit={showResults} subscription={{
          submitting: true
        }}>
          { ({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>

              <Field name="asset" placeholder="Asset" validate={required} subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field" : null}>
                    <label> Asset </label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="amount" placeholder="Amount" validate={required} subscription={subscribeTo}>
                {({ input, meta, placeholder }) => (
                  <div className={meta.active ? "active-field" : null}>
                    <label> Amount </label>
                    <input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button type="submit" disabled={submitting}> submit </button>
            </form>
          )} 
        </Form>
      </div>
    </>
   );
}
 
export default EditComponent;