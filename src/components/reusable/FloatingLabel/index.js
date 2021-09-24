import React from 'react';

function FloatingLabel(props) {
  const [fieldActive, setFieldActive] = React.useState(false);
  // to activate the input field while typing
  const activateField = () => {
    setFieldActive(true);
    console.log('insite activate field');
  };
  // to deactivate input only if it's empty
  const disableFocus = (e) => {
    if (e.target.value === '') {
      setFieldActive(false);
    }
    console.log('inside disable focus');
  };
  const { label, type, name, value } = props;

  return (
    <div className="field-group">
      <label
        // check state the input, whether it is active then apply the class for floating label
        className={fieldActive ? 'field-active' : ''}
      >
        {label}
      </label>
      {props.element === 'input' && (
        <input
          className="floating-label"
          name={name}
          type={type}
          value={value}
          onFocus={() => activateField()}
          onBlur={(event) => disableFocus(event)}
          onChange={(event) => props.updateField(event)}
        />
      )}
      {props.element === 'textarea' && (
        <textarea
          className="floating-label"
          name={name}
          value={value}
          rows={props.rows}
          onFocus={() => activateField()}
          onBlur={(event) => disableFocus(event)}
          onChange={(event) => props.updateField(event)}
        >
          {value}
        </textarea>
      )}
    </div>
  );
}

export default FloatingLabel;
