import React from 'react';
import "./Register.scss"
import { Label } from '@material-ui/icons';

const Register = () => {
    return (
        <div className="appContainer vh-100 d-flex">
            <div className="container appWrapper m-auto">
                <div className="row justify-content-center">
                    <span className="registerTitle">Register</span>
                </div>
                <div className="row">
                    <form>
                        <Label>Username</Label>
                        <input />
                        <Label>Username</Label>
                        <input />
                        <Label>Username</Label>
                        <input />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;