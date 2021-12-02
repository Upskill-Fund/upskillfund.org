import React from 'react';
import Input from '../../reusable/Input';
import TextArea from '../../reusable/TextArea';

function DonateDonor(props) {
  const { handleDonorInputChange } = props;

  return (
    <section className="block-section">
      <div className="donation-donor">
        <h2 className="donation-subtitle">Your Information</h2>
        <div className="donor-box">
          <div className="row">
            <div className="col-6 donor-half-box">
              <div className="form-group">
                <Input
                  for="donor-firstname"
                  labelText="First Name"
                  name="firstName"
                  type="text"
                  aria="donorFirstName"
                  updateField={handleDonorInputChange}
                  required={true}
                />
              </div>
            </div>
            <div className="col-6 donor-half-box">
              <div className="form-group">
                <Input
                  for="donor-lastname"
                  labelText="Last Name"
                  name="lastName"
                  type="text"
                  aria="donorLastName"
                  updateField={handleDonorInputChange}
                  required={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12 label-column">
              <div className="form-group">
                <Input
                  for="donor-email"
                  labelText="Email Address"
                  name="email"
                  type="email"
                  aria="donorEmail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  updateField={handleDonorInputChange}
                  required={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12  label-column">
              <div className="form-group">
                <Input
                  for="donor-ph-number"
                  labelText="Phone Number"
                  name="phone"
                  type="text"
                  aria="donorPhoneNumber"
                  pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                  updateField={handleDonorInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="donor-box">
          <div className="row">
            <div className="col-12 label-column">
              <div className="form-group">
                <TextArea
                  for="donor-message"
                  labelText="Message"
                  name="message"
                  updateField={handleDonorInputChange}
                />
              </div>
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
