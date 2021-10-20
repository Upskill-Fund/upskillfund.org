import React from 'react';

function DonateDonor(props) {
  const {
    handleInputChange,
    validateEmail,
    isValidEmail,
    emailErrorMessage,
    validatePhoneNumber,
    isValidPhoneNumber,
    phoneNumberErrorMessage,
  } = props;

  const InvalidMsg = (e) => {
    const textbox = e.target;
    if (textbox.validity.patternMismatch) {
      if (textbox.name === 'phone-number') {
        textbox.setCustomValidity('please enter valid phone number.');
      }
    } else {
      textbox.setCustomValidity('');
    }
    return true;
  };
  return (
    <section className="block-section">
      <div className="donation-donor">
        <h2 className="donation-subtitle">Your Information</h2>
        <div className="donor-box">
          <div className="row">
            <div className="col-6 donor-half-box">
              <span className="donor-label required  label-column">
                First Name
              </span>
              <input
                type="text"
                name="fname"
                id="donor-firstname"
                className="donor-text-input"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6 donor-half-box">
              <span className="donor-label required  label-column">
                Last Name
              </span>
              <input
                type="text"
                name="lname"
                id="donor-lastname"
                className="donor-text-input"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12 label-column">
              <span className="donor-label required">Email</span>
            </div>
            <div className="col-12">
              <input
                type="email"
                name="email"
                id="donor-email"
                className="donor-text-input"
                required
                onBlur={validateEmail}
                onChange={handleInputChange}
              ></input>
              {isValidEmail ? (
                <small className="">Your receipt will be emailed here.</small>
              ) : (
                <small style={{ color: 'red' }}>{emailErrorMessage}</small>
              )}
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12  label-column">
              <span className="donor-label">Phone Number</span>
            </div>
            <div className="col-12 row">
              <div className="col-6">
                <input
                  type="text"
                  id="donor-ph-number"
                  // pattern="[0-9]{10}"
                  name="phone-number"
                  className="donor-text-input"
                  // onInvalid={InvalidMsg}
                  onBlur={validatePhoneNumber}
                  onChange={handleInputChange}
                />
                {isValidPhoneNumber ? (
                  ''
                ) : (
                  <small style={{ color: 'red' }}>
                    {phoneNumberErrorMessage}
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12 label-column">
              <span className="donor-label">Leave a comment</span>
            </div>
            <div className="col-12">
              <textarea
                rows="5"
                id="donor-message"
                className="donor-text-area"
                placeholder="Your Message"
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12 button-container">
              <input type="submit" value="Donate" className="btn"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateDonor;
