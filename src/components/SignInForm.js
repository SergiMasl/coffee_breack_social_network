import React, { Component } from "react";
import FormComponentSignIn from './FormComponentSignIn.js';


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        };
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        
    }

    handleName(e) {
        this.setState({
            userName: e.target.value,
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }

    handleSubmit = () => {
        fetch('/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName: this.state.userName,
                    password: this.state.password,
                })
            })
            .then((response) => {
                if (response.ok) {
                    alert('Yep')
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
            <FormComponentSignIn  handlePassword={this.handlePassword} handleName={this.handleName} {...this.state} handleSubmit={this.handleSubmit}/>
           
        );
    }
}

export default SignInForm;