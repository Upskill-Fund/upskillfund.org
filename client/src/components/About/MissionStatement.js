import React from 'react';
import image from '../../images/destiny.jpg';
function MissionStatement() {
  return (
    <div className="container mission-stmt-container row">
      <div className="mission-box col-12 col-sm-12 col-md-6">
        <img className="image" src={image} alt="helping hand" />
      </div>
      <div className="mission-box col-12 col-sm-12 col-md-6">
        <p className="mission-stmt">
          Upskill Fund is dedicated to combating poverty and{' '}
          <span style={{ fontSize: '21px', fontWeight: '200' }}>
            <b>
              <i>violence and it's after effects </i>
            </b>
          </span>
          by providing a path of significant economic advancement for
          marginalized individuals through access to quality training, resources
          and an extensive network of mentors and employers in the tech field.
        </p>
      </div>
    </div>
  );
}

export default MissionStatement;
