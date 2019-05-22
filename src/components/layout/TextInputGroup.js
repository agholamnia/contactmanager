import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  type,
  classes,
  placeholder,
  name,
  value,
  onChange,
  message
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {value === "" ? (
        <div className="invalid-feedback">{name} is required</div>
      ) : (
        <div className="valid-feedback" />
      )}
      {value.length === 11 ? "" : message}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextInputGroup;
