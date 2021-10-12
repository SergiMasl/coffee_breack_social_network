import React, { Component } from 'react';
import apiService from "../services/api.service.js";
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
            alert(error)
        })
    }

  
    
    goTo = (url) => {
        history.push(url)
    }

    render() {
        const isLoggedIn = this.props.userStatus;
        let signPop = isLoggedIn ? 'non-visible' :  'header';
        let signOut = isLoggedIn ? 'header' :  'non-visible';
        return ( 
            <main className="contener">
                <div className={signPop}>
                    <button 
                        className='btn_sart sign_in' 
                        onClick={() => this.goTo("./signin")}
                        >
                        Sign in
                    </button>
                    <button 
                        className='btn_sart sign_up' 
                        onClick={() => this.goTo("./signup")} 
                        >
                        Sign Up
                    </button>
                </div>
                <div className={signOut}>
                    <button 
                        className='btn_sart sign_up' 
                        onClick={() => this.goTo("./")} 
                        >
                        Sign Out
                    </button>
                </div>

                <div className="contener_news">
                    {   this.state.news.map((post) =>
                            <Post data={post}/>)
                    }
                </div>
               
                <div className='wrap_add-news'>
                   { isLoggedIn && (<button className='add-news' onClick={() => this.toGo('./creat_news_form')}>Add news</button>) }
                </div>
            </main>
        );
    }
}

export default About;
