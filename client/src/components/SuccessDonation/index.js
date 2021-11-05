import React from 'react';
import { withRouter } from 'react-router-dom';
function SuccessDonation({ history }) {
  return (
    <div class="container d-flex flex-column align-items-center">
      <h1>Thank you for the generous donation </h1>
      <button className="btn btn-primary" onClick={() => history.push('/')}>
        {' '}
        Go to Home
      </button>
    </div>
  );
}

export default withRouter(SuccessDonation);
