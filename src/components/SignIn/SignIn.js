import React, { Component } from "react";
import FormComponentSignIn from './FormTemplate.js';
import apiService from "../../services/api.service.js";



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
        apiService.signIn({
            userName: this.state.userName,
            password: this.state.password,
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