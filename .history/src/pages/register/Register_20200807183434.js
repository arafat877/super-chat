import React, { useState, useContext } from "react";
import "./Register.scss";
import FormInput from "../../components/formInput/FormInput";
import { AuthContext } from "../../context/auth/AuthContex";
import { registerUser } from "../../apiCalls/authApiCalls";
import Axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, isFetching, error, dispatch } = useContext(AuthContext);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const handleConfirmPassword = (event) => {
    if (event.target.value !== form.password) {
      setValidationErrors({
        ...validationErrors,
        passwordAgain: "Passwords do not match!",
      });
    } else {
      setValidationErrors({ ...validationErrors, passwordAgain: "" });
    }
  };

  const config = {
    "Content-Type": "text/html"
  };

  const handleSend = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/user/register", {
      name: "aqq",
      email: "anan@hotmail.com",
      password: "1234567",
    },config).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="registerContainer vh-100 d-flex">
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
              error={validationErrors.name}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Enter an email"
              error={validationErrors.email}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Enter a password"
              small="Password must be min 6 character"
              error={validationErrors.password}
            />
            <FormInput
              label="Password Again"
              type="password"
              name="passwordAgain"
              onChange={handleConfirmPassword}
              placeholder="Repeat your password"
              error={validationErrors.passwordAgain}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
              disabled={isLoading}
            >
              {isLoading && (
                <span
                  className="spinner-grow spinner-grow-sm mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
