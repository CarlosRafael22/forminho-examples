import React from 'react'
import { Forminho, Form, Field } from 'forminho'

const Test = () => {
  const onSubmitHandler = (values: any) => {
      console.log(values);
      alert(values)
  };

  return (
      <div style={{width: '20rem', margin: '0 auto'}}>
          <Forminho>
              <Form
                  initialValues={{ firstName: '', lastName: '' }}
                  onSubmitHandler={onSubmitHandler}
              >
              <Field.Input name='firstName' type='text' label='Your first name' placeholder='Type your first name...' />
              <Field.Input name='lastName' type='text' label='Your last name' placeholder='Type your last name...' />
          </Form>
      </Forminho>
    </div>
  )
}

export default Test;
