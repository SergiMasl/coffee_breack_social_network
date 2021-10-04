import './styles/App.css';
import './styles/Forms.css';
import './styles/PostStyle.css';
import React, {Component} from 'react';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import history from './history.js'
import CreatNews from './components/CreatNews.js'
import SignInForm from './components/SignIn/SignIn.js'
import SignUpForm from './components/SignUp/SignUp.js'


import {
    Redirect,
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class  App extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            isLogged: false,
        };        
    }

    handler = (data) => {
        this.setState({
            user: data,
            isLogged: true,
        })
        console.log(this.state)
    }


    render() {
        return (
            <Router history={history}>
                <header className="header">
                    <p className="header_text">
                        {this.state.user.userName}
                    </p>
                </header>
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
                    <Route path='/signin'>
                        <SignInForm onLoggin={this.handler}/>
                    </Route>
                    <Route path='/signup'>
                        <SignUpForm />
                    </Route>

                    
                    
                </Switch>
            </Router>  
        )
    }
}

export default App;