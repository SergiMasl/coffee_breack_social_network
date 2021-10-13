import React, { Component } from "react";
import apiService from "../../services/api.service.js";
import FormComponentSignUp from './FormTemplate.js';
import history from '../../history.js'

import Notify from 'simple-notify'
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
            console.log()
    }


    handleSubmit = () => {
        if (
            this.state.userName === '' || 
            this.state.password === '' || 
            this.state.phone === '' || 
            this.state.email === '' ||
            this.state.name === ''
        ) {
            return alert ('Заполнети поля')
        } else {
            
            apiService.signUp({
                userName: this.state.userName,
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
                phone: this.state.phone,
            })
                .then((response) => {
                if (response.ok) {
                    function pushNotify() {
                        new Notify({
                          status: 'success',
                          title: '',
                          text: 'Registration completed successfully',
                          effect: 'fade',
                          speed: 300,
                          customClass: null,
                          customIcon: null,
                          showIcon: true,
                          showCloseButton: true,
                          autoclose: false,
                          autotimeout: 3000,
                          gap: 20,
                          distance: 20,
                          type: 1,
                          position: 'right top'
                        })
                    }
                    pushNotify();
                    
                    history.push('/signin')
                    return response.json();
                } else {
                    alert(`${response.status}: ${response.statusText}`)
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