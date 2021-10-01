import './App.css';
import React, { Component } from 'react';
import InfoStart from './constructor/InfoStart.js';
import WelcomBlock from './constructor/WelcomBlock.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: '',
            userName: '',
            password: '',
        }
    }

    handler = (status) => {
        this.setState({
            status,
        })
    }

    submitSingIn = () => {
        
    }


    render() {
        return ( 
            <main className='contener'>
                <InfoStart 
                    status={this.state.status}
                    userName={this.state.userName}
                    password={this.state.password}
                    submitSingIn={this.submitSingIn}
                />
                <WelcomBlock 
                    handler={this.handler}
                />
            </main>
        );
    }
}

export default App;