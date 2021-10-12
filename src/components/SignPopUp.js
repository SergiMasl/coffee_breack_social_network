import React from "react"
import history from '../history.js'

function SignPopUp () {

    const goTo = (url) => {
        history.push(url)
    }

    return(
        <div class='sign-pop_wrap'>
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
    )
}

export default SignPopUp