import React, { useState } from "react";
import "./Login.scss";
import FormInput from "../../components/formInput/FormInput";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const handleSend = () => {};

  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container appWrapper1 m-auto">
        <div className="row justify-content-center">
          <span className="title">Login</span>
        </div>
        <div className="row justify-content-center">
          <form>
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

export default Login;
