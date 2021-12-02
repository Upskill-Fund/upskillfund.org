import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
function DonateCheckout(props) {
  const stripePromise = loadStripe(
    process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY
  );
  const summary = queryString.parse(props.location.search);

  const {
    amountSelected,
    frequencySelected,
    quantity,
    firstName,
    lastName,
    email,
    phone,
    message,
    priceId,
    paymentMode,
  } = summary;

  const [isError, setIsError] = React.useState(false);

  const donationCheckout = async () => {
    const stripe = await stripePromise;
    let domain = window.location.href.replace(/[^/]*$/, '');
    try {
      await stripe.redirectToCheckout({
        lineItems: [
          {
            price: process.env[priceId], // Replace with the ID of your price
            quantity: parseInt(quantity),
          },
        ],
        mode: paymentMode,
        successUrl: domain + 'success?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl:
          domain +
          `donateCheckout?firstName=${firstName}&amountSelected=${amountSelected}&frequencySelected=${frequencySelected}&lastName=${lastName}&email=${email}&phone=${phone}&message=${message}&priceId=${priceId}&paymentMode=${paymentMode}`,
      });
    } catch (error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      console.log('error', error.message);
      setIsError(true);
    }
  };
  return (
    <div
      className={`donate-checkout-container d-flex flex-column align-items-center justify-content-center`}
    >
      <div className="container d-flex flex-column align-items-center justify-content-center">
        {isError ? (
          <p style={{ color: 'red' }}>
            Oops! Something went wrong. Please try again.
          </p>
        ) : (
          ''
        )}
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
          <p className="mr-4 mb-0">
            {`Message: `}
            <span style={{ color: 'green' }}>{`${message}`}</span>
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
          <Link to="/donate">
            <button className="btn btn-danger ml-4">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DonateCheckout;
