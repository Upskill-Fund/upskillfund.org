import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateDonor from './DonateDonor';
import DonateText from './DonateText';
import DonateCheckout from './DonateCheckout';
import { loadStripe } from '@stripe/stripe-js';

function Donate() {
  //DonteFrequency component related variables
  const donateFrequencyList = ['one-time', 'monthly'];
  const [isActive, setIsActive] = React.useState([true, false]);
  const [isHovered, setIsHovered] = React.useState(false);
  const donateAmountsList = ['500', '100', '50', '25'];
  const [frequencySelected, setFrequencySelected] = React.useState('one-time');
  const [amountSelected, setAmountSelected] = React.useState('25');
  const [isAmountActive, setIsAmountActive] = React.useState([
    false,
    false,
    false,
    true,
  ]);
  const [isAmountHovered, setIsAmountHovered] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const [customActive, setCustomActive] = React.useState(false);

  const handleMouseEvent = (event) => {
    event.preventDefault();
    const label = event.target.id;
    const eventname = event._reactName;
    const newArr = [...isAmountHovered];
    //for event onMouseEnter
    if (eventname === 'onMouseEnter') {
      if (label === 'one-time-label') {
        if (!isActive[0]) {
          setIsHovered(true);
        }
      } else if (label === 'monthly-label') {
        if (!isActive[1]) {
          setIsHovered(true);
        }
      } else if (label === 'D-A500-label') {
        if (!isAmountActive[0]) {
          newArr[0] = true;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A100-label') {
        if (!isAmountActive[1]) {
          newArr[1] = true;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A50-label') {
        if (!isAmountActive[2]) {
          newArr[2] = true;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A25-label') {
        if (!isAmountActive[3]) {
          newArr[3] = true;
          setIsAmountHovered(newArr);
        }
      }
    }
    //for event onMouseLeave
    else if (eventname === 'onMouseLeave') {
      if (label === 'one-time-label') {
        if (!isActive[0]) {
          setIsHovered(false);
        }
      } else if (label === 'monthly-label') {
        if (!isActive[1]) {
          setIsHovered(false);
        }
      } else if (label === 'D-A500-label') {
        if (!isAmountActive[0]) {
          newArr[0] = false;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A100-label') {
        if (!isAmountActive[1]) {
          newArr[1] = false;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A50-label') {
        if (!isAmountActive[2]) {
          newArr[2] = false;
          setIsAmountHovered(newArr);
        }
      } else if (label === 'D-A25-label') {
        if (!isAmountActive[3]) {
          newArr[3] = false;
          setIsAmountHovered(newArr);
        }
      }
    }
  };

  const handleClickEvent = (event) => {
    event.preventDefault();
    const label = event.target.id;
    if (label === 'one-time-label') {
      setIsActive([true, false]);
      setIsHovered(false);
      setFrequencySelected('one-time');
    } else if (label === 'monthly-label') {
      setIsActive([false, true]);
      setIsHovered(false);
      setFrequencySelected('monthly');
    } else if (label === 'D-A500-label') {
      setIsAmountActive([true, false, false, false]);
      setIsAmountHovered([true, false, false, false]);
      setAmountSelected('500');
      setCustomActive(false);
    } else if (label === 'D-A100-label') {
      setIsAmountActive([false, true, false, false]);
      setIsAmountHovered([false, true, false, false]);
      setAmountSelected('100');
      setCustomActive(false);
    } else if (label === 'D-A50-label') {
      setIsAmountActive([false, false, true, false]);
      setIsAmountHovered([false, false, true, false]);
      setAmountSelected('50');
      setCustomActive(false);
    } else if (label === 'D-A25-label') {
      setIsAmountActive([false, false, false, true]);
      setIsAmountHovered([false, false, false, true]);
      setAmountSelected('25');
      setCustomActive(false);
    } else if (label === 'D-ACustom-label') {
      setIsAmountActive([false, false, false, false]);
      setIsAmountHovered([false, false, false, false]);
      setCustomActive(true);
    }
  };

  //DonateDonor component related variables

  const inputFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [values, setValues] = React.useState(inputFields);
  const [show, setShow] = React.useState(true);
  const [priceId, setPriceId] = React.useState('');
  const [paymentMode, setPaymentMode] = React.useState('');
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log('name,value', name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDonation = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.classList.add('was-validated');
    console.log('inside form submission', form.checkValidity());
    console.log('values', values);
    if (form.checkValidity() === false) {
      console.log('inside if');
      event.preventDefault();
      event.stopPropagation();
    } else {
      const frequency = frequencySelected === 'one-time' ? 'ONCE' : 'REC';
      setPriceId(`REACT_APP_DONATION_PRICE_ID_${frequency}_${amountSelected}`);

      setPaymentMode(
        frequencySelected === 'one-time' ? 'payment' : 'subscription'
      );
      setShow(false);
    }
  };
  const handleDonationCancel = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const stripePromise = loadStripe(
    process.env.REACT_APP_PAYMENT_PUBLISHABLE_KEY
  );

  const donationCheckout = async () => {
    const stripe = await stripePromise;
    let domain = window.location.href.replace(/[^/]*$/, '');
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env[priceId], // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: paymentMode,
      successUrl: domain + 'success?session_id={CHECKOUT_SESSION_ID}',
      cancelUrl: domain + 'canceled',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) console.log('error');
  };

  return (
    <div className="donate-container container">
      <form
        onSubmit={handleDonation}
        className={`${show ? 'show' : 'hide'} needs-validation`}
        noValidate
      >
        <DonateText />
        <DonateFrequency
          donateFrequencyList={donateFrequencyList}
          donateAmountsList={donateAmountsList}
          handleMouseEvent={handleMouseEvent}
          handleClickEvent={handleClickEvent}
          isHovered={isHovered}
          isActive={isActive}
          isAmountHovered={isAmountHovered}
          isAmountActive={isAmountActive}
          customActive={customActive}
          handleInputChange={handleInputChange}
          amountSelected={amountSelected}
        />
        <DonateDonor handleInputChange={handleInputChange} />
      </form>
      <DonateCheckout
        show={show}
        frequencySelected={frequencySelected}
        amountSelected={amountSelected}
        // firstName={values.firstName}
        // lastName={values.lastName}
        // phone={values.phone}
        // email={values.email}
        // message={values.message}
        formValues={values}
        handleDonationCancel={handleDonationCancel}
        donationCheckout={donationCheckout}
      />
    </div>
  );
}

export default Donate;
