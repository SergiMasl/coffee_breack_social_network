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
import Profile from './components/Profile.js'
import SignPopUp from './components/Profile.js'
import Setting from './components/Setting.js'


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
        console.log(data)
        this.setState({
            user: data,
            isLogged: true,
        })
    }


    render() {
        
        return (
            <div className='body'>
                <Router history={history}>
                    <Switch>
                        <Route path='/about'>
                            <About userStatus={this.state.isLogged}/>
                        </Route>
                        <Route path='/creat_news_form'>
                            <CreatNews user={this.state.user}/>
                        </Route>
                        <Route path='/signin'>
                            <SignInForm onLoggin={this.handler}/>
                        </Route>
                        <Route path='/signup'>
                            <SignUpForm />
                        </Route>
                        <Route path='/chanels/:chanelName' user={this.state.user}>
                            <Profile />
                        </Route>
                        <Route path='/profile/'>
                            <Profile isMine={true} user={this.state.user}/>
                        </Route>
                        <Route path='/sign-popup'>
                            <SignPopUp />
                        </Route>
                        <Route path='/setting'>
                            <Setting user={this.state.user}/>
                        </Route>
                        <Route path='/' exact>
                            <Welcome />
                        </Route>
                        
                        
                        
                        
                    </Switch>
                </Router>  
                {/* <div className='background'></div> */}
            </div>
        )
    }
}

export default App;