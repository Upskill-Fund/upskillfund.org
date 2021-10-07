import React from 'react';

function DonateDonor() {
  const InvalidMsg = (e) => {
    console.log(e.target);
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
                className="donor-text-input"
                required
              />
            </div>
            <div className="col-6 donor-half-box">
              <span className="donor-label required  label-column">
                Last Name
              </span>
              <input
                type="text"
                name="lname"
                className="donor-text-input"
                required
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
                className="donor-text-input"
                required
              ></input>
              <small className="">Your receipt will be emailed here.</small>
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
                  pattern="[0-9]{10}"
                  name="phone-number"
                  className="donor-text-input"
                  onInvalid={InvalidMsg}
                />
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
                className="donor-text-area"
                placeholder="Your Message"
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
