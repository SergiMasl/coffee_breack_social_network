import React, { Component } from "react";
import apiService from "../../services/api.service.js";
import FormComponentSignUp from './FormTemplate.js';
import history from '../../history.js'




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
        apiService.signUp({
            userName: this.state.userName,
            fName: this.state.fName,
            lName: this.state.lName,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
        })
            .then((response) => {
            if (response.ok) {
                history.push('/about')
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