import './App.css';
import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App () {
    return (
        <Router>
            <div>
                {/* <Link to='/welcome'>Welcome</Link> */}
                {/* <br />
                <Link to='/hew'>Hew</Link>
                <Link to='/'>Home</Link> */}
            </div>
            <Switch>
                <Route path='/'>
                    <Welcome />
                </Route>
                
                <Route path='/home'>
                    <div>erget</div>
                </Route>
                <Route path='/hew'>
                    <p>Hew</p>
                </Route>
                
            </Switch>
        </Router>
       
    )
}

export default App;