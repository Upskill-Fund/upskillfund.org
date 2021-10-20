import React from 'react';
import FloatingLabel from '../reusable/FloatingLabel';
import { EmailValidation } from '../../helper';
function Contact() {
  const [name, setName] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [isEmptyField, setIsEmptyField] = React.useState(false);
  const webhook = 'https://hooks.zapier.com/hooks/catch/6492165/btuks6o/';
  const updateField = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmailValue(e.target.value);
    } else if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
    e.preventDefault();
  };

  const validateEmail = (value) => {
    //regular expression for valid email address
    const emailValid = EmailValidation(value);
    if (emailValid) {
      // this is a valid email address
      setIsValidEmail(true);
    } else {
      // invalid email, show an error to the user.
      setIsValidEmail(false);
      setEmailErrorMessage('Enter valid email address');
    }
  };

  const formSubmission = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: emailValue,
      message: message,
    };
    if (name === '' || emailValue === '' || message === '') {
      setIsEmptyField(true);
    }
    if (name !== '' && emailValue !== '' && message !== '') {
      await fetch(webhook, {
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setSuccess(true);
          setName('');
          setEmailValue('');
          setMessage('');
        })
        .catch((error) => {
          console.log('error', error, JSON.stringify(data));
          setSuccess(false);
        });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-text-container form-width">
        <h3>Connecting With Us</h3>
        <span className="line"></span>
      </div>
      <div className="contact-form-container form-width">
        {!isValidEmail && <p style={{ color: 'red' }}>{emailErrorMessage}</p>}
        {success && <p style={{ color: 'green' }}>Form submitted</p>}
        {isEmptyField && (
          <p style={{ color: 'red' }}>Fill out the empty fields</p>
        )}
        <form
          className="contact-form"
          id="contactForm"
          onSubmit={formSubmission}
        >
          <FloatingLabel
            element="input"
            name="name"
            label="Name"
            type="text"
            value={name}
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
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
