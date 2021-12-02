import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateDonor from './DonateDonor';
import DonateText from './DonateText';
import { useHistory } from 'react-router-dom';

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
  const [quantity, setQuantity] = React.useState(1);

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
      setAmountSelected('');
      setCustomActive(true);
    }
  };

  const handleCustomAmountInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (customActive === true && name === 'custom-amount') {
      setAmountSelected(value);
    }
  };

  React.useEffect(() => {
    const frequency = frequencySelected === 'one-time' ? 'ONCE' : 'REC';
    setPaymentMode(
      frequencySelected === 'one-time' ? 'payment' : 'subscription'
    );
    if (customActive === false) {
      setPriceId(`REACT_APP_DONATION_PRICE_ID_${frequency}_${amountSelected}`);
    } else {
      setQuantity(amountSelected);
      setPriceId(
        `REACT_APP_DONATION_PRICE_ID_${
          frequencySelected === 'one-time' ? 'ONCE' : 'REC'
        }_CUSTOM`
      );
    }
  }, [amountSelected, frequencySelected, customActive]);

  //DonateDonor component related variables

  const inputFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [values, setValues] = React.useState(inputFields);
  const [priceId, setPriceId] = React.useState('');
  const [paymentMode, setPaymentMode] = React.useState('');
  const history = useHistory();

  const handleDonorInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDonation = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.classList.add('was-validated');
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      history.push({
        pathname: '/donateCheckout',
        search:
          '?' +
          new URLSearchParams({
            frequencySelected: frequencySelected,
            amountSelected: amountSelected,
            quantity: quantity,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            message: values.message,
            priceId: priceId,
            paymentMode: paymentMode,
          }),
      });
    }
  };

  return (
    <div className="donate-container container">
      <form onSubmit={handleDonation} className={`needs-validation`} noValidate>
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
          handleCustomAmountInputChange={handleCustomAmountInputChange}
          amountSelected={amountSelected}
        />
        <DonateDonor handleDonorInputChange={handleDonorInputChange} />
      </form>
    </div>
  );
}

export default Donate;
