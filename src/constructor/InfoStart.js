import React from 'react';
import logo from './start.jpg';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';

function InfoStart({status, userName, password, submitSingIn}) {
    if (status === "signIn") {
        return <div className='start_img'>
                <SignInForm 
                    userName={userName} 
                    password={password} 
                    submitSingIn={submitSingIn}/>
            </div>
    } else if (status === "signUp") {
        return <div className='start_img'>
                <SignUpForm />
            </div>
    } else {
        return(
            <div className='start_img'>
                <img src={logo} alt='Logo' />
             </div>
        )
    }
}

export default InfoStart;