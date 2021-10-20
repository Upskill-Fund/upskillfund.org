import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateDonor from './DonateDonor';
import DonateText from './DonateText';
import {
  EmailValidation,
  fetchFromAPI,
  PhoneNumberValidation,
} from '../../helper';
import DonateCheckout from './DonateCheckout';
import { useStripe } from '@stripe/react-stripe-js';

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

  const handleInputChange = (event) => {
    event.preventDefault();
    const element = event.target.id;
    const value = event.target.value;
    if (element === 'D-ACustom-label') {
      // const amount = event.target.value;
      if (value.match(/[a-z]/i)) {
        //amount is invalid if it has alphabets
        setAmountInvalid(true);
      } else {
        setAmountInvalid(false);
        setAmountSelected(value);
      }
    } else if (element === 'donor-firstname') {
      console.log('firstname', event.target.value);
      setFirstName(value);
    } else if (element === 'donor-lastname') {
      console.log('lastname', event.target.value);
      setLastName(value);
    } else if (element === 'donor-email') {
      console.log('email', event.target.value);
      setEmail(value);
    } else if (element === 'donor-ph-number') {
      console.log('ph number', event.target.value);
      setPhone(value);
    } else if (element === 'donor-message') {
      console.log('message', event.target.value);
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
    console.log('phNumberValidity', phNumberValidity);
    if (phNumberValidity || value === '') {
      setIsValidPhoneNumber(true);
    } else {
      setIsValidPhoneNumber(false);
    }
  };
  const handleDonation = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, phone, message);
    setShow(false);
  };

  const stripe = useStripe();

  const handleDonationCheckout = async (event) => {
    event.preventDefault();
    const line_items = [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: amountSelected * 100,
          product_data: {
            name: 'donation',
          },
        },
      },
    ];
    const response = await fetchFromAPI('create-checkout-session', {
      body: { line_items: line_items, customer_email: email },
    });
    const { sessionId } = response;
    console.log('sessionId', sessionId);
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.log(error);
    }
  };

  const handleDonationCancel = (event) => {
    event.preventDefault();
    setShow(true);
  };

  // console.log('amountSelected', amountSelected);
  // console.log('frequencySelected', frequencySelected);
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
        handleDonationCheckout={handleDonationCheckout}
        handleDonationCancel={handleDonationCancel}
      />
    </div>
  );
}

export default Donate;
