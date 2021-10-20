import React from 'react';

function DonateFrequency(props) {
  const {
    donateFrequencyList: frequency,
    donateAmountsList: amounts,
    handleMouseEvent,
    handleClickEvent,
    isHovered,
    isActive,
    isAmountHovered,
    isAmountActive,
    customActive,
    handleInputChange,
    amountInvalid,
    amountSelected,
  } = props;

  return (
    <section className="block-section">
      <div className="donation-amount-container">
        <section className="donation-amount">
          <div className="donation-amount-box">
            <div className="donation-amount-frequency-container">
              {frequency.map((item, index) => (
                <div
                  id={`${index}div`}
                  key={`${index}${item}`}
                  className="donation-amount-frequency-box"
                  style={
                    isActive[index]
                      ? {
                          color: 'rgb(255,255,255)',
                          backgroundColor: '#5ab947',
                        }
                      : {
                          color: '#5ab947',
                          backgroundColor: isHovered
                            ? 'rgba(90,185,71,0.12)'
                            : 'rgb(255,255,255)',
                        }
                  }
                >
                  <label
                    className="donation-amount-list-input-label"
                    onMouseEnter={handleMouseEvent}
                    onMouseLeave={handleMouseEvent}
                    onClick={handleClickEvent}
                    id={`${item}-label`}
                  >
                    <input
                      type="radio"
                      name="donation-frequency"
                      id={`donation-amount-${item}-radio-input`}
                      className="donation-amount-list-input"
                    />
                    {item}
                  </label>
                </div>
              ))}
            </div>
            {frequency.map((item, index) =>
              isActive[index] ? (
                <p key={item}>
                  Choose a <b>{item} </b>amount
                </p>
              ) : (
                ''
              )
            )}
            {
              <ul className="donation-amount-list">
                {amounts.map((value, index) => (
                  <li
                    key={`${value}`}
                    className="donation-amount-list-value-box normal"
                    style={
                      isAmountActive[index]
                        ? {
                            color: 'rgb(255,255,255)',
                            backgroundColor: '#5ab947',
                            border: '2px solid #5ab947',
                          }
                        : {
                            color: isAmountHovered[index]
                              ? 'rgb(255,255,255)'
                              : '#5ab947',
                            backgroundColor: isAmountHovered[index]
                              ? 'rgb(90, 185, 71)'
                              : 'rgba(90,185,71,0.12)',
                            border: '2px solid #5ab947',
                          }
                    }
                  >
                    <label
                      className="amount-label rf donation-amount-list-input-label"
                      id={`D-A${value}-label`}
                      onMouseEnter={handleMouseEvent}
                      onMouseLeave={handleMouseEvent}
                      onClick={handleClickEvent}
                    >
                      <input
                        type="radio"
                        id={`D-A${value}`}
                        name="donation-amount"
                        className="donation-amount-list-input"
                      />
                      {`$${value}`}
                    </label>
                  </li>
                ))}
                <li
                  className="donation-amount-list-value-box normal"
                  style={{
                    color: 'rgb(0,0,0)',
                    backgroundColor: 'rgb(255,255,255)',
                    border: customActive
                      ? '2px solid #5ab947'
                      : '2px solid rgb(0,0,0)',
                  }}
                >
                  <label className="amount-label rf donation-amount-list-input-label">
                    <span>$</span>
                    <input
                      id={`D-ACustom-label`}
                      onFocus={handleClickEvent}
                      className="donation-amount-list-input custom-amount"
                      type="text"
                      name="custom-amount"
                      value={customActive ? amountSelected : ``}
                      placeholder="amount"
                      onChange={handleInputChange}
                    ></input>
                  </label>
                </li>
              </ul>
            }
            {amountInvalid ? (
              <div className="d-flex justify-content-end">
                <small style={{ color: 'red' }}>
                  Please enter valid currency amount
                </small>
              </div>
            ) : (
              ''
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default DonateFrequency;
