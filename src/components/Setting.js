import React, { Component } from 'react';
import history from '../history.js'

class Setting extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            status: '',
            descriptions: '',
        }
    }

    goTo = (url) => {
        history.push(url)
    }

    render() {
        return (
            <span className='contener_sett'>
                <div className="wrap_sett">
                    <div className='title_sett'>
                        <h2>Update your Account</h2>
                        <button 
                            className='closed_btm cld_btm_add-news'
                            onClick={() => {this.goTo('/profile')}}
                            >x</button>
                    </div>
                    <div>
                        <div className='wrap_sett'>
                            <input 
                                type='text' 
                                placeholder='Change name'
                                className='less_space'/>
                            <input 
                                type='text' 
                                placeholder='Change status'
                                className='less_space'/>
                            <input 
                                type='text' 
                                placeholder='Change descriptions'
                                className='extra_space'/>
                            <input 
                                type='number' 
                                placeholder='Change Phone'
                                className='less_space'/>
                            <input 
                                type='text' 
                                placeholder='Change Email'
                                className='less_space'/>
                            <input 
                                type='text' 
                                placeholder='Change password'
                                className='less_space'/>
                            <button 
                                className='save_sett'
                                //onClick={() => {this.goTo('/setting')}}
                            >Save</button>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}



export default Setting