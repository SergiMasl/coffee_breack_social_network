import React, { Component } from 'react';
import '../styles/ProfileCSS.css';
import apiService from "../services/api.service.js";
import history from '../history.js'

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Fox News',
            status: 'News Channel',
            descriptions: ' The Fox News Channel, abbreviated FNC, commonly known as Fox News, and stylized in all caps, is an American multinational conservative cable news television channel based in New York City.',
        }
    }
     id1 = 1634162348657; //СNN
     id2; // Это USER

     //componentDidMount() {

         unknowUser = () => {
            apiService.getProfile({
                id: 1634162348657,
            })
                .then((response) => {
                    if (response.ok) { 
                        return response.json();
                    } else {
                        throw new Error('Something wrong');
                    }
                })
                .then((data) => {
                    this.setState({
                        name: data.name,
                        userName: data.userName
                    })
                })
                .catch((error) => {
                    console.dir(error);
                    alert('Error: Something wrong')
                })
        }
    // }
     
        // id1 ?  : GOT id from user
    // }

   
    goTo = (url) => {
        history.push(url)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.unknowUser}>Hello </button>

                <div className="profile">
                    <div className="content">
                    <button 
                            className='closed_prof '
                            onClick={() => {this.goTo('/about')}}
                        >x</button>
                        <div className="profilePic"></div>
                        <h3> { this.state.name } </h3>
                        <h4> { this.state.status } </h4>
                        <p> { this.state.descriptions } </p>
                        {/* <button className='settingUser'>Setting</button> */}
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default  Profile