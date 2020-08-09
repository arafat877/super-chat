import React from "react";

const FormInput = ({ label, name, onchange, placeholder, small, error }) => {
  return (
    <>
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          name={name}
          onChange={onchange}
          className="form-control"
          placeholder={placeholder}
        />
        <small>({small})</small>
      </div>
      {error && (
        <div class="alert-sm alert-danger mt-1 p-1" role="alert">
          {error}
        </div>
      )}
    </>
  );
};

export default FormInput;
