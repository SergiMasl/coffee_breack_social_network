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
    }

    handleUser = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        console.log()
    }


    handleSubmit = () => {
        fetch('http://localhost:5000/api/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: this.state.userName,
                fName: this.state.fName,
                lName: this.state.lName,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone,

            })
        })
        .then((response) => {
            if (response.ok) {
                alert(`Thank you ${this.state.fName} ${this.state.lName}, you are sign up in the "Coffe-break" community`)
                return response.json();
            } else {
                alert(`${response.status}: ${response.statusText}`)
            }
        })
        .catch(error => {

            console.dir(error)
        })
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