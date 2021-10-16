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
        }
    }


    goTo = (url) => {
        history.push(url)
    }

    // changeProf = (event) => {
    //     const { name, value, } = event.target;
    //     this.setState({
    //         [name]: value,
    //     });
    //     console.log()
    // }

    render() {
        console.log(this.props.user)
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
                                placeholder='Change status'
                                className='less_space'
                                //alue={status}
                                name='status'
                                onChange={this.changeProf}/>
                            <input 
                                type='text' 
                                placeholder='Change descriptions'
                                className='extra_space'
                                //value={descriptions}
                                name='descriptions'
                                onChange={this.changeProf}/>
                            <input 
                                type='text' 
                                placeholder='Change Photo'
                                className='less_space'
                                //value={photo}
                                name='photo'
                                onChange={this.changeProf}/>
                            <button 
                                className='save_sett'
                                //onClick={() => {this.goTo()}}
                            >Save</button>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}



export default Setting