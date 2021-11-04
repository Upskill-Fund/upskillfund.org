import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateDonor from './DonateDonor';
import DonateText from './DonateText';
import { EmailValidation, PhoneNumberValidation } from '../../helper';
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
  const [amountInvalid, setAmountInvalid] = React.useState(false);

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
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const emailErrorMessage = 'Enter valid email address';
  const [isValidPhoneNumber, setIsValidPhoneNumber] = React.useState(true);
  const phoneNumberErrorMessage = 'Enter valid phone number';
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [priceId, setPriceId] = React.useState('');
  const [paymentMode, setPaymentMode] = React.useState('');
  const handleInputChange = (event) => {
    event.preventDefault();
    const element = event.target.id;
    const value = event.target.value;
    if (element === 'D-ACustom-label') {
      if (value.match(/[a-z]/i)) {
        //amount is invalid if it has alphabets
        setAmountInvalid(true);
      } else {
        setAmountInvalid(false);
        setAmountSelected(value);
      }
    } else if (element === 'donor-firstname') {
      setFirstName(value);
    } else if (element === 'donor-lastname') {
      setLastName(value);
    } else if (element === 'donor-email') {
      setEmail(value);
    } else if (element === 'donor-ph-number') {
      setPhone(value);
    } else if (element === 'donor-message') {
      setMessage(value);
    }
  };

  const validateEmail = (event) => {
    const value = event.target.value;
    const emailValidity = EmailValidation(value);
    if (emailValidity) {
      // this is a valid email address

      setIsValidEmail(true);
    } else {
      // invalid email, show an error to the user.
      setIsValidEmail(false);
    }
  };
  const validatePhoneNumber = (event) => {
    const value = event.target.value;
    const phNumberValidity = PhoneNumberValidation(value);
    if (phNumberValidity || value === '') {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }
  };
  const handleDonation = (event) => {
    event.preventDefault();
    const frequency = frequencySelected === 'one-time' ? 'ONCE' : 'REC';
    setPriceId(`REACT_APP_DONATION_PRICE_ID_${frequency}_${amountSelected}`);

    setPaymentMode(
      frequencySelected === 'one-time' ? 'payment' : 'subscription'
    );
    setShow(false);
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
      <form onSubmit={handleDonation} className={show ? 'show' : 'hide'}>
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
          amountInvalid={amountInvalid}
          handleInputChange={handleInputChange}
          amountSelected={amountSelected}
        />
        <DonateDonor
          handleInputChange={handleInputChange}
          validateEmail={validateEmail}
          isValidEmail={isValidEmail}
          emailErrorMessage={emailErrorMessage}
          validatePhoneNumber={validatePhoneNumber}
          isValidPhoneNumber={isValidPhoneNumber}
          phoneNumberErrorMessage={phoneNumberErrorMessage}
        />
      </form>
      <DonateCheckout
        show={show}
        frequencySelected={frequencySelected}
        amountSelected={amountSelected}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        message={message}
        handleDonationCancel={handleDonationCancel}
        donationCheckout={donationCheckout}
      />
    </div>
  );
}

export default Donate;
