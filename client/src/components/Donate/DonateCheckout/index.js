import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

function DonateCheckout(props) {
  const stripePromise = loadStripe(
    'pk_test_51JfpeGIhvbrRb38mYDmryFeWWPtoy2i1joA62N83o6MIVpwzf6pfK8iOavS8xApHbidTXm5HKiNMc0RVCKtL55hV00Ijvr9X1O'
  );

  const {
    show,
    amountSelected,
    frequencySelected,
    firstName,
    lastName,
    email,
    phone,

    // handleDonationCheckout,
    handleDonationCancel,
  } = props;

  const handleClientOnlyStripeDonation = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;
    // var DOMAIN = location.href.replace(/[^/]*$/, '');
    let domain = window.location.href.replace(/[^/]*$/, '');
    console.log(
      'domain and replace',
      window.location.href,
      'and',
      window.location.href.replace(/[^/]*$/, '')
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1JnVTUIhvbrRb38mTBVjjBjc', // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: domain + 'success?session_id={CHECKOUT_SESSION_ID}',
      cancelUrl: domain + 'canceled',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) console.log('error');
  };

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
            <span style={{ color: 'green' }}>{`${firstName}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`LastName: `}
            <span style={{ color: 'green' }}>{`${lastName}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`Email `}
            <span style={{ color: 'green' }}>{`${email}`}</span>
          </p>
          <p className="mr-4 mb-0">
            {`Phone Number: `}
            <span style={{ color: 'green' }}>{`${phone}`}</span>
          </p>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary mr-4"
            onClick={handleClientOnlyStripeDonation}
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
