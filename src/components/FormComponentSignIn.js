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
                        className='user_name_sign-in'
                        value={userName}
                        placeholder="User name"
                    />
                </label>
                <label>
                    Password
                    <input 
                        type='password' 
                        className='password_sign-in'
                        value={password}
                        placeholder="Password"
                    />
                </label>
                <button
                    type='button' 
                    className='btn_sign-in'
                    onClick={handleSubmit}>
                    Sign in
                </button>
            </div>
        </form>
  }
  export default FormComponent;
