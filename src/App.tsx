import React from 'react';
import {
  SimpleForm,
  FormWithAllFields,
  FormWithRef
} from './examples'
import './App.css';

const App = () => {

  return (
    <>
      <h2>Simple Form</h2>
      <SimpleForm />
      <h2>Form with Ref</h2>
      <FormWithRef />
      <h2>Example with All Fields available</h2>
      <FormWithAllFields />
    </>
  )
}

export default App;
