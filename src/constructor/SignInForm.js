import React from 'react';

function SignInForm ({userName, password, submitSingIn}) {
    return(
        <form className='contener'>
            <div className='wrap_form'>
                <h4>Sing in</h4>
                <label>
                    user name
                    <input 
                        type='text' 
                        className='user_name_sign-in'
                        value={userName}
                    />
                </label>
                <label>
                    user name
                    <input 
                        type='password' 
                        className='password_sign-in'
                        value={password}
                    />
                </label>
                <label>
                    Sign in
                    <input 
                        type='button' 
                        className='btn_sign-in'
                        onClick={submitSingIn}
                    />
                </label>
            </div>
        </form>
    )
}

export default SignInForm;