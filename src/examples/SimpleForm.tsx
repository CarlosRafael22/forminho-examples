import React from 'react'
import { Form, Field } from 'forminho'

const Test = () => {
  const onSubmitHandler = (values: any) => {
      console.log(values);
      // alert(values)
  }

  const onValidationHandler = (values: any) => {
    let errors: string[] = []
    if (values.firstName === values.lastName) {
        errors.push('First and last names should be different')
    }

    if (values.firstName.length < 2) {
      errors.push('First name should have more than 2 characters')
    }

    if (values.lastName.length < 2) {
      errors.push('Last name should have more than 2 characters')
    }
    return errors
  }

  return (
      <div style={{width: '20rem', margin: '0 auto'}}>
        <Form
                initialValues={{ firstName: '', lastName: '' }}
                onSubmitHandler={onSubmitHandler}
                onValidationHandler={onValidationHandler}
            >
            <Field.Input name='firstName' type='text' label='Your first name' placeholder='Type your first name...' />
            <Field.Input name='lastName' type='text' label='Your last name' placeholder='Type your last name...' />
        </Form>
    </div>
  )
}

export default Test;
