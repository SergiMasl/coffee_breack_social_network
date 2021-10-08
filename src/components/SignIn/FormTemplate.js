import React from "react";
import logo from '../imgs/start.jpg';
import history from '../../history.js'

function FormComponentSignIn(props) {

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
                        <h1>Sing in</h1>
                        
                    </div>
                    <span>

                        <div className='wrap_input'>
                            <input 
                                type='text' 
                                className='input'
                                value={props.userName}
                                placeholder="User name"
                                onChange={props.handleName}
                            />
                        </div>
                        <div className='wrap_input'>
                            <input 
                                className='input'
                                type='password' 
                                value={props.password}
                                placeholder="Password"
                                onChange={props.handlePassword}
                            />
                        </div>

                    </span>
                    <div className='contaner_form_btm'>
                        <button
                            type='button' 
                            className='btn_sub'
                            onClick={props.handleSubmit}>
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>
        )
  }

  export default FormComponentSignIn;