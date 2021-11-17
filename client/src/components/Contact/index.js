import React from 'react';
import { fetchFromUrl } from '../../helper';
import Input from '../reusable/Input';
import TextArea from '../reusable/TextArea';
function Contact() {
  const inputFields = {
    name: '',
    email: '',
    message: '',
  };

  const [values, setValues] = React.useState(inputFields);
  const [success, setSuccess] = React.useState(false);
  const [failedMsg, setFailedMsg] = React.useState(false);
  const [isEmptyField, setIsEmptyField] = React.useState(false);

  const updateField = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    e.preventDefault();
  };

  const formSubmission = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.classList.add('was-validated');
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (values.name === '' || values.email === '') {
        setIsEmptyField(true);
      } else if (values.name !== '' && values.email !== '') {
        setIsEmptyField(false);
      }
    } else {
      const options = {
        method: 'POST',
        body: values,
      };
      if (values.name === '' || values.email === '') {
        setIsEmptyField(true);
      } else if (values.name !== '' && values.email !== '') {
        await fetchFromUrl(
          process.env.REACT_APP_CONTACT_FORM_WEBHOOK_URL,
          options
        )
          .then((data) => {
            if (data.status === 'success') {
              setSuccess(true);

              setValues({
                name: '',
                email: '',
                message: '',
              });
            } else {
              setFailedMsg(true);
              setValues({
                name: '',
                email: '',
                message: '',
              });

              console.log('Wrong hook is used to send information');
            }
            form.classList.remove('was-validated');
          })
          .catch((err) => {
            console.log('err', err);
            setSuccess(false);
          });
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-text-container form-width">
        <h3>Connecting With Us</h3>
        <span className="line"></span>
      </div>
      <div className="contact-form-container form-width">
        {success && <p style={{ color: 'green' }}>Form submitted</p>}
        {failedMsg && (
          <p style={{ color: 'red' }}>
            Failed to send message. Please try again
          </p>
        )}
        {isEmptyField && (
          <p style={{ color: 'red' }}>Fill out the empty fields</p>
        )}
        <form
          className="contact-form needs-validation"
          noValidate
          id="contactForm"
          onSubmit={formSubmission}
        >
          <div className="form-group">
            <Input
              for="contact-name"
              labelText="Name"
              name="name"
              value={values.name}
              type="text"
              aria="contactName"
              updateField={updateField}
              required={true}
            />
          </div>
          <div className="form-group">
            <Input
              for="contact-email"
              labelText="Email address"
              name="email"
              value={values.email}
              type="email"
              aria="contactEmail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              updateField={updateField}
              required={true}
            />

            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <TextArea
              for="contact-text-area"
              labelText="Message"
              value={values.message}
              name="message"
              updateField={updateField}
            />
          </div>
          <div className="button-container">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
