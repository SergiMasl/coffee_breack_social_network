import './App.css';
import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import history from './history.js'
import CreatNews from './components/CreatNews.js'

import {
    Redirect,
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App () {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact>
                    <Welcome />
                </Route>
                
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/creat_news_form'>
                    <CreatNews />
                </Route>

                
                
            </Switch>
        </Router>
       
    )
}

export default App;