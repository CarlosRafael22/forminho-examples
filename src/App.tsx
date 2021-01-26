import React, { useState } from 'react';
import {
  SimpleForm,
  FormWithAllFields,
  FormWithRef,
  NeoForm,
  MonicaSignUp,
  LoginForm
} from './examples'
import './App.css';

type FormsEnum = { [key:string]: () => JSX.Element }

const Forms: FormsEnum = {
  SimpleForm,
  FormWithAllFields,
  FormWithRef,
  NeoForm,
  MonicaSignUp,
  LoginForm
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
  const Component = Forms[chosenForm]

  return (
    <>
    <Header chosenForm={chosenForm} callback={setChosenForm} />
    <main style={{width: '20rem', margin: '0 auto'}}>
    { chosenForm && <Component /> }
    </main>
    </>
  )
}

export default App;
