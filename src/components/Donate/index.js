import React from 'react';
import DonateFrequency from './DonateFrequency';
import DonateInformation from './DonateDonor';
import DonateText from './DonateText';

function Donate() {
  return (
    <div className="donate-container container">
      <form>
        <DonateText />
        <DonateFrequency />
        <DonateInformation />
      </form>
    </div>
  );
}

export default Donate;
