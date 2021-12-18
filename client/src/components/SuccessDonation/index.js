import React from 'react';
import { withRouter } from 'react-router-dom';
function SuccessDonation({ history }) {
  return (
    <div class="container d-flex flex-column align-items-center justify-content-center success">
      <h1 style={{ textAlign: 'center' }}>
        Thank you for the generous donation{' '}
      </h1>
      <h4> Please check your email.</h4>
      <button className="btn btn-primary" onClick={() => history.push('/')}>
        {' '}
        Go to Home
      </button>
    </div>
  );
}

export default withRouter(SuccessDonation);
