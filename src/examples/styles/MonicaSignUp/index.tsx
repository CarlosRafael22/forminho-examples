// Component based on the sample code of a Signup Form built by Monica Powell on https://codepen.io/M0nica/pen/jObpJma
// Its purpose was to build a similar form to test css styling for Forminho
import React from 'react'
import { Form, Field, Button } from 'forminho'

const MonicaSignUp = () => {
  const onSubmitHandler = (values: any) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
  };

  const defaultButton = `
    font-size: 0.8em;
    color: #fff;
    padding: 1em;
    margin: 0.5em;
    border-radius: 5px;
    border-width: 0px;
    text-transform: uppercase;
  `

  const buttonStyle = `
    ${defaultButton}  
    & {
        background-color: #b5838d;
    }
    &:hover {
    background-color: #a6757f;
    }
  `

  const inputStyle = `
    padding: 1em;
    border-radius: 0px;
    border: 0px;
    border-radius: 5px;
    background-color: hsl(0, 0%, 95%);
  `


  return (
      <div style={{width: '20rem', margin: '0 auto'}}>
          <h1>Welcome Back! <span className="wave">👋🏾</span></h1>
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmitHandler={onSubmitHandler}
            >
            <Field.Input css={inputStyle} name='email' type='text' label='Email:' />
            <Field.Input css={inputStyle} name='password' type='password' label='Password:' />
            <Button css={defaultButton} type="button" onClick={() => console.log('CLICOU NO DEFAULT')}>Default</Button>
            <Button css={buttonStyle}>Sign up</Button>
            {/* <Button css={buttonStyle}>Login</Button> */}
        </Form>
    </div>
  )
}

export default MonicaSignUp;
