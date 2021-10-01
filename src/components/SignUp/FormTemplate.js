import React from "react";

function FormComponentSignUp(props) {
    return (
        <form>
            <div className='wrap_form'>
                <h4>Sing Up</h4>
                <label>
                First name
                    <input 
                        type='text' 
                        name='fName'
                        className='user_input'
                        placeholder="First name"
                        onChange={props.handleUser}
                        value={props.fName}
                    />
                </label>
                <br />
                <label>
                Last name
                    <input 
                        type='text' 
                        name='lName'
                        className='user_input'
                        placeholder="Last name"
                        value={props.lName}
                        onChange={props.handleUser}
                    />
                </label>
                <br />
                <label>
                User name
                    <input 
                        type='text' 
                        name='userName'
                        className='user_input'
                        value={props.userName}
                        placeholder="User name"
                        onChange={props.handleUser}       
                    />
                </label>
                <br />
                <label>
                Email
                    <input 
                        type='text' 
                        name='email'
                        className='user_input'
                        value={props.email}
                        placeholder="Email"
                        onChange={props.handleUser}
                    />
                </label>
                <br />
                <label>
                Phone
                    <input 
                        type='number' 
                        name='phone'
                        className='user_input'
                        value={props.phone}
                        placeholder="Phone"
                        onChange={props.handleUser}
                    />
                </label>
                <br />
                <label>
                Password
                    <input 
                        type='password' 
                        name='password'
                        className='user_input'
                        value={props.password}
                        placeholder="Password"
                        onChange={props.handleUser}
                    />
                </label>
                <br />
                <button
                    type='button' 
                    className='btn_sub'
                    onClick={props.handleSubmit}>
                    Sign up
                </button>
            </div>
        </form>
    )
}

export default FormComponentSignUp;