import React, { Component } from "react";
import FormComponentSignIn from './FormTemplate.js';
import apiService from "../../services/api.service.js";
import history from '../../history.js'


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
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then((data) => {
                this.props.onLoggin(data.user)})
            .then(() => {history.push('/about')})
            .catch((error) => {
                console.dir(error);
                alert(error.message)
            })
    } 
    
    render() {
        return (
            <FormComponentSignIn  
                handlePassword={this.handlePassword} 
                handleName={this.handleName} 
                {...this.state} 
                handleSubmit={this.handleSubmit}/>
           
        );
    }
}

export default SignInForm;