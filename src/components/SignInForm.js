import React, { Component } from "react";
import FormComponentSignIn from './FormComponentSignIn.js';


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(userName, password) {
        this.setState={
            userName,
            password,
        }
    }

      // handleSubmit() {} //???????
    
    render() {
        return (
            <FormComponentSignIn handleChange={this.handleChange} {...this.state} handleSubmit={handleSubmit}/>
        );
    }
}

export default SignInForm;