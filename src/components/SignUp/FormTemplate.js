import React from "react";
import logo from '../imgs/start.jpg';
import history from '../../history.js'


function FormComponentSignUp(props) {

    const closed = () => {
        history.push('/')
    }

    return (
        <div className='form_wrapper'>
            <form className='contener_form'>
                <button 
                    className='closed_btm'
                    onClick={closed}
                >x</button>
                <div className='form_logo'>
                <img src={logo} alt='Logo' />
                </div>
                <div className='wrap_form'>
                    <div className='form_head'>
                        <h4>Sing Up</h4>
                        
                    </div>
                    <span>
                        <div className='wrap_input'>
                                <input 
                                    name='fName'
                                    className='input'
                                    type='text' 
                                    placeholder="First name"
                                    onChange={props.handleUser}
                                    value={props.fName}
                                />
                        </div>
                        <div className='wrap_input'>
                                <input 
                                    className='input'
                                    type='text' 
                                    name='lName'
                                    placeholder="Last name"
                                    value={props.lName}
                                    onChange={props.handleUser}
                                />
                        </div>
                        <div className='wrap_input'>
                                <input 
                                    className='input'
                                    type='text' 
                                    name='userName'
                                    value={props.userName}
                                    placeholder="User name"
                                    onChange={props.handleUser}  
                                />
                        </div>
                        <div className='wrap_input'>
                                <input 
                                    className='input'
                                    type='text' 
                                    name='email'
                                    value={props.email}
                                    placeholder="Email"
                                    onChange={props.handleUser}
                                />
                        </div>
                        <div className='wrap_input'>
                                <input 
                                    className='input'
                                    type='number' 
                                    name='phone'
                                    value={props.phone}
                                    placeholder="Phone"
                                    onChange={props.handleUser}
                                />
                        </div>
                        <div className='wrap_input'>
                                <input 
                                    className='input'
                                    type='password' 
                                    name='password'
                                    value={props.password}
                                    placeholder="Password"
                                    onChange={props.handleUser}
                                />
                        </div>
                    </span>
                    <div className='contaner_form_btm'>
                        <button
                            type='button' 
                            className='btn_sub'
                            onClick={props.handleSubmit}>
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormComponentSignUp;