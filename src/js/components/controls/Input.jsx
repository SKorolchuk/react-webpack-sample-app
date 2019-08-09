import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  label,
  text,
  type,
  id,
  value,
  handleChange,
  placeholder,
}) {
  return (
    <div className="form-group">
      <label htmlFor={label} className="sr-only">
        {text}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
