import React from 'react';

function DonateCheckout(props) {
  const {
    show,
    amountSelected,
    frequencySelected,
    formValues,
    donationCheckout,
    handleDonationCancel,
  } = props;

  return (
    <div className={`donate-checkout-container ${show ? 'hide' : 'show'} `}>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 style={{ marginBottom: '30px' }}>Checkout summary</h2>

        <div className="d-flex flex-column justify-content-start mb-4">
          <h5>
            {`Donation Amount: `}
            <span style={{ color: 'green' }}>{`$${amountSelected}`}</span>
          </h5>
          <h5>
            {`Donation Frequency: `}
            <span style={{ color: 'green' }}>{`${frequencySelected}`}</span>
          </h5>
          <p className="mr-4 mb-0">
            {`FirstName: `}
            <span style={{ color: 'green' }}>{`${formValues.firstName}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`LastName: `}
            <span style={{ color: 'green' }}>{`${formValues.lastName}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`Email `}
            <span style={{ color: 'green' }}>{`${formValues.email}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`Phone Number: `}
            <span style={{ color: 'green' }}>{`${formValues.phone}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`Message: `}
            <span style={{ color: 'green' }}>{`${formValues.message}`}</span>
          </p>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary mr-4"
            onClick={donationCheckout}
          >
            Submit
          </button>
          <button
            className="btn btn-danger ml-4"
            onClick={handleDonationCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonateCheckout;
