import React, { Component } from "react";
import apiService from "../../services/api.service.js";
import notification from "../../services/notification.js";
import FormComponentSignUp from './FormTemplate.js';
import history from '../../history.js'
import 'simple-notify/dist/simple-notify.min.css'




class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            phone: "",
            email: "",
            name: "",
        };        
    }

    handleUser = (event) => {
            const { name, value, } = event.target;
            this.setState({
                [name]: value,
            });
    }
 

    handleSubmit = () => {
        if (
            this.state.userName === '' || 
            this.state.password === '' || 
            this.state.phone === '' || 
            this.state.email === '' ||
            this.state.name === ''
        ) {
            notification.pushNotify('error', 'Заполнети поля')
        } else {
            
            apiService.signUp(
                {
                    ...this.state
                })
                .then((response) => {
                if (response.ok) {
                    notification.pushNotify('success', 'Registration completed successfully')
                    history.push('/signin')
                    return response.json();
                } else {
                    notification.pushNotify('error', `${response.status}: ${response.statusText}`)
                }
            })
            .catch(error => {

                console.dir(error)
            })
        }
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