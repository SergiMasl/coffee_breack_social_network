import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function InfoStart() {
    return(
        <Router>
            <div className='start_img'>
                <Switch>
                    <Route path="/start">
                        <div>
                            <img src='./istockphoto-499906780-1024x1024.jpg' alt='Logo' />
                        </div>
                    </Route>
                    <Route path="/signInForm">
                        <signInForm />
                    </Route>
                    <Route path="/signUpForm">
                        <signUpForm />
                    </Route>
                </Switch>
            </div>
        </Router>

       
       
    )
}

export default InfoStart;