import React from 'react';

function Input(props) {
  const required = props.required ? 'required' : '';
  return (
    <>
      {required ? (
        <>
          <label htmlFor={props.for} className="input-label required">
            {props.labelText}
          </label>
          <input
            name={props.name}
            value={props.value}
            type={props.type}
            className="form-control input-border"
            id={props.for}
            aria-describedby={props.aria}
            pattern={props.pattern}
            onChange={(event) => props.updateField(event)}
            required
          />
          <div className="invalid-feedback">
            {props.name === 'email'
              ? 'Enter valid Email Address'
              : props.name === 'phone-number'
              ? 'Enter valid phone number'
              : `${props.name.charAt(0).toUpperCase() + props.name.slice(1)} is
              required`}
          </div>
        </>
      ) : (
        <>
          <label htmlFor={props.for} className="input-label">
            {props.labelText}
          </label>
          <input
            name={props.name}
            value={props.value}
            type={props.type}
            className="form-control input-border"
            id={props.for}
            pattern={props.pattern}
            aria-describedby={props.aria}
            onChange={(event) => props.updateField(event)}
          />
          <div className="invalid-feedback">
            {props.name === 'email'
              ? 'Enter valid Email Address'
              : props.name === 'phone-number'
              ? 'Enter valid phone number'
              : `${props.name.charAt(0).toUpperCase() + props.name.slice(1)} is
            required`}
          </div>
        </>
      )}
    </>
  );
}

export default Input;
