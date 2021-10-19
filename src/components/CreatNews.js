import React, { Component } from 'react';
import apiService from "../services/api.service.js";
import history from '../history.js'
import notification from "../services/notification.js";


class CreatNews extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }    

    addPost = () => {
        if (this.state.text === '' ) {
            notification.pushNotify('error', 'Post text not entered')
            return  
        } else {

        apiService.createNews(
            {
                text: this.state.text,
                name: this.props.user.name,
                time: Date.now(),
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

    goTo = () => {
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
            <div className='creat-news_contener'>
                <div className="wrap_news">
                    <div className='form_head'>
                        <h2>Creat your news</h2>
                        <button 
                            className='closed_btm cld_btm_add-news'
                            onClick={this.goTo}
                        >x</button>
                    </div>
                        <textarea 
                            className='input_text extra_space_text' 
                            onChange={this.changeText}
                            placeholder='News'/>
                    <button 
                        className='addPost' 
                        onClick={this.addPost}
                        >Add post
                    </button>
                </div>
            </div>
        )
    }
}

export default  CreatNews