import React from 'react';

function DonateFrequency() {
  return (
    <section className="block-section">
      <div className="donation-amount-container">
        <section className="donation-amount">
          <div className="donation-amount-box">
            <div className="donation-amount-frequency-container">
              <div
                className="donation-amount-frequency-box"
                style={{ color: 'white', backgroundColor: '#5ab947' }}
              >
                <label>One time</label>
              </div>
              <div className="donation-amount-frequency-box">
                <label>Monthly</label>
              </div>
            </div>
            <p>
              Choose a <b>one time </b>amount
            </p>
            <ul className="donation-amount-list">
              <li
                className="donation-amount-list-value-box normal"
                style={{
                  color: 'white',
                  backgroundColor: '#5ab947',
                  border: '2px solid #5ab947',
                }}
              >
                <label className="amount-label rf">
                  <input
                    type="radio"
                    id="D-A500"
                    name="donation-amount"
                    className="donation-amount-list-input"
                  />
                  $500
                </label>
              </li>
              <li
                className="donation-amount-list-value-box normal"
                style={{
                  color: 'black',
                  backgroundColor: 'rgb(90, 185, 71,0.12)',
                  border: '2px solid #5ab947',
                }}
              >
                <label className="amount-label rf">
                  <input
                    type="radio"
                    id="D-A100"
                    name="donation-amount"
                    className="donation-amount-list-input"
                  />
                  $100
                </label>
              </li>
              <li
                className="donation-amount-list-value-box normal"
                style={{
                  color: 'black',
                  backgroundColor: 'rgb(90, 185, 71,0.12)',
                  border: '2px solid #5ab947',
                }}
              >
                <label className="amount-label rf">
                  <input
                    type="radio"
                    id="D-A50"
                    name="donation-amount"
                    className="donation-amount-list-input"
                  />
                  $50
                </label>
              </li>
              <li
                className="donation-amount-list-value-box normal"
                style={{
                  color: 'black',
                  backgroundColor: 'rgb(90, 185, 71,0.12)',
                  border: '2px solid #5ab947',
                }}
              >
                <label className="amount-label rf">
                  <input
                    type="radio"
                    id="D-A25"
                    name="donation-amount"
                    className="donation-amount-list-input"
                  />
                  $25
                </label>
              </li>
              <li
                className="donation-amount-list-value-box normal"
                style={{
                  color: 'black',
                  backgroundColor: 'rgb(90, 185, 71,0.12)',
                  border: '2px solid #5ab947',
                }}
              >
                <label className="amount-label rf">
                  <span>$</span>
                  <input
                    className="donation-amount-list-input custom-amount"
                    type="text"
                    pattern="[0-9]"
                    name="custom-amount"
                    placeholder="amount"
                  ></input>
                </label>
              </li>
              {/* <li className="donation-amount-list-value-box other">
                <label className="amount-label other" id="D-AOther">
                  <div id="custom-amount" class="currency-picker-container">
                    <div className="currency-picker-symbol-wrapper">
                      <div className="currency-picker-symbol-select-wrapper">
                        <select className="currency-picker-select">
                          <option label="USD" value="USD">
                            USD
                          </option>
                        </select>
                        <span className="currency-picker-short">USD</span>
                      </div>
                      <span className="currency-symbol">$</span>
                    </div>
                    <div className="custom-currency-input-container">
                      <input placeholder="Other"></input>
                    </div>
                  </div>
                </label>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

export default DonateFrequency;
