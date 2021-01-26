import React, { useState } from 'react';
import {
  SimpleForm,
  FormWithAllFields,
  FormWithRef,
  NeoForm,
  MonicaSignUp
} from './examples'
import './App.css';

type FormsEnum = { [key:string]: () => JSX.Element }

const Forms: FormsEnum = {
  SimpleForm,
  FormWithAllFields,
  FormWithRef,
  NeoForm,
  MonicaSignUp
}

const Header = ({chosenForm, callback}: {chosenForm: string, callback: Function}) => {
  return (
    <section>
      {!chosenForm ? (
        Object.keys(Forms).map(form => <button className='choose-button' onClick={() => callback(form)}>{form}</button>)
      )
      : (
        <button className='back-button' onClick={() => callback(undefined)}><i className="fas fa-angle-left fa-2x" /></button>
        // <MonicaSignUp />
      )}
    </section>
  )
}

const App = () => {
  const [chosenForm, setChosenForm] = useState<string>('')

  console.log(' NO APPPPP ----- ', Forms, Object.keys(Forms), Forms['SimpleForm'])
  const Component = Forms[chosenForm]

  return (
    <>
    <Header chosenForm={chosenForm} callback={setChosenForm} />
    { chosenForm && <Component /> }
    </>
  )
}

export default App;
