import React from 'react';




function WelcomBlock(handler) {
    return ( 
            <div className='main_cont'>
                <h1>Make it happening now</h1>
                <h3>Join our coffee break community</h3>
                <button 
                    className='btn_sart sign_in' 
                    onClick={handler} 
                    value='signIn'
                    >
                        Sign in
                </button>
                <button 
                    className='btn_sart sign_up' 
                    onClick={handler}
                    value="signUp"
                    >
                    Sign Up
                </button>
              
            </div>
    );
}

export default WelcomBlock;