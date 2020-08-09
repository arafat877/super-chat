import React, { useState,useEffect } from "react";
import "./Register.scss";

const Register = () => {

  const [form, setForm] = useState({
    name: null,
    email: null,
    password: null,
    passwordAgain: null,
  });

  useEffect(()=>{
      form.password !== form.passwordAgain && console.log("errrorrr")
  },[form.password])

  console.log(form)

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };


  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container appWrapper1 p-2 m-auto">
        <div className="row justify-content-center">
          <span className="registerTitle">Register</span>
        </div>
        <div className="row justify-content-center">
          <form>
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                class="form-control"
                placeholder="Enter your username"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={onChange}
                class="form-control"
                placeholder="Enter an email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={onChange}
                class="form-control"
                placeholder="Enter a password"
              />
            </div>
            <div class="form-group">
              <label>Password Again</label>
              <input
                type="password"
                name="passwordAgain"
                onChange={onChange}
                class="form-control"
                placeholder="Repeat your password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
