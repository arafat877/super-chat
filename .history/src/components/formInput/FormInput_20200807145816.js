import React from "react";
import "./FormInput.scss";

const FormInput = ({ label,type, name, onChange, placeholder, small, error }) => {
  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
        />
        {small && <small>({small})</small>}
      </div>
      {error && (
        <div className="alert-sm alert-danger mt-1 p-1" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default FormInput;
