import React, { useState } from "react";
import "./Register.scss";
import FormInput from "../../components/formInput/FormInput";

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
      <div className="container appWrapper1 m-auto">
        <div className="row justify-content-center">
          <span className="registerTitle">Register</span>
        </div>
        <div className="row justify-content-center">
          <form>
            <FormInput
              label="Username"
              name="name"
              onChange={onChange}
              placeholder="Enter your username"
              small="Username must be min 3 character"
              error={error.name}
            />
            <FormInput
              label="Email"
              name="email"
              onChange={onChange}
              placeholder="Enter an email"
              error={error.email}
            />
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
