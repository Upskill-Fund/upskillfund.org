import React from 'react';
import { withRouter } from 'react-router-dom';

function CancelledDonation({ history }) {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h4>Oops! Sorry, something went wrong</h4>
      <button
        className="btn btn-primary"
        onClick={() => history.push('/donate')}
      >
        {' '}
        Please Try again{' '}
      </button>
    </div>
  );
}

export default withRouter(CancelledDonation);
