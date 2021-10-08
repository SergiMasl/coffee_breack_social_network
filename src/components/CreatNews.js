import React, { Component } from 'react';
import apiService from "../services/api.service.js";
import history from '../history.js'
import { render } from '@testing-library/react';


class CreatNews extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
        }
    }

    addNews = () => {
        if (this.state.title === '' && this.state.text === '' ) {
            return  
            
            // TODO  add notification
        } else {

        apiService.createNews(
            {
                title: this.state.title,
                text: this.state.text,
            }
        )
        .then((response) => {
            if (response.ok) { 

            return response.json();
        } else {
            throw new Error('Something wrong');
        }
        })
        .then(() =>{
        history.push('/about')
        })
        .catch((error)=> {
        console.dir(error)
        alert(error)
        })
    }}

    closed = () => {
        history.push('/about')
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
  
    render() {
        return(
            <span className='creat-news_contener'>
                <div className="wrap_news">
                    <div className='form_head'>
                        <h2>Creat your news</h2>
                        <button 
                            className='closed_btm cld_btm_add-news'
                            onClick={this.closed}
                        >x</button>
                    </div>
                    <div>
                        <div>
                            <input 
                                type='text' 
                                className='input_text' 
                                onChange={this.changeTitle}
                                placeholder='Title'/>
                            <input 
                                type='text' 
                                className='input_text extra_space_text' 
                                onChange={this.changeText}
                                placeholder='News'/>
                        </div>
                        <div>
                            {/* Добавить картинку */}
                            {/* Добавить эмодзи */}
                        </div>
                    </div>
                    <button 
                        className='addNews' 
                        onClick={this.addNews}
                        >Add news
                    </button>
                </div>
            </span>
        )
    }
}

export default  CreatNews