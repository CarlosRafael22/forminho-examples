import React, { useState } from 'react'
import { Forminho, Form, Field } from 'forminho'

const FormWithRef = () => {
    const [showInput, setShowInput] = useState(false)
    const firstRef = React.useRef<any>(null)
    // const onSubmitHandler = (values: any) => {
    //     console.log(values);
    //     alert(values)
    // };

    const onChange = (event: React.ChangeEvent<HTMLFormElement>, currentValues: any) => {
        console.log('CHANGING ', event.target.name, event.target.value)
        console.log('CURRENT VALUES: ', currentValues)
        if (currentValues.myname.length > 0) {
            setShowInput(true)
        }

    }

    const lastNameCallback = (node: any) => {
        console.log('attached: ', node)
        if (node) {
            node.current.focus()
            firstRef.current = node.current
            console.log('FIRST REFFFFFFFFF - ', firstRef.current)
        }
    }

    return (
        <div style={{width: '20rem', margin: '0 auto'}}>
            <Forminho>
                <Form
                    initialValues={{ myname: '', lastName: '' }}
                    // onSubmitHandler={onSubmitHandler}
                    onChangeHandler={onChange}
                >
                <Field.Input name='myname' type='text' label='Your first name' placeholder='Type your first name...' />
                { showInput && (
                    <Field.Input
                        ref={lastNameCallback}
                        name='lastName'
                        type='text' label='Your last name'
                        placeholder='Type your last name...'
                    />
                )}
                <button onClick={() => {
                    if (firstRef.current) {
                        firstRef.current.select()
                    }
                }}>Select 1st text</button>
            </Form>
        </Forminho>
        <button onClick={() => {
            if (firstRef.current) {
                firstRef.current.select()
            }
        }}>Select 1st text</button>
        </div>
    )
}

export default FormWithRef;
