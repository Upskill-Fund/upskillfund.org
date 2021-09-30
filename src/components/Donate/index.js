import React from 'react';

function Donate() {
  return (
    <div className="donate-container container">
      <form>
        <section className="block-section">
          <div className="donate-text">
            <h3>Even small donations have an impact.</h3>
            <p>
              When considering poverty in the developing world, many people feel
              deep sorrow but conclude that there is nothing we can do. The
              scale of poverty is immense and we seem powerless to stop it. Such
              despair is understandable, but the facts tell a very different
              story. While poverty is indeed extreme and widespread, it is easy
              to forget just how many people there are in the developed world,
              and how powerful our pocket change can become when pooled
              together. When giving to an effective charity, the size of your
              donation directly correlates with the number of people you are
              able to help. But you don’t have to be a millionaire to make a
              significant difference; even small donations have the potential to
              drastically improve an individual’s quality of life.
            </p>
          </div>
        </section>
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
                  <li className="donation-amount-list-value-box other">
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
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Donate;
