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
          <span className="title">Register</span>
        </div>
        <div className="row justify-content-center">
          <form>
            <FormInput
              label="Username"
              type="text"
              name="name"
              onChange={onChange}
              placeholder="Enter your username"
              small="Username must be min 3 character"
              error={error.name}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Enter an email"
              error={error.email}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Enter a password"
              small="Password must be min 6 character"
              error={error.password}
            />
            <FormInput
              label="Password Again"
              type="password"
              name="passwordAgain"
              onChange={handleConfirmPassword}
              placeholder="Repeat your password"
              error={error.passwordAgain}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
            >
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span> 
               <span className="ml-2">Sign Up</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
