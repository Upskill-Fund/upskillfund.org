import { Button } from 'react-bootstrap';
import React from 'react';
import FloatingLabel from '../reusable/FloatingLabel';

function Contact() {
  const [value, setValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const updateField = (e) => {
    if (e.target.name === 'name') {
      setValue(e.target.value);
    } else if (e.target.name === 'email') {
      setEmailValue(e.target.value);
    } else if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
    e.preventDefault();
  };

  const validateEmail = (value) => {
    console.log('validate email');
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(value)) {
      // this is a valid email address
      setIsValidEmail(true);
    } else {
      // invalid email, show an error to the user.
      setIsValidEmail(false);
      setEmailErrorMessage('Enter valid email address');
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('message submitted', message);
    setValue('');
    setEmailValue('');
    setMessage('');
    console.log(event);
  };

  return (
    <div className="contact-container">
      <div className="contact-text-container form-width">
        <h3>Connecting With Us</h3>
        <span className="line"></span>
      </div>
      <div className="contact-form-container form-width">
        {!isValidEmail && <p style={{ color: 'red' }}>{emailErrorMessage}</p>}
        <form className="contact-form">
          <FloatingLabel
            element="input"
            name="name"
            label="Name"
            type="text"
            value={value}
            updateField={updateField}
          />
          <FloatingLabel
            element="input"
            name="email"
            label="Email"
            type="email"
            value={emailValue}
            updateField={updateField}
            validateEmail={validateEmail}
          />
          <FloatingLabel
            element="textarea"
            name="message"
            value={message}
            label="Your message"
            type="text"
            rows="5"
            updateField={updateField}
          />
          <div className="button-container">
            <Button onClick={(event) => formSubmit(event)}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
