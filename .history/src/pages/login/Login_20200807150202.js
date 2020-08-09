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
              placeholder="Enter you email"
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Enter your password"
              small="Password must be min 6 character"
            />
            {error && <div className="alert alert-danger mt-1 p-1" role="alert">
              {error}
            </div>}
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
