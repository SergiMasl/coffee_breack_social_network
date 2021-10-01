import React, { Component } from "react";
import FormComponentSignUp from './FormComponentSignUp.js';


class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            phone: "",
            email: "",
            lName: "",
            fName: "",
        };
        this.handleUser = this.handleUser.bind(this);
        
    }

    handleUser(event) {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        console.log()
    }


    handleSubmit = () => {
        
    } 
    
    render() {
        return (
            <FormComponentSignUp 
                handleUser={this.handleUser} 
                {...this.state} 
                handleSubmit={this.handleSubmit}
            /> 
        );
    }
}


export default SignUpForm;