import React from 'react';
import skills from '../../images/skills.svg';
import doctor from '../../images/doctor.svg';
import baker from '../../images/mixer.svg';
import apparel from '../../images/sewing-machine.svg';
import engineer from '../../images/manager.svg';
import salary from '../../images/salary.svg';
import prohibition from '../../images/prohibition.svg';
function AnimationPlan3(props) {
  const { counter } = props;

  let text = '';
  if (props.counter === 1) {
    text = 'To become A Doctor';
  } else if (props.counter === 2) {
    text = 'To become A Baker';
  } else if (props.counter === 3) {
    text = 'To become An Engineer';
  } else if (props.counter === 4) {
    text = 'An Apparel-Designer or any ...';
  }

  return (
    <>
      <div className="container-fluid animation-container">
        <div className="image-text-container">
          <div className="text-container">
            <div
              className={`text-box ${
                props.animationComplete ? 'disappear' : ''
              }`}
            >
              <p>Have skills?</p>
            </div>
            <div
              className={`text-box ${
                props.animationComplete ? 'appear' : 'disappear'
              }`}
            >
              <p>But don't have enough resources?</p>
            </div>
          </div>
          <div className="image-container">
            <div
              className={`image-box ${
                props.animationComplete ? 'disappear' : 'appear'
              }`}
            >
              <p style={{ color: '#A04000' }}>{text} </p>
              <img src={skills} alt="skills" />
            </div>
            <div
              className={`image-box ${
                props.animationComplete ? 'appear' : 'disappear'
              }`}
            >
              <img src={salary} alt="salary" />
            </div>
            <div
              className={`image-box ${
                props.animationComplete ? 'appear' : 'disappear'
              }`}
            >
              <img
                src={prohibition}
                style={{ transform: 'scale(0.75)' }}
                alt="no salary"
              />
            </div>
            <div
              className={`image-box disappear ${
                counter === 1 || counter === 2 || counter === 3 || counter === 4
                  ? 'move-top-left'
                  : ''
              }`}
            >
              <img src={doctor} alt="doctor"></img>
            </div>
            <div
              className={`image-box disappear ${
                counter === 2 || counter === 3 || counter === 4
                  ? 'move-bottom-left'
                  : ''
              }`}
            >
              <img src={baker} alt="baker"></img>
            </div>
            <div
              className={`image-box disappear ${
                counter === 3 || counter === 4 ? 'move-bottom-right' : ''
              }`}
            >
              <img src={engineer} alt="engineer"></img>
            </div>
            <div
              className={`image-box disappear ${
                counter === 4 ? 'move-top-right' : ''
              }`}
            >
              <img src={apparel} alt="apparel-designer"></img>
            </div>
          </div>
          <div
            className={`bottom ${props.animationComplete ? 'show' : 'hide'}`}
          >
            <button className="btn btn-primary">Apply Now to Upskill</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimationPlan3;
