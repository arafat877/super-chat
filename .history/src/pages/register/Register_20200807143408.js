import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const handleConfirmPassword = (event) => {
    if (event.target.value !== form.password) {
      setError({ ...error, passwordAgain: "Passwords do not match!" });
    } else {
      setError({ ...error, passwordAgain: "" });
    }
  };

  const handleSend = () => {};

  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container appWrapper1 p-2 m-auto">
        <div className="row justify-content-center">
          <span className="registerTitle">Register</span>
        </div>
        <div className="row justify-content-center">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                className="form-control"
                placeholder="Enter your username"
              />
              <small>(Username must be min 3 character)</small>
            </div>
            {error.name && (
              <div class="alert-sm alert-danger mt-1 p-1" role="alert">
                {error.name}
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={onChange}
                className="form-control"
                placeholder="Enter an email"
              />
            </div>
            {error.email && (
              <div class="alert-sm alert-danger mt-1 p-1" role="alert">
                {error.email}
              </div>
            )}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                onChange={onChange}
                className="form-control"
                placeholder="Enter a password"
              />
              <small>(Password must be min 6 character)</small>
            </div>
            {error.password && (
              <div class="alert-sm alert-danger mt-1 p-1" role="alert">
                {error.password}
              </div>
            )}
            <div className="form-group">
              <label>Password Again</label>
              <input
                type="password"
                name="passwordAgain"
                autoComplete="new-password"
                onChange={handleConfirmPassword}
                className="form-control"
                placeholder="Repeat your password"
              />
              {error.passwordAgain && (
                <div class="alert-sm alert-danger mt-1 p-1" role="alert">
                  {error.passwordAgain}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
