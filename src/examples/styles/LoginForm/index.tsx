// Component based on the sample code of a login page form built by Mert Cukuren on https://codepen.io/knyttneve/pen/JQppEw
// Its purpose was to build a similar form to test css styling for Forminho
import React from 'react'
import { Forminho, Form, Field, Button } from 'forminho'
import './style.css'

const LoginForm = () => {
  const onSubmitHandler = (values: any) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
  };


  return (
    <div className="left">
        <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">Log in to your account using email and password</h4>
            <Forminho>
                <Form
                    initialValues={{ email: '', password: '' }}
                    onSubmitHandler={onSubmitHandler}
                    className='form'
                >
                    <Field.Input name='email' type='text' placeholder='Email Address' className='form-field animation a3 workaround-w100' />
                    <Field.Input name='password' type='password' placeholder='Password' className='form-field animation a4 workaround-w100' />
                    <Button>LOGIN</Button>
                    {/* <Button css={buttonStyle}>Login</Button> */}
                </Form>
            </Forminho>
        </div>
    </div>
  )
}

export default LoginForm;
