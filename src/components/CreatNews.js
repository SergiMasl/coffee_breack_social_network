import React, { Component } from 'react';
import apiService from "../services/api.service.js";
import history from '../history.js'
// import { render } from '@testing-library/react';


class CreatNews extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    // componentDidMount() {
    //     console.log(this.props.userAuthor)
    // }
    

    addNews = () => {
        if (this.state.text === '' ) {
            alert('News text not entered')
            return  
            
            // TODO  add notification
        } else {

        const time = Date.now()
        console.log(this.props.name)

        apiService.createNews(
            {
                text: this.state.text,
                name: this.props.user.name,
                time: time,
                userName: this.props.user.userName,
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
                                className='input_text extra_space_text' 
                                onChange={this.changeText}
                                placeholder='News'/>
                        </div>
                        <div>
                            {/* Добавить картинку */}
                            
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