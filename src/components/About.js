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
    
    creatNews = () => {
        history.push('./creat_news_form')
    }

    render() {
        return ( 
            <main className='contener'>
                
                <div className="contener_news">
                    {   this.state.news.map((post) =>
                            <Post data={post}/>)
                    }
                </div>
               
                <div className='wrap_add-news'>
                    <button className='add-news' onClick={this.creatNews}>Add news</button>
                </div>
            </main>
        );
    }
}

export default About;