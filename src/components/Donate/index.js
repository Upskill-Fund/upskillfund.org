import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateInformation from './DonateDonor';
import DonateText from './DonateText';

function Donate() {
  const donateFrequencyList = ['one-time', 'monthly'];
  const [isActive, setIsActive] = React.useState([true, false]);
  const [isHovered, setIsHovered] = React.useState(false);
  const donateAmountsList = ['500', '100', '50', '25'];
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
    console.log('event', event.target.id);
    if (label === 'one-time-label') {
      setIsActive([true, false]);
      setIsHovered(false);
    } else if (label === 'monthly-label') {
      setIsActive([false, true]);
      setIsHovered(false);
    } else if (label === 'D-A500-label') {
      setIsAmountActive([true, false, false, false]);
      setIsAmountHovered([true, false, false, false]);
    } else if (label === 'D-A100-label') {
      setIsAmountActive([false, true, false, false]);
      setIsAmountHovered([false, true, false, false]);
    } else if (label === 'D-A50-label') {
      setIsAmountActive([false, false, true, false]);
      setIsAmountHovered([false, false, true, false]);
    } else if (label === 'D-A25-label') {
      setIsAmountActive([false, false, false, true]);
      setIsAmountHovered([false, false, false, true]);
    } else if (label === 'D-ACustom-label') {
      console.log('custom');
      setIsAmountActive([false, false, false, false]);
      setIsAmountHovered([false, false, false, false]);
      setCustomActive(true);
    }
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const amount = event.target.value;
    if (amount.match(/[a-z]/i)) {
      console.log('has alphabets');
      setAmountInvalid(true);
    } else {
      setAmountInvalid(false);
    }
  };
  return (
    <div className="donate-container container">
      <form>
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
        />
        <DonateInformation />
      </form>
    </div>
  );
}

export default Donate;
