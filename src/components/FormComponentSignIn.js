import React, { Component } from "react";

function FormComponentSignIn(props) {
    return (
       <form className='contener'>
            <div className='wrap_form'>
                <h4>Sing in</h4>
                <label>
                User name
                    <input 
                        type='text' 
                        className='user_input'
                        value={props.userName}
                        placeholder="User name"
                        onChange={props.handleName}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type='password' 
                        className='user_input'
                        value={props.password}
                        placeholder="Password"
                        onChange={props.handlePassword}
                    />
                </label>
                <button
                    type='button' 
                    className='btn_sub'
                    onClick={props.handleSubmit}>
                    Sign in
                </button>
            </div>
        </form>)
  }

  export default FormComponentSignIn;