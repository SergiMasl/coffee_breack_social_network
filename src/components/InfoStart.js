import React from 'react';
import logo from './imgs/start.jpg';
import SignInForm from './SignIn/SignIn.js';
import SignUpForm from './SignUp/SignUp.js';

function InfoStart({status}) {

    if (status === "signIn") {
        return (
            <div className='start_img'>
                <SignInForm />
            </div>
        )
    } else if (status === "signUp") {
        return (
            <div className='start_img'>
                <SignUpForm />
            </div>
        )
    } else {
        return(
            <div className='start_img'>
                <img src={logo} alt='Logo' />
             </div>
        )
    }
}

export default InfoStart;