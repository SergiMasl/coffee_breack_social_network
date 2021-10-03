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
            <div>
                <h3>What is your news</h3>
                <div>
                    <div>
                        <lable>
                            <input type='text' className='title' onChange={this.changeTitle}/>
                        </lable>
                    </div>
                    <div>
                        <lable className='wrap_text'>
                            <input type='text' className='text' onChange={this.changeText}/>
                        </lable>
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
        )
    }
}

export default  CreatNews