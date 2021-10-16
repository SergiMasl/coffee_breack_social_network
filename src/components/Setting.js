import React, { Component } from 'react';
import history from '../history.js'
import apiService from "../services/api.service.js";


class Setting extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            status: '',
            descriptions: '',
            photo: '',
            id: '',

        }
    }

    componentDidMount() {
        console.log(this.props.user)
        this.setState({
            id: this.props.user.id,
            name: this.props.user.name,
            status: this.props.user.status,
            descriptions: this.props.user.descriptions,
            photo: this.props.user.photo,
        })
    }

    goTo = (url) => {
        history.push(url)
    }

    changeProf = (event) => {        
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        })       
    }

    submitChange = () => {
        apiService.subChange(
            {
                id: this.state.id,
                name: this.state.name,
                status: this.state.status,
                descriptions: this.state.descriptions,
                photo: this.state.photo,
            }
        )
        .then((response) => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('Something wrong');
            }
        })
        .then((data) => {
            this.props.update(data.user)
        })
        .then(() => {
            this.goTo('/profile')
        })
        .catch((error)=> {
            console.dir(error)
            alert(error)
        })
    }

    render() {
        return (
            <span className='contener_sett'>
                <div className="wrap_sett">
                    <div className='title_sett'>
                        
                        <button 
                            className='closed_sett'
                            onClick={() => {this.goTo('/profile')}}
                            >x</button>
                    </div>
                    <div>
                        <h2>Update your Account</h2>
                        <div className='wrap_sett'>
                            <input 
                                type='text' 
                                placeholder='Change Name'
                                className='less_space'
                                value={this.state.name}
                                name='name'
                                onChange={this.changeProf}/>
                            <input 
                                type='text' 
                                placeholder='Change status'
                                className='less_space'
                                value={this.state.status}
                                name='status'
                                onChange={this.changeProf}/>
                            <input 
                                type='text' 
                                placeholder='Change descriptions'
                                className='extra_space'
                                value={this.state.descriptions}
                                name='descriptions'
                                onChange={this.changeProf}/>
                            <input 
                                type='text' 
                                placeholder='Change Photo'
                                className='less_space'
                                value={this.state.photo}
                                name='photo'
                                onChange={this.changeProf}/>
                            <button 
                                className='save_sett'
                                onClick={() => {this.submitChange()}}
                            >Save</button>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}



export default Setting