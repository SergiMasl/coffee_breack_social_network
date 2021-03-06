import React from "react";
import logo from '../imgs/start.jpg';
import history from '../../history.js'

function FormComponentSignIn(props) {

    const goTo = () => {
        history.push('/')
    }

    return (
        <div className='form_wrapper'>
            <form className='contener_form'>
                <button 
                    className='closed_btm'
                    onClick={goTo}
                >x</button>
                <div className='form_logo'>
                <img src={logo} alt='Logo'className='img-logo' />
                </div>
                <div className='wrap_form'>
                    <div className='form_head'>
                        <h1>Sign in</h1>
                        
                    </div>
                    <div>

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

                    </div>
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