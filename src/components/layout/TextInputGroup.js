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
        <div className="valid-feedback">{name} is valid now</div>
      )}
      {value.length === 11 ? (
        <div
          style={{ fontSize: "12px", padding: "4px" }}
          className="text-success"
        >
          phone number is valid
        </div>
      ) : (
        message
      )}
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
