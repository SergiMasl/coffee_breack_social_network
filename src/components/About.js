import React, { Component } from 'react';
import apiService from "../services/api.service.js";
import notification from "../services/notification.js";
import Post from './Post.js'
import history from '../history.js'

class About extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        apiService.getNews()
        .then((response) => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('Something wrong');
            }
        })
        .then((data)=>{
            this.setState({
                news: data.reverse(),
            })
        })
        .catch((error)=> {
            console.dir(error)
            notification.pushNotify('error', error)
        })
    }

  
    
    goTo = (url) => {
        history.push(url)
    }

    render() {
        const isLoggedIn = this.props.isLogged;
        let nav;
        if (!isLoggedIn) {
            nav = (<nav className='nav'>
                    <button 
                        className='btm-nav btm-nav-top' 
                        onClick={() => this.goTo("./signin")}
                        >
                        Sign in
                    </button>
                    <button 
                        className='btm-nav btm-nav-btn' 
                        onClick={() => this.goTo("./signup")} 
                        >
                        Sign Up
                    </button>
                </nav>)
        } else {
            nav =  (<nav className='nav'>
                        <button 
                            className='btm-nav btm-nav-top' 
                            onClick={() => this.goTo("./profile")} 
                        >
                        Profile
                        </button>
                        <button 
                            className='btm-nav btm-nav-btn' 
                            onClick={() => this.goTo("./")} 
                            >
                            Sign Out
                        </button>
                    </nav>)
          
        }
        
        return ( 
            <main className="contener">
                {nav}
                <div className="contener_news">
                    {   this.state.news.map((post) =>
                            <Post 
                                data={post} 
                                key={post.id} 
                            />)
                    }
                </div>
               
                <div className='wrap_add-news'>
                   { isLoggedIn && (<button className='add-news' onClick={() => this.goTo('./creat_news_form')}>Add news</button>) }
                </div>
            </main>
        );
    }
}

export default About;
