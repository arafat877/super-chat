import React, { useState,useContext } from "react";
import "./Login.scss";
import FormInput from "../../components/formInput/FormInput";
import { AuthContext } from "../../context/auth/AuthContex";
import {loginUser} from "../../apiCalls/authApiCalls";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState("");

  const { currentUser, isFetching, error, dispatch } = useContext(AuthContext);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };
  
  const { email, password } = form;

  const handleSend = (e) => {
    e.preventDefault();
    loginUser({email,password},dispatch)
  };

  return (
    <div className="loginContainer vh-100 d-flex">
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
            {validationError && (
              <div className="alert alert-danger mt-1 p-1" role="alert">
                {validationError}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
              disabled={isFetching}
            >
              {isFetching && (
                <span
                  className="spinner-grow spinner-grow-sm mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
