import React from 'react';
import logo from './start.jpg';

function InfoStart({status}) {
    if (status === "signIn") {
        return <p className='start_img'>'sing In'</p>
    } else if (status === "signUp") {
        return <p className='start_img'>'sing Up'</p>
    } else {
        return(
            <div className='start_img'>
                <img src={logo} alt='Logo' />
             </div>
        )
    }
}

export default InfoStart;