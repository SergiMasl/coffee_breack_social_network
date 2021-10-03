import React, { Component } from 'react';
import apiService from "../services/api.service.js";
import addOldNews from './addOldNews.js'

class Home extends Component {
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
                news: data,
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
        console.log(this.state.news)
        return ( 
            <main className='contener'>
                
                <div className="contener_news">
                    <addOldNews news={this.state.news}/>
                </div>
               
                <div className='wrap_add-news'>
                    <button className='add-news' onClick={this.creatNews}>Add news</button>
                </div>
            </main>
        );
    }
}

export default Home;