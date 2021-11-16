import React from 'react';

function TextArea(props) {
  return (
    <>
      <label htmlFor={props.for} className="input-label">
        {props.labelText}
      </label>
      <textarea
        name={props.name}
        className="form-control input-border"
        id={props.for}
        rows="3"
        onChange={(event) => props.updateField(event)}
      ></textarea>
    </>
  );
}

export default TextArea;
