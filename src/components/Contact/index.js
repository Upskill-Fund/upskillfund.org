import { Button } from 'react-bootstrap';
import React from 'react';
import FloatingLabel from '../reusable/FloatingLabel';

function Contact() {
  const [value, setValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [message, setMessage] = React.useState('hi');
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
  const formSubmit = () => {
    console.log('message submitted', message);
  };
  return (
    <div className="contact-container">
      <div className="contact-text-container form-width">
        <h3>Connecting With Us</h3>
        <span className="line"></span>
      </div>
      <div className="contact-form-container form-width">
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
          />
          <FloatingLabel
            element="textarea"
            name="message"
            label="Your message"
            type="text"
            rows="5"
            updateField={updateField}
          />
          <div className="button-container">
            <Button onClick={() => formSubmit()}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
