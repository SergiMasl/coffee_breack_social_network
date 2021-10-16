import React, { Component } from 'react';
import '../styles/ProfileCSS.css';
import apiService from "../services/api.service.js";
import history from '../history.js'
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            visClass: 'non-visible',
            name: '',
            status: '',
            descriptions: '',
            photo: '',
        }
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.user) {
                this.setState({
                    name: this.props.user.name,
                    status: this.props.user.status,
                    descriptions: this.props.user.descriptions,
                    photo: this.props.user.photo,
                    visClass: 'btn_sub',
            });
        } else {

            apiService.getProfile(this.props.match.params.chanelName)
            .then((res) => {
                if (res.ok) { 
                    return res.json();
                } else {
                    throw new Error('Something wrong');
                }
            })
            .then((data) => {
                this.setState({
                    name: data.chanel.name,
                    status: data.chanel.status,
                    name: data.chanel.name,
                    descriptions: data.chanel.descriptions,
                    photo: data.chanel.photo,
                })
            })
            .catch((error) => {
                console.dir(error);
                alert('Error: Something wrong')
            })
        }
    }


   
    goTo = (url) => {
        history.push(url)
    }

    render() {
        return (
            <div>
                <div className="profile">
                    <div className="content">
                        <button 
                            className='closed_prof '
                            onClick={() => {this.goTo('/about')}}
                        >x</button>
                        <div className="profilePic" style={{  backgroundImage: 'url(' + this.state.photo + ')' }}></div>
                        <h3> { this.state.name } </h3>
                        <h4> { this.state.status } </h4>
                        <p> { this.state.descriptions } </p>
                        <div className='wrap-btn_sub '>
                            <button 
                                className={this.state.visClass}
                                onClick={() => {this.goTo('/setting')}}
                            >Setting</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Profile)