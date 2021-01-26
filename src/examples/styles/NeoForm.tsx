// Component based on the sample code of a Neomorphic Form built by Swapnil on https://codepen.io/swapnet/pen/QWwPVwE
// Its purpose was to build a similar form to test css styling for Forminho
import React from 'react'
import { Forminho, Form, Field, Button } from 'forminho'

const NeoForm = () => {
  const onSubmitHandler = (values: any) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
  };

  const buttonStyle = `
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 320px;
    padding: 16px;
    background-color: #EBECF0;
    text-shadow: 1px 1px 0 #FFF;
    width: 100%;
    
    color:#61677C;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    
    &:hover {
        box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
    }
    
    &:active {
        box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
    
    &.icon {
        margin-right: 16px/2;
    }
    
    &.unit {
        border-radius: 16px/2;
        line-height: 0;
        width: 16px*3;
        height: 16px*3;
        display:inline-flex;
        justify-content: center;
        align-items:center;
        margin: 0 16px/2;
        font-size: 16px*1.2;
        
        .icon {
        margin-right: 0; 
        }
    &.red {
        display: block;
        width: 100%;
        color: #AE1100;
        }
  `

  const inputStyle = `
    color: #BABECC;
    text-shadow: 1px 1px 1px #FFF;

    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 320px;
    padding: 16px;
    background-color:#EBECF0;
    text-shadow: 1px 1px 0 #FFF;

    margin-right: 16px/2;
    box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
        box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
  `

  return (
      <div style={{width: '20rem', margin: '0 auto'}}>
          <Forminho>
              <Form
                  initialValues={{ email: '', password: '' }}
                  onSubmitHandler={onSubmitHandler}
              >
              <Field.Input css={inputStyle} name='email' type='text' placeholder='Email Address' />
              <Field.Input css={inputStyle} name='password' type='password' placeholder='Password' />
              <Button css={buttonStyle}><i className="icon fa fa-lock red"></i> <span className="red">Log in</span></Button>
          </Form>
      </Forminho>
    </div>
  )
}

const styles = {
    input: {
        marginRight: '0.8rem',
        boxShadow:  'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease-in-out',
        appearance: 'none',
        '-webkit-appearance': 'none',
      
        '&:focus': {
          boxShadow:  'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
        }
      },
    'buttonInput': {
        border: 0,
        outline: 0,
        fontSize: '16px',
        borderRadius: '160px',
        padding: '16px',
        backgroundColor: '#EBECF0',
        textShadow: '1px 1px 0 #FFF',
      },
    'red': {
        color: '#AE1100',
        width: '100%'
    }
}

export default NeoForm;
