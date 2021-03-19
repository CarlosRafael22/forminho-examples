import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Form, handleFieldError, Field } from 'forminho';


const FieldsSignup = () => {
    const inputText = useRef(null);
    const buttonRef = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [refresh, setRefresh] = useState(false);
    const [liveFirstName, setLiveFirstName] = useState('');
    const [liveLastName, setLiveLastName] = useState('');
    const [btVisible, setBtVisibility] = useState(false);
    const pText = useRef();
    // const btVisible = useRef(false);
    const onSubmitHandler = async (values: any) => {
        console.log('CHAMOU PAI')
        console.log(values)
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
    };

    const onValidationHandler = (values: any) => {
        console.log('VAI VALIDAR - ', values)
        if (values.firstName === values.lastName) {
            return ['First and last names should be different']
        }
    }

    const onLiveErrorFeedback = (fieldValues: any, formContext: any) => {
        const { setFieldError, clearFieldError } = handleFieldError(formContext);
        console.log('NO LIVE ERROR')
        console.log(setFieldError, clearFieldError)
        console.log(fieldValues)
        console.log(formContext)
        
        if (fieldValues.firstName.length < 6) {
            setFieldError('firstName', 'Must have more than 6 caracters');
        } else {
            clearFieldError('firstName')
        }
        
        if (fieldValues.lastName.indexOf(' ') < 0) {
            setFieldError('lastName', 'Must have space between names')
        } else {
            clearFieldError('lastName')
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLFormElement>, currentValues: any) => {
        console.log("Current Values, ", currentValues);
        console.log("Changing ", event.target.value);
        !btVisible && setBtVisibility(true);
        // btVisible.current = true;
        console.log("Changing visibility, ", btVisible);
    };

    const btUseRef = useCallback((node) => {
        console.log("Attached button ref ", node);
        if (node) {
        // node.innerText = inputText.current.value;
        buttonRef.current = node;
        console.log("ButtonRef: ", buttonRef);
        console.log("Changed button text");
        }
    }, []);

    useEffect(() => {
        console.log("Inside Effect: ", inputText, buttonRef);
    });

    console.log("------------------------------");
    console.log("Rendering");
    console.log("Refs ", inputText, buttonRef, pText);

    // const { liveValues } = useForminho(['firstName', 'humanType'])
    // console.log('LIVE VALUES DO HOOK: ', liveValues)
    console.log('FORM REF:', formRef.current)
    return (
        <div>
            <p>Last name: {liveLastName}</p>
        <button onClick={() => setRefresh(!refresh)}>Refresh</button>
        <p>You {formRef.current?.liveValues?.firstName}</p>
        <p>You {liveFirstName}</p>
        <h1>Hello CodeSandbox</h1>

        <Form
            initialValues={{
                firstName: 'Jonh',
                lastName: 'Doe',
                team: 'Arsenal',
                text: '',
                agreed: false,
                humanType: '',
                languages: []
            }} 
            onChangeHandler={onChange}
            onSubmitHandler={onSubmitHandler}
            onLiveErrorFeedback={onLiveErrorFeedback}
            onValidationHandler={onValidationHandler}
        >
          <label>Type your name </label>
          <Field.Input liveUpdate={setLiveFirstName} name='firstName' type='text' label='Your first name' placeholder='Type your first name...' />
            <Field.Input liveUpdate={setLiveLastName} name='lastName' type='text' label='Your last name' placeholder='Type your last name...' />
            {/* <Field.Input name='password' type='password' label='Your password' placeholder='Type your password...' /> */}
            <Field.Select name='team' label='Your team' options={['Chelsea', 'Arsenal']} />
            <Field.TextArea name='text' label='Talk' placeholder='Type anything...' />
            <div>
                <p>What kind of human are you?</p>
                <Field.Radio
                    name='humanType'
                    label='Muggle Doideira'
                    value='Muggle'
                />
                <Field.Radio
                    name='humanType'
                    label='Wizard Doideira'
                    value='Wizard'
                />
                <Field.Radio
                    name='humanType'
                    label='Werewolf Doideira'
                    value='Werewolf'
                />
            </div>
            <Field.Checkbox
                name='agreed'
                label='I agree with the terms'
            />
            <div>
                <label>Which languages do you speak?</label>
                <Field.Checkbox
                    name='languages'
                    label='Portuguese Doideira'
                    value='Portuguese'
                />
                <Field.Checkbox
                    name='languages'
                    label='English Doideira'
                    value='English'
                />
                <Field.Checkbox
                    name='languages'
                    label='French Doideira'
                    value='French'
                />
            </div>
          {btVisible && (
            <button ref={btUseRef} type="submit">
              {liveFirstName}
              {/* Send */}
            </button>
          )}
        </Form>
      </div>
    )
}

export default FieldsSignup;