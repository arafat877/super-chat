import React from "react";
import "./Register.scss";
import { Label } from "@material-ui/icons";

const Register = () => {
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
                class="form-control"
                placeholder="username"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter a password"
              />
            </div>
            <div class="form-group">
              <label>Password Again</label>
              <input
                type="password"
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
