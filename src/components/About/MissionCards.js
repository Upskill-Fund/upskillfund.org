import React from 'react';
function MissionCards() {
  return (
    <div className="container cards-container">
      {/* <p className="text-center">mission cards</p> */}
      <div className="container cards-block ">
        <div className="mini-card">
          <div className="mcard">Training</div>
        </div>
        <div className="mini-card">
          <div className="mcard">Resources</div>
        </div>
        <div className="mini-card">
          <div className="mcard">Network</div>
        </div>
      </div>
    </div>
  );
}

export default MissionCards;
