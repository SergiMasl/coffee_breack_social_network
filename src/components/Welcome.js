import React, { Component } from 'react';
import history from '../history.js'


function Welcome() {

    const goTo = (url) => {
        history.push(url)
    }

        return ( 
            <main className='contener' >
                    <div className='main_cont'>
                        <h1>Make it happening now</h1>
                        <h3>Join our coffee break community</h3>
                        <button 
                            className='btn_sart sign_in' 
                            onClick={() => goTo("/signin")}       
                        >
                                Sign in
                        </button>
                        <button 
                            className='btn_sart sign_up' 
                            onClick={() => goTo("/signup")} 
                            >
                            Sign Up
                    </button>
                </div>
            </main>
        );
}
export default Welcome;